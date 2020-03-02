import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Weather = ({
  temperature,
  city,
  country,
  humidity,
  description,
  error,
}) => {
//   console.log('what is props', temperature, city, country, humidity, description, error);
  return (
    <View style={styles.header}>
      {city && country && <Text style={styles.text}> {`Location: ${city},${country}`}</Text>} 
      {temperature && <Text style={styles.text}> {`Temperature: ${temperature}`}</Text>}
      {humidity && <Text style={styles.text}> {`Humidity: ${humidity}`}</Text>}
      {description && <Text style={styles.text}> {`Description: ${description}`}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    padding: 15,
    backgroundColor: 'lightblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
  },
});

export default Weather;
