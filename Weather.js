import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const weatherOptions = {
  Thunderstorm : {
    iconName : "weather-lightning-rainy",
    iconColor : "white",
    gradient : ["#1F384F","#4F6885"],
    statusbar : "light-content",
  },
  Drizzle : {
    iconName : "weather-rainy",
    iconColor : "black",
    gradient : ["#B8C4CD","#C8D3DF"],
    statusbar : "dark-content",
  },
  Rain : {
    iconName : "weather-pouring",
    iconColor : "white",
    gradient : ["#718090","#BFC8D6"],
    statusbar : "light-content",
  },
  Snow : {
    iconName : "weather-snowy",
    iconColor : "white",
    gradient : ["#75ADE0","white"],
    statusbar : "dark-content",
  },
  Mist : {
    iconName : "weather-fog",
    iconColor : "#535c68",
    gradient : ["#D2D2D2","white"],
    statusbar : "dark-content",
  },
  Smoke : {
    iconName : "weather-fog",
    iconColor : "white",
    gradient : ["#6D6E71","#D5D6D9"],
    statusbar : "light-content",
  },
  Haze :{
    iconName : "weather-fog",
    iconColor : "gray",
    gradient : ["#EDEDEB","white"],
    statusbar : "dark-content",
  },
  Dust : {
    iconName : "weather-fog",
    iconColor : "white",
    gradient : ["#AC9173","#CDAC86"],
    statusbar : "light-content",
  },
  Fog: {
    iconName : "weather-fog",
    iconColor : "#535c68",
    gradient : ["#D2D2D2","white"],
    statusbar : "dark-content",
  },
  Sand : {
    iconName : "weather-fog",
    iconColor : "white",
    gradient : ["#AC9173","#CDAC86"],
    statusbar : "light-content",
  },
  Ash : {
    iconName : "weather-fog",
    iconColor : "white",
    gradient : ["#3E0A12","#F4A82B"],
    statusbar : "light-content",
  },
  Squall : {
    iconName : "weather-fog",
    iconColor : "white",
    gradient : ["#415D6E","#7A8B97"],
    statusbar : "light-content",
  },
  Tornado : {
    iconName : "weather-tornado",
    iconColor : "white",
    gradient : ["#494950","#DCCED3"],
    statusbar : "light-content",
  },
  Clear : {
    iconName : "weather-sunny",
    iconColor : "white",
    gradient : ["#3B69C0","#608CEF"],
    statusbar : "light-content",
  },
  Clouds : {
    iconName : "weather-cloudy",
    iconColor : "white",
    gradient : ["#608CEF","#ADB2CA"],
    statusbar : "light-content",
  },
}
let textCondition = "Clear";


export default function Weather( {temp, condition}){
  textCondition = condition;
  return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
      <StatusBar barStyle={weatherOptions[condition].statusbar} />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color={weatherOptions[condition].iconColor}
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>

      <View style={styles.halfContainer}>
        <Text></Text>
      </View>

    </LinearGradient>
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
    color : weatherOptions[textCondition].iconColor,
  },
  halfContainer : {
    flex : 1 ,
    justifyContent : "center",
    alignItems : "center",
  }
});