import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import shortid from "shortid";
import City from "./City";
import Manager from "./Manager";
import football from "./data/ball.png";
import sky from "./data/sky.png";
class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=7373321721ec4fc8ecfb83165c626c60`
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
    return (
      <div className="App">
        <header className="App-header">
<<<<<<< HEAD
          <h1 className="headername">
            <img src={football} className="App-logo" />World Cup Weather App
            <img src={football} className="App-logo" />
=======
          <h1>
            <img src={football} alt="A football" className="App-logo" />World
            Cup Weather App
            <img src={football} alt="A football" className="App-logo" />
>>>>>>> 30519215ce341b5590ce4fbb1feb2861ad778e93
          </h1>

          <select className="options" onChange={this.handleSelect}>
            <option value={""}>Choose a city</option>
            {Object.keys(formattedData).map(city => {
              return (
                <option value={city} key={shortid.generate()}>
                  {city}
                </option>
              );
            })}
          </select>
        </header>
        {this.state.city && (
          <City cities={formattedData} currentCity={this.state.city} />
        )}
        {this.state.city && (
          <Manager cities={formattedData} currentCity={this.state.city} />
        )}
        {/* <img src={sky} /> */}
      </div>
    );
  }

  formatData = data => {
    return data.reduce((acc, datum) => {
      acc[datum.name] = datum;
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
