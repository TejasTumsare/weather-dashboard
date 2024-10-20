# Weather-Forecastgit  Dashboard


## Overview
-> The Weather Dashboard is a React-based application that allows users to search for cities and view current weather data and a 5-day forecast. Users can also save their favorite cities for quick access.

## Features
->Search for cities and view current weather and forecast.
->Save favorite cities for quick access.
->Toggle between metric and imperial units.

## Technologies Used
->React
->Axios (for API calls)
->JSON Server (for local storage of favorite cities)


## Getting Started
->Follow these instructions to set up and run the application locally.

## Prerequisites
-> Node.js and npm installed on your machine.
-> An API key from OpenWeatherMap (instructions below).

## Installation

-> Clone the repository:

on terminal/bash : git clone https://github.com/<username>/<repository-name>.git
on terminal/bash : cd <repository-name>


-> Install the dependencies:

on terminal/bash : npm install

## Setting Up JSON Server

-> Install JSON Server globally if you haven't already:

on terminal/bash : npm install -g json-server

->Start the JSON Server to serve the db.json file

on terminal/bash : json-server --watch db.json --port 5000

## OR
->npm run server (without JSON server)

## On other terminal start your React application

npm start


## How To Obtain API Key from OpenWeatherMap

Go to the OpenWeatherMap website.
Sign up for an account if you don’t already have one.
Once logged in, go to the API keys section of your account settings.
Copy the provided API key.
Configuring the API Key.

## Usage
-> Use the search bar to enter the name of a city.
-> Click on the Show Weather button to view the current weather and forecast.
-> Click the Add to Favorites button to save your favorite cities.
-> Navigate to the Favorite Cities section to view and remove your saved cities.