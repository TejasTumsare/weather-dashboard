import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData, addFavorite, unit, toggleUnit, forecastData }) => {
  if (!weatherData) {
    return <div style={{ textAlign: 'center'}}>Search for a city to display weather information.</div>;
  }

  const convertTemp = (temp) => {
    return unit === 'metric'
      ? (temp - 273.15).toFixed(2) 
      : (((temp - 273.15) * 9) / 5 + 32).toFixed(2);
  };

  const convertWindSpeed = (speed) => {
    return unit === 'metric' ? speed : (speed * 3.6).toFixed(2);
  };

  const handleAddToFavorites = () => {
    addFavorite(weatherData.name);  
  };

  return (
    <div className="weather-display">
      <h2>Current Weather in {weatherData.name}</h2>
      <p><strong>Temperature: </strong> {convertTemp(weatherData.main.temp)}° {unit === 'metric' ? 'C' : 'F'}</p>
      <p><strong>Weather: </strong>{weatherData.weather[0].description}</p>
      <p><strong>Wind Speed: </strong>{convertWindSpeed(weatherData.wind.speed)} {unit === 'metric' ? 'm/s' : 'km/h'}</p>
      <div className="weather-button">
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
        <button onClick={toggleUnit}>Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}</button>
      </div>
      
      <h3>5-Day Forecast</h3>
      <div className="forecast">
        {forecastData.map((forecast, index) => (
          <div key={index} className="forecast-day">
            <p><strong>Date: </strong>{new Date(forecast.dt_txt).toLocaleDateString()}</p>
            <p><strong>Time: </strong>{new Date(forecast.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather[0].description}
              className="weather-icon"
            />
            <p><strong>Temp: </strong>{convertTemp(forecast.main.temp)}° {unit === 'metric' ? 'C' : 'F'}</p>
            <p><strong>Weather: </strong>{forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
