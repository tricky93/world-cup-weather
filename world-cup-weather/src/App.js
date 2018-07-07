import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import City from "./City";
import DynamicMap from "./DynamicMap";
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
    return (
      <div className="App">
        <header>
          <h1 id="header">World Cup Weather</h1>
          <button
            class="button is-outlined is-danger"
            value={"Moscow"}
            onClick={this.handleSelect}
          >
            🇷🇺 Russia
          </button>
          <button
            class="button is-outlined is-danger"
            value={"Panama City"}
            onClick={this.handleSelect}
          >
            🇵🇦 Panama
          </button>
          <button
            class="button is-outlined is-danger"
            value={"London"}
            onClick={this.handleSelect}
          >
            🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
          </button>
          <button
            class="button is-outlined is-danger"
            value={"Tunis"}
            onClick={this.handleSelect}
          >
            🇹🇳 Tunisa
          </button>
          <button
            class="button is-outlined is-danger"
            value={"Brussels"}
            onClick={this.handleSelect}
          >
            🇧🇪 Belgium
          </button>
        </header>
        {this.state.city && (
          <div>
            <City cities={formattedData} currentCity={this.state.city} />
            <DynamicMap currentCity={this.state.city} cities={formattedData} />
          </div>
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
