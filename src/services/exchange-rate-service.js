export default class ExchangeRateService  {
  static async getConversionRates(amountInput,initialCurrency,foreignCurrency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${amountInput}/${initialCurrency}/${foreignCurrency}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error)  {
      return error;
    }
  }
}