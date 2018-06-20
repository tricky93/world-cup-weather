import React from "react";
import { format } from "url";

class CityWeather extends React.Component {
  render() {
    const cities = this.props.cities;
    const currentCity = this.props.currentCity;

    const unixSunriseTimeStamp = cities[currentCity].sys.sunrise;
    const date = new Date(unixSunriseTimeStamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedSunrise =
      String(minutes).length === 2
        ? `${hours}:${minutes}`
        : `${hours}:${minutes}0`;

    const unixSunsetTimeStamp = cities[currentCity].sys.sunset;
    const sunSetdate = new Date(unixSunsetTimeStamp * 1000);
    const sunSethours = sunSetdate.getHours();
    const sunSetminutes = sunSetdate.getMinutes();
    const formattedSunset = `${sunSethours}:${sunSetminutes}`;

    return (
      <div>
        <h1 className="App-city">
          Weather in {currentCity}, {cities[currentCity].sys.country}{" "}
        </h1>
        <h3>{cities[currentCity].main.temp}°C</h3>

        <table class="table" align="center">
          <tbody>
            <tr>
              <td>Max Temp</td>
              <td>{cities[currentCity].main.temp_max} °C</td>
            </tr>
            <tr>
              <td>Min Temp</td>
              <td>{cities[currentCity].main.temp_min}°C</td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td>{formattedSunrise}</td>
            </tr>
            <tr>
              <td>Sunset</td>
              <td>{formattedSunset}</td>
            </tr>
            <tr>
              <td>Main Forecast</td>
              <td>{this.emojiWeather(cities[currentCity].weather[0].main)} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  emojiWeather = description => {
    const emojiLookUp = {
      rain: "🌧️",
      cloud: "☁️",
      clear: "☀️"
    };
    const lowerCase = description.toLowerCase();

    if (lowerCase.includes("rain")) {
      return emojiLookUp.rain;
    } else if (lowerCase.includes("clouds")) {
      return emojiLookUp.cloud;
    } else if (lowerCase.includes("clear")) {
      return emojiLookUp.clear;
    } else {
      return description;
    }
  };
}

export default CityWeather;
