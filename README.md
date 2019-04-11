React Native Boilerplate (Basic app structure)
===========================================

[![React Native](https://img.shields.io/badge/React%20Native-v0.58.3-blue.svg)](https://facebook.github.io/react-native/)
[![React Navigation V2](https://img.shields.io/badge/React%20Navigation-v3.1-blue.svg)](https://reactnavigation.org/)


React Native Boilerplate is a starting point for React Native application. This project is configured with redux, redux saga.


## Scalability Factor

This Type based Architecture scales smoothly for small - medium apps. 


## Features

* [Redux](http://redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/) 
* [React Navigation](https://reactnavigation.org/) (will configure soon)
* [Jest](https://facebook.github.io/jest/)
* [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))


## Prerequisites

* [Node](https://nodejs.org) v8.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo, `https://github.com/Sajid-Ali/react-native-boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder,  `rm -rf .git`

7. Run `yarn` or `npm install` to install dependencies

8. Run `react-native upgrade` to upgrade and add iOS & Android Folders.
  
9. Run `react-native link`


11. Start the packager with `npm start`
12. Connect a mobile device to your development machine
13. Run the test application:
  * On Android:
    * Run `react-native run-android`
  * On iOS:
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
14. Enjoy!!!


## Contributing

PRs are welcome
