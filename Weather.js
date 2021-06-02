import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather( {temp}){
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="black" />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text></Text>
      </View>
    </View>
  );
}

Weather.propTypes = {
  temp : PropTypes.number.isRequired,
  condition :PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Smoke",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ]).isRequired,
  
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
  },
  temp : {
    fontSize : 28 ,
  },
  halfContainer : {
    flex : 1 ,
    justifyContent : "center",
    alignItems : "center",
  }
});