import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css';

const API_KEY = "d76367bf710245c023ef3c1dbee11865";

class App extends React.Component {


  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    feels_like: undefined,
    min_temp: undefined,
    max_temp: undefined,
    description: undefined,
    wind : undefined,
    error: undefined
  }

  //  handleSubmit = () => {
  //   this.state.search = false;
  //   console.log("search is now off.")
  // }


  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (data.cod !== "404") {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        feels_like: data.main.feels_like,
        min_temp: data.main.temp_max,
        max_temp: data.main.temp_min,
        wind : data.wind.speed,
        description: data.weather[0].description,
        error: ""
      });
    }
    else {
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
        error: "Please enter a valid location"
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

        </div>
      </div>
    );
  }
}
export default App;
