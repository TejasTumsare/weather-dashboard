import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchCity from "./components/SearchCity.js";
import WeatherDisplay from "./components/WeatherDisplay";
import Favorites from "./components/Favorites";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    console.log(`City state in App: ${city}`);
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const fetchWeatherData = async (city) => {
    const API_KEY = "30d936cd83a90258057ff0e1cb7c160e";
    try {
      const currentWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );

      const filteredForecast = forecast.data.list.filter((forecastItem) =>
        forecastItem.dt_txt.includes("12:00:00")
      );

      setWeatherData(currentWeather.data);
      setForecastData(filteredForecast.slice(0, 5));
      localStorage.setItem("lastCity", city);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Unable to fetch weather data. Please try again.");
    }
  };

  const addFavorite = async (city) => {
    if (!favorites.some((favorite) => favorite.city === city)) {
      const newFavorite = { id: Date.now(), city };

      try {
        await axios.post("http://localhost:5000/favorites", newFavorite);
        setFavorites([...favorites, newFavorite]);
      } catch (error) {
        console.error("Error adding favorite city:", error);
        alert("Unable to add favorite city. Please try again.");
      }
    }
  };


  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
  };

  
  const showWeather = async (city) => {
    try {
      const API_KEY = "30d936cd83a90258057ff0e1cb7c160e";
      const currentWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );
      const filteredForecast = forecast.data.list.filter((forecastItem) =>
        forecastItem.dt_txt.includes("12:00:00")
      );
      setWeatherData(currentWeather.data);
      setForecastData(filteredForecast.slice(0, 5));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  

  return (
    <main className="app">
      <div className="dashboard">
        <SearchCity setCity={setCity} />
        <WeatherDisplay
          weatherData={weatherData}
          addFavorite={addFavorite}
          unit={unit}
          toggleUnit={() => setUnit(unit === "metric" ? "imperial" : "metric")}
          forecastData={forecastData}/>
        <Favorites
          favorites={favorites}
          showWeather={showWeather}
          removeFavorite={removeFavorite}
        />
      </div>
    </main>
  );
};

export default App;
