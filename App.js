import React, {Component} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import WeatherIcon from './components/WeatherIcon';
import {View, StyleSheet, Text} from 'react-native';
import configs from './configurations/configs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      loading: false,
    };
    this.getWeather = this.getWeather.bind(this);
  }

  // getWeather = async (city, stateX, country) => {
  //   try {
  //     const api_call = await fetch(
  //       `http://api.openweathermap.org/data/2.5/weather?q=${city},${stateX},${country}&appid=${
  //         configs.WEATHER_APP_TOKEN
  //       }`,
  //     );
  //     const data = await api_call.json;
  //     console.log('what is data', data);
  //     this.setState({
  //       temperature: data.main.temp,
  //       city: data.name,
  //       country: data.sys.country,
  //       humidity: data.main.humidity,
  //       description: data.weather[0].description,
  //       error: '',
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  getWeather(city, stateX, country) {
    // console.log('data', city, stateX, country);
    // console.log('token is', configs.WEATHER_APP_TOKEN);
    this.setState({loading: true});
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${stateX},${country}&appid=${
          configs.WEATHER_APP_TOKEN
        }`,
      )
      .then(({data}) => {
        console.log('data received', data);
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          loading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const convertKelvinToCelsius = kelvin => {
      if (kelvin < 0) {
        return 'below absolute zero';
      } else {
        return JSON.stringify(kelvin - 273.15);
      };
    };
    return (
      <View style={styles.header}>
        <Header title="Weather Tracker" />
        <Text> Check the weather conditions of a specific location.</Text>
        <Form getWeather={this.getWeather} />
        <WeatherIcon description={this.state.description} />
        <Weather
          temperature={this.state.temperature && convertKelvinToCelsius(Number(this.state.temperature))}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
