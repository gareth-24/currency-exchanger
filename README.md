# _Currency Exchanger_

#### By _**Gareth Grindeland**_

#### A web application to convert from USD to an international currency using the ExchangeRate-API.

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Node.js version 16.13.1_
* _Webpack version 4.46.0_
* _Bootstrap version 5.2.3_
* _ExchangeRate-API_


## Description

_This is a web application that allows users to convert US dollars to another currency. After generating a free ExchangeRate-API key, the user can enter a USD amount and the three-letter ISO abbreviation for the desired output currency. After clicking submit, the webpage will display the current conversion rate between the currencies as well as the converted ammount. If an invalid currency abbreviation is used, an error message will display saying that the currency is not supported. If an API response is not received, the error will also be displayed. The form may be changed and resubmitted, as long as the user's API request limit has not been reached._

## Setup/Installation Requirements

* _Clone this repository to desired location_
* _Open your terminal_
* _Navigate to root directory of the project_
* _In the top level of the directory, create a new file named ".env" using the terminal command ```touch .env```_
* _Go to the ExchangeRate-API website to register for a free API key:_
[ExchangeRate-API](https://www.exchangerate-api.com/)
* _At the website, enter your email and click the "Get Free Key" button_
* _You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"_
* _At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month._
* _Open the ".env" file in the project directory and add your API key by entering the line ```API_KEY={xxx}``` where the ```{xxx}``` should be replaced with your private key. Be sure to follow this exact naming convention, including capitalization, then save the file._
* _Run the following commands in the terminal to install packages with npm:_
```
$ npm install
$ npm run build
$ npm run start
```
* _After running the "start" script, the webpage should automatically open in your browser._
* _Alternatively, after installation and bundling, you can run the application by opening ./dist/index.html in the browser if you do not need the live server._
* _To convert a currency, follow the directions on the form and click ```Submit```_
* _All source files are located in the ./src/ folder_


## Known Bugs

* _No known bugs as of 4/21/23_

## License

MIT License

Copyright (c) 2023 Gareth Grindeland