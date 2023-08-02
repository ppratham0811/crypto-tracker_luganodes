# Application Documentation

## Running the Frontend Application

1. Open the terminal and navigate to the "client" directory.
2. Install the required dependencies by running the following command: `npm install`
3. After the installation is complete, start the development server with: `npm run dev`

4. The frontend application will be accessible at [http://localhost:3000](http://localhost:3000).

## Running the Backend Application

1. Open the terminal and navigate to the "backend" directory.
2. Install the required dependencies by running the following command: `npm install`
3. After the installation is complete, start the backend server with: `npm run start`

4. The backend application will be accessible at [http://localhost:8000](http://localhost:8000).

## Usage of CoinMarketCap API

The application fetches the latest cryptocurrency details using the CoinMarketCap API. When the frontend application starts, it sends requests to the API to retrieve information about various cryptocurrencies.

## Setting Alerts for Cryptocurrencies

1. Click on any particular crypto coin to view its details on the crypto page.
2. On the crypto page, the user can set alerts for a specific cryptocurrency.
3. To set an alert, the user enters the desired price level in the provided input field.
4. The application will monitor the cryptocurrency's price, and if it reaches the specified alert price, the user will receive a notification. The user will be notified only once when the price hits the alert for the first time.

## Dependencies Used

The following dependencies were used in the frontend and backend applications:

### Frontend Dependencies:

- **@chakra-ui/next-js**: Version 2.1.5
- **@chakra-ui/react**: Version 2.8.0
- **@emotion/react**: Version 11.11.1
- **@emotion/styled**: Version 11.11.0
- **@types/node**: Version 20.4.5
- **@types/react**: Version 18.2.18
- **@types/react-dom**: Version 18.2.7
- **autoprefixer**: Version 10.4.14
- **axios**: Version 1.4.0
- **chart.js**: Version 4.3.2
- **eslint**: Version 8.46.0
- **eslint-config-next**: Version 13.4.12
- **framer-motion**: Version 10.15.0
- **next**: Version 13.4.12
- **postcss**: Version 8.4.27
- **react**: Version 18.2.0
- **react-dom**: Version 18.2.0
- **react-icons**: Version 4.10.1
- **tailwindcss**: Version 3.3.3
- **typescript**: Version 4.5.1

### Backend Dependencies:

- **bcrypt**: Version 5.0.1
- **body-parser**: Version 1.20.0
- **connect-mongo**: Version 4.6.0
- **cors**: Version 2.8.5
- **dotenv**: Version 16.3.1
- **express**: Version 4.18.2
- **express-session**: Version 1.17.3
- **helmet**: Version 7.0.0
- **jsonwebtoken**: Version 8.5.1
- **mongodb**: Version 4.7.0
- **mongoose**: Version 6.3.8
- **morgan**: Version 1.10.0

## Additional Information

For a seamless user experience, ensure that you have internet connectivity to fetch cryptocurrency data from the CoinMarketCap API. Also, make sure to allow notifications in your web browser to receive price alert notifications. Note that the frontend application runs on port 3000, while the backend runs on port 8000.
