import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './services/exchange-rate-service';

//Business Logic

async function getConvertedCurrency(dollars,currencyId)  {
  const response = await ExchangeRateService.getConvertedCurrency();
  console.log(response.conversion_rates.CAD);
  console.log(dollars,currencyId);
  if (response.conversion_rates)  {
    const convertedAmount = dollars*(response.conversion_rates[currencyId]);
    printElements(response,convertedAmount);
  } else  {
    printError(response);
  }
}

//User Interface Logic

function printElements(response,convertedAmount)  {
  document.querySelector("#showResponse").innerText = `The exchange rate is ${response.conversion_rates.CAD}. Converted amount: ${convertedAmount}`;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the currency exchange rate data: 
  ${error}.`;
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