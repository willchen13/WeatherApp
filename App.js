import React, {Component} from 'react';
import Header from './components/Header';
// import Form from './components/Form';
import {View, StyleSheet} from 'react-native';
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

  getWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=${this.state.city},${
        this.state.stateX
      },${this.state.country}&appid=${configs.WEATHER_APP_TOKEN}`,
    );
    const data = await api_call.json;
    console.log('what is data', data);
  };

  render() {
    return (
      <View style={styles.header}>
        <Header title="Weather Tracker" />
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
