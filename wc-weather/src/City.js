import React from "react";

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
          {currentCity}, {cities[currentCity].sys.country}
        </h1>
        <h1>
          <span>{cities[currentCity].main.temp}°C</span>
        </h1>

        <h1>
          Sunrise: <span>{formattedSunrise}</span>
          Sunset: <span>{formattedSunset}</span>
          Main Forecast:<span>
            {" "}
            {this.emojiWeather(cities[currentCity].weather[0].main)}
          </span>
        </h1>
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
