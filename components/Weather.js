import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Weather = ({
  temperature,
  city,
  country,
  humidity,
  description,
  loading,
  imageLink,
}) => {
  if (loading) {
    return <Text> {'Loading Data...'} </Text>;
  }
  return (
    <View style={styles.header}>
      {description !== undefined && (
        <Image style={styles.image} source={require('../weatherIcons/5.png')} />
      )}
      {city && country && (
        <Text style={styles.text}> {`Location: ${city},${country}`}</Text>
      )}
      {temperature && (
        <Text style={styles.text}> {`Temperature: ${temperature}`}</Text>
      )}
      {humidity && <Text style={styles.text}> {`Humidity: ${humidity}`}</Text>}
      {description && (
        <Text style={styles.text}> {`Description: ${description}`}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    padding: 15,
    backgroundColor: 'lightblue',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 23,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Weather;
