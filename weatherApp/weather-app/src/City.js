import React from "react";

const CityWeather = ({ cities, currentCity }) => {
  return (
    <div>
      <h1 className="App-city">
        Weather in {currentCity}, {cities[currentCity].sys.country}{" "}
      </h1>
      <h3>{cities[currentCity].main.temp}°C</h3>
      <h3>{cities[currentCity].weather[0].description}</h3>
      <table className="App">
        <tbody>
          <tr>
            <td>Humidity</td>
            <td>{cities[currentCity].main.humidity}%</td>
          </tr>
          <tr>
            <td>Max Temp</td>
            <td>{cities[currentCity].main.temp_max}</td>
          </tr>
          <tr>
            <td>Min Temp</td>
            <td>{cities[currentCity].main.temp_min}</td>
          </tr>
          <tr>
            <td>Sunrise</td>
            <td>{cities[currentCity].sys.sunrise}</td>
          </tr>
          <tr>
            <td>Sunset</td>
            <td>{cities[currentCity].sys.sunset}</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>{cities[currentCity].wind.speed}</td>
          </tr>
          <tr>
            <td>Icon</td>
            <td>{cities[currentCity].weather[0].icon}</td>
          </tr>
          <tr>
            <td>Main Forecast</td>
            <td>{cities[currentCity].weather[0].main}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CityWeather;
