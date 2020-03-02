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
  };

  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Add City"
        onChangeText={changeCity}
        style={styles.input}>
        {' '}
      </TextInput>
      <TextInput
        placeholder="Add State"
        onChangeText={changeStateX}
        style={styles.input}>
        {' '}
      </TextInput>
      <TextInput
        placeholder="Add Country"
        onChangeText={changeCountry}
        style={styles.input}>
        {' '}
      </TextInput>
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
    flex: 1,
    paddingTop: 60,
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default Form;
