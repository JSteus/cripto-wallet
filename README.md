# CRYPTO WALLET

> A simple crypto wallet mobile webapp.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Technologies Used

- React - version 17.0.2
- React Router Dom - 17.0.2
- Styled Components - version 5.3.3
- Redux - version 4.1.2
- Immer - version 9.0.12
- Firebase - version 9.6.7

## Setup

### Firebase Settings

Go to the [Firebase Console](https://console.firebase.google.com/u/2/), create an app and enable the email and password sign-in method in the Authentication tab.
get your Firebase configurations object (In projects configuration/your app) and paste it in src/services/firebase.ts

### Running Locally

This project was built without create-react-app.  
Clone this project and install it locally using yarn:

```
$ cd ./gavea-wallet
$ yarn
```

All packages and dependencies were installed with yarn. If you prefer using **_npm_**, delete the yarn.lock file

### Scripts

`$ yarn dev` 
Build the app in development mode with [Webpack](https://webpack.js.org/) and run the [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)

`$ yarn build` 
Build the app in production mode with Webpack.

`$ yarn test` 
Run the unit tests with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Project Status

This project is in progress. There's some features I'm planning to add in future updates.

## Room for Improvement

To do:

- Backend with NodeJs and Firebase Firestore
- Deploy on Heroku

## Acknowledgements

- Crypto wallet icons created by [BZZRINCANTATION](https://www.flaticon.com/free-icons/crypto-wallet).

## Contact

Created by [Mateus Nascimento](https://www.linkedin.com/in/mateus-nascimento-735b7b1b6/)
