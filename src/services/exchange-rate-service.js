export default class ExchangeRateService  {
  static async getConvertedCurrency() { //no argument needed, API returns a list of conversion rates
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        //call an error message
        throw new Error(`${response.status} ${response.statusText} 
        ${jsonifiedResponse.message}`);
      }
      return jsonifiedResponse;
    } catch(error)  {
      return error;
    }
  }
}