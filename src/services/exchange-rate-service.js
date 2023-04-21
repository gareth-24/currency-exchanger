export default class ExchangeRateService  {
  static async getConvertedCurrency() { //no argument needed, API returns a list of conversion rates
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        //call an error message
        // console.log("error is thrown in service file");
        const errorMessage = `${response.status} ${response.statusText}
        ${jsonifiedResponse.message}`;
        // console.log(`${response.status} ${response.statusText} ${jsonifiedResponse.message}`);
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error)  {
      return error;
    }
  }
}