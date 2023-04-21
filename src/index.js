import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './services/exchange-rate-service';

//Business Logic
//WIP: not getting a response from the API with the new request URL
async function getConversionRates(amountInput,initialCurrency,foreignCurrency)  {
  const response = await ExchangeRateService.getConversionRates();
  const currency1Id = initialCurrency.toUpperCase();
  const currency2Id = foreignCurrency.toUpperCase();
  const dollars = parseInt(Math.abs(amountInput));
  checkValidUsdInput(dollars);

  if (response.conversion_rates)  {
    //round converted amount to 2 decimals
    // const convertedAmount = Math.round(dollars*(response.conversion_rates[currencyId])*100)/100;
    const convertedAmount = response.conversion_result
    printElements(response,convertedAmount,currency1Id,currency2Id);
  // } else if (response.conversion_rates && checkValidCurrencyId(currencyId,response)===false) {
  //   printInputError();
  } else  {
    printError(response,currency1Id,currency2Id);
  }
}


// async function getConversionRates(dollarsInput,currencyInput,)  {
//   const response = await ExchangeRateService.getConversionRates();
//   const currencyId = currencyInput.toUpperCase();
//   const dollars = parseInt(Math.abs(dollarsInput));
//   checkValidUsdInput(dollars);

//   if (response.conversion_rates && (checkValidCurrencyId(currencyId,response)===true))  {
//     //round converted amount to 2 decimals
//     const convertedAmount = Math.round(dollars*(response.conversion_rates[currencyId])*100)/100;
//     printElements(response,convertedAmount,currencyId);
//   } else if (response.conversion_rates && checkValidCurrencyId(currencyId,response)===false) {
//     printInputError();
//   } else  {
//     printError(response,currencyId);
//   }
// }

function checkValidUsdInput(dollarsInput)  {
  //if the user does not enter a valid input, return the base conversion rate for 1$
  if (isNaN(dollarsInput)) {
    dollarsInput = 1;
  } else {
    return dollarsInput;
  }
}

// function checkValidCurrencyId(currencyId,response)  {
//   //checks if the entered currency type matches a key-value from the API
//   const validCurrencyIds = Object.keys(response.conversion_rates);

//   if (validCurrencyIds.includes(currencyId))  {
//     return true;
//   } else {
//     return false;
//   }
// }

//User Interface Logic

function printElements(response,convertedAmount,currency1Id,currency2Id)  {
  document.querySelector("#showResponse").innerText = `The current exchange rate from ${currency1Id} to ${currency2Id} is ${response.conversion_rates}.`;
  document.querySelector("#convertedAmount").innerText = `Converted Value: ${convertedAmount} ${currency2Id}`;
}

function printError(error,currency1Id,currency2Id) {
  document.querySelector('#showResponse').innerText = `Sorry, there was an error accessing the currency exchange rate for ${currency1Id} to ${currency2Id}: 
  ${error}.`;
}

// function printInputError()  {
//   document.querySelector("#showResponse").innerText = "Error: the currency you have entered does not exist. Please enter a valid currency";
// }

function handleFormSubmission(event) {
  event.preventDefault();
  const amount = parseInt(document.querySelector("#input-dollars").value);
  const resultingCurrency = document.querySelector("#input-convert-to").value;
  const startingCurrency = document.querySelector("#input-convert-from").value;
  console.log(amount,resultingCurrency,startingCurrency);
  document.querySelector("#showResponse").innerText = null;
  document.querySelector("#convertedAmount").innerText = null;
  getConversionRates(amount,startingCurrency,resultingCurrency);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});