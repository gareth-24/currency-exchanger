import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './services/exchange-rate-service';

//Business Logic

async function getConversionRates(dollarsInput,currencyInput)  {
  const response = await ExchangeRateService.getConversionRates();
  const currencyId = currencyInput.toUpperCase();
  const dollars = parseInt(Math.abs(dollarsInput));
  checkValidUsdInput(dollars);
  // console.log(dollars,currencyId);
  // console.log(typeof dollars);
  if (response.conversion_rates && (checkValidCurrencyId(currencyId,response)===true))  {
    //round converted amount to 2 decimals
    const convertedAmount = Math.round(dollars*(response.conversion_rates[currencyId])*100)/100;
    printElements(response,convertedAmount,currencyId);
  } else if (response.conversion_rates && checkValidCurrencyId(currencyId,response)===false) {
    printInputError();
  } else  {
    printError(response,currencyId);
  }
}

function checkValidUsdInput(dollarsInput)  {
  //if the user does not enter a valid input, return the base conversion rate for 1$
  if (isNaN(dollarsInput)) {
    dollarsInput = 1;
  } else {
    return dollarsInput;
  }
}

function checkValidCurrencyId(currencyId,response)  {
  //checks if the entered currency type matches a key-value from the API
  const validCurrencyIds = Object.keys(response.conversion_rates);
  // console.log(validCurrencyIds);
  if (validCurrencyIds.includes(currencyId))  {
    // console.log("valid currency");
    return true;
  } else {
    // console.log("not a valid currency");
    return false;
  }
}

//User Interface Logic

function printElements(response,convertedAmount,currencyId)  {
  document.querySelector("#showResponse").innerText = `The current exchange rate from USD to ${currencyId} is ${response.conversion_rates[currencyId]}.`;
  document.querySelector("#convertedAmount").innerText = `Converted Value: ${convertedAmount} ${currencyId}`;
}

function printError(error,currencyId) {
  document.querySelector('#showResponse').innerText = `Sorry, there was an error accessing the currency exchange rate for ${currencyId}: 
  ${error}.`;
  // console.log("printError has been triggered");
}

function printInputError()  {
  document.querySelector("#showResponse").innerText = "Error: the currency you have entered does not exist. Please enter a valid currency";
}

function handleFormSubmission(event) {
  event.preventDefault();
  const dollars = document.querySelector("#input-dollars").value;
  const currencyId = document.querySelector("#input-convert-to").value;
  // document.querySelector("#input-dollars").value = null;
  // document.querySelector("#input-convert-to").value = null;
  document.querySelector("#showResponse").innerText = null;
  document.querySelector("#convertedAmount").innerText = null;
  getConversionRates(dollars,currencyId);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});