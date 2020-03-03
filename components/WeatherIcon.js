/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';

const WeatherIcon = ({description}) => {
  const [icon, setIcon] = useState('');
  useEffect(() => {
    setIcon(
      description.includes('rain')
        ? 'https://weathericonsmvp.s3-us-west-1.amazonaws.com/2.png'
        : description.includes('clouds')
        ? 'https://weathericonsmvp.s3-us-west-1.amazonaws.com/5.png'
        : description.includes('clear') || description.includes('sky')
        ? 'https://weathericonsmvp.s3-us-west-1.amazonaws.com/1.png'
        : description.includes('snow')
        ? 'https://weathericonsmvp.s3-us-west-1.amazonaws.com/7.png'
        : description.includes('haze')
        ? 'https://weathericonsmvp.s3-us-west-1.amazonaws.com/4.png'
        : '',
    );
  }, [description]);

  return (
    <View style={styles.header}>
      {icon.length !== 0 && (
        <Image
          style={styles.image}
          source={{
            uri: icon,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 130,
    padding: 15,
    backgroundColor: 'lightblue',
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

export default WeatherIcon;
