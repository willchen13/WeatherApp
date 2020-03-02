import React, {Component} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import {View, StyleSheet, Text} from 'react-native';
import configs from './configurations/configs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      stateX: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      // loading: false,
    };
  }

  getWeather = async (e, city, stateX, country) => {
    e.preventDefault();
    try {
      const api_call = await fetch(
        `api.openweathermap.org/data/2.5/weather?q=${city},${stateX},${country}&appid=${
          configs.WEATHER_APP_TOKEN
        }`,
      );
      const data = await api_call.json;
      console.log('what is data', data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View style={styles.header}>
        <Header title="Weather Tracker" />
        <Text> Check the weather conditions of a specific location.</Text>
        <Form getWeather={this.getWeather} />
        <Weather/>
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
