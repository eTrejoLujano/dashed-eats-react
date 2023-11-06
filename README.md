# Dashed Eats
A food delivery web application built with Javascript and Python that gives users the power to conveniently order groceries and meals from any location via the Google Maps API.

## Project Overview
### Technlogies Used
- React: Used as the primary front-end library.
- Redux Toolkit: For state management.
- Django:
- Tailwind CSS:
- Amazon Web Services: Used for deployment of the backend infrastructure 

### Project Structure 
The project's codebase is organized as follows:
- `src/`: This directory contains the source code for the project
  - `Api`: Holds several different requests used to interact with the Django API.
  - `components`: Various components used in the project.
  - `redux-store`: The slices for redux toolkit's state management.
  - `App.js`: The main application component.
  - `main.js`: The entry point of the application.

## Getting Started
To run this project locally, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependies using `npm install`.
4. Obtain a [Google Map API Key](#Google-Maps-API-Key) and a Google Map ID.
5. Create an `.env` file with `VITE_GOOGLE_KEY` as the Google Map API Key and `VITE_MAP_ID` as the Google Map ID.
6. Start the development server with `npm start`.

This will launch the application locally for testing and development.

## Functionality of the App
### Home Page

<img width="1440" alt="Screenshot 2023-10-05 at 11 55 42 PM" src="https://github.com/eTrejoLujano/dashed-eats-react/assets/85711028/a3a3b65d-0670-42cc-9ac9-cef6d164931d">

### See All feature for Dashboards

![Screenshot 2023-10-05 at 11 55 42 PM (2)](https://github.com/eTrejoLujano/dashed-eats-react/assets/85711028/e9aef3c1-e520-471c-a0b1-2c430324d274)

### Pickup Feature with Map Node

<img width="1440" alt="Screenshot 2023-11-05 at 9 27 00 PM" src="https://github.com/eTrejoLujano/dashed-eats-react/assets/85711028/14e80f93-551a-41d1-98c9-46311916cc4c">


### Store Page with Cart

<img width="1440" alt="Screenshot 2023-10-05 at 11 59 13 PM" src="https://github.com/eTrejoLujano/dashed-eats-react/assets/85711028/5320518b-0067-4c29-aa61-feee12ba183e">

### Item Selection

<img width="1440" alt="Screenshot 2023-11-05 at 9 24 42 PM" src="https://github.com/eTrejoLujano/dashed-eats-react/assets/85711028/1661fd84-1e96-4156-806d-ca1bd30f48d6">

### Checkout

<img width="1440" alt="Screenshot 2023-10-05 at 11 59 38 PM" src="https://github.com/eTrejoLujano/dashed-eats-react/assets/85711028/9cefdcd5-dcba-461f-b117-ca33e0a1abe5">

### Order History

<img width="1440" alt="Screenshot 2023-10-06 at 12 04 59 AM" src="https://github.com/eTrejoLujano/dashed-eats-react/assets/85711028/22cb75e5-8b99-44b6-9b99-d96fba26fce7">

### Order Receipt

<img width="1440" alt="Screenshot 2023-10-06 at 12 05 47 AM" src="https://github.com/eTrejoLujano/dashed-eats-react/assets/85711028/537fd77f-f7f9-4a2c-89ff-9d3de8d99afb">

### Edit Account Info.

<img width="1440" alt="Screenshot 2023-11-05 at 9 25 13 PM" src="https://github.com/eTrejoLujano/dashed-eats-react/assets/85711028/3594eb82-0aa4-447c-af31-d85e139ca75a">

<img width="1440" alt="Screenshot 2023-11-05 at 9 25 30 PM" src="https://github.com/eTrejoLujano/dashed-eats-react/assets/85711028/7e5416d5-c5ef-4061-b913-bd6e2df0b53e">

## Google Maps API Key
To obtain a Google Maps API Key for this project, follow these steps:
  1. Go to the [Google Developer Console](https://console.developers.google.com).
  2. Create a new project.
  3. Manage API's and enable the following required Google Maps Platform APIs for this project:
     - Maps JavaScript API
     - Address Validation API
     - Geocoding API
     - Places API
     - Distance Matrix API
  4. Create credentials to obtain the Maps API key.

## Google Map ID
To obtain a Google Map ID for this project, follow these steps:
  1. Go to the [Google Developer Console](https://console.developers.google.com).
  2. Click the sidebar menu then go to Google Maps Platform then to Map Management.
  3. Click on Create Map ID.
  4. Give it a name and set the map type to Javascript as a Vector.
