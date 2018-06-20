import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import shortid from "shortid";
import City from "./City";
import football from "./data/ball.png";
import { Doughnut } from "react-chartjs-2";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/group?id=2643741,2464470,2800866,3703443,524901&units=metric&APPID=7373321721ec4fc8ecfb83165c626c60`
      )
      .then(({ data: { list } }) => {
        this.setState({
          data: list,
          city: ""
        });
      })
      .catch(console.log);
  }

  render() {
    const { data } = this.state;
    const formattedData = this.formatData(data);
    console.log(formattedData);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="headername">
            <img src={football} alt="A football" className="App-logo" />World
            Cup Weather App
            <img src={football} alt="A football" className="App-logo" />
          </h1>

          <select className="options" onChange={this.handleSelect}>
            <option selected="" value={""}>
              Choose a city
            </option>
            {Object.keys(formattedData).map(city => {
              return (
                <option
                  selected="selected"
                  value={city}
                  key={shortid.generate()}
                >
                  {city}
                </option>
              );
            })}
          </select>
        </header>

        {this.state.city && (
          <City cities={formattedData} currentCity={this.state.city} />
        )}
      </div>
    );
  }

  formatData = data => {
    return data.reduce((acc, datum) => {
      if (datum.name === "City of London") {
        acc["London"] = datum;
      } else if (datum.name === "Panama") {
        acc["Panama City"] = datum;
      } else {
        acc[datum.name] = datum;
      }
      return acc;
    }, {});
  };

  handleSelect = e => {
    this.setState({
      city: e.target.value
    });
  };
}

export default App;
