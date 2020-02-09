import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css';

const API_KEY = "d76367bf710245c023ef3c1dbee11865";

class App extends React.Component {


  state = {
    temperature: undefined,
    country: undefined,
    city: undefined,
    humidity: undefined,
    feels_like: undefined,
    min_temp: undefined,
    max_temp: undefined,
    description: undefined,
    wind: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    var error_message = "";
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (data.cod === 200) {
      this.setState({
        temperature: Math.round(data.main.temp),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        feels_like: Math.round(data.main.feels_like),
        min_temp: Math.round(data.main.temp_max),
        max_temp: Math.round(data.main.temp_min),
        wind: data.wind.speed,
        description: data.weather[0].description,
        error: ""
      });
    }
    else {

      if (data.cod === "404") {
        error_message = "Sorry location not found"
      }
      else if (data.cod === "400") {
        error_message = "Please enter a location"
      }

      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        feels_like: undefined,
        min_temp: undefined,
        max_temp: undefined,
        description: undefined,
        wind: undefined,
        error: error_message
      });
    }

  };

  render() {
    return (
      <div className="main">
        <div className="container">

          <Titles />

          <div className="form-container">
            <Form getWeather={this.getWeather} />
          </div>

          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            feels_like={this.state.feels_like}
            max_temp={this.state.max_temp}
            min_temp={this.state.min_temp}
            description={this.state.description}
            wind={this.state.wind}
            error={this.state.error} />

          <footer className="footer-text">
            <p> The app only supports the cities provided by the openweathermap api. </p>
          </footer>

        </div>

      </div>
    );
  }
}
export default App;
