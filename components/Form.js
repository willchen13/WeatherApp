import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const Form = ({getWeather}) => {
  const [city, setCity] = useState('');
  const [stateX, setStateX] = useState('');
  const [country, setCountry] = useState('');

  const changeCity = textValue => setCity(textValue);
  const changeStateX = textValue => setStateX(textValue);
  const changeCountry = textValue => setCountry(textValue);

  const onPress = e => {
    e.preventDefault();
    console.log('pressed it');
  };

  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Add City"
        onChangeText={changeCity}
        style={styles.input}
        value={city} />
      <TextInput
        placeholder="Add State"
        onChangeText={changeStateX}
        style={styles.input}
        value={stateX}/>
      <TextInput
        placeholder="Add Country"
        onChangeText={changeCountry}
        style={styles.input}
        value={country}/>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress();
        }}>
        <Text> Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    // paddingTop: 60,
    // borderBottomWidth: 1,
    padding: 10,
  },
  input: {
    height: 60,
    fontSize: 16,
    padding: 15,
    backgroundColor: '#f8f8f8',
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default Form;
