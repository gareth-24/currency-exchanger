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
    const convertedAmount = dollars*(response.conversion_rates.currencyId);
    printElements(response,convertedAmount);
  } else  {
    printError(response);
  }
}

//User Interface Logic

function printElements(response)  {
  document.querySelector('showResponse').innerText = `The exchange rate is ${response.exchange_rate.CAD}. Converted amount: ${convertedAmount}`;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the currency exchange rate data: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  //WIP get inputs from submit form and call conversion rate functions
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});