import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './services/exchange-rate-service';

//Business Logic

async function getConvertedCurrency(dollars,currencyId)  {
  const response = await ExchangeRateService.getConvertedCurrency();
  // console.log(dollars,currencyId);
  if (response.conversion_rates)  {
    const convertedAmount = dollars*(response.conversion_rates[currencyId]);
    printElements(response,convertedAmount,currencyId);
  } else  {
    printError(response,currencyId);
  }
}

//User Interface Logic

function printElements(response,convertedAmount,currencyId)  {
  document.querySelector("#showResponse").innerText = `The current exchange rate from USD to ${currencyId} is ${response.conversion_rates.CAD}. Converted amount: ${convertedAmount}`;
}

function printError(error,currencyId) {
  document.querySelector('#showResponse').innerText = `Sorry, there was an error accessing the currency exchange rate for ${currencyId}: 
  ${error}.`;
  console.log("printError has been triggered");
}

function handleFormSubmission(event) {
  event.preventDefault();
  const dollars = document.querySelector("#input-dollars").value;
  const currencyId = document.querySelector("#input-convert-to").value;
  getConvertedCurrency(dollars,currencyId);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});