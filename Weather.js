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
    subtitle : "집에서 넷플릭스나 볼까요?",
  },
  Drizzle : {
    iconName : "weather-rainy",
    iconColor : "black",
    gradient : ["#B8C4CD","#C8D3DF"],
    statusbar : "dark-content",
    subtitle : "우산을 잊지마세요.",
  },
  Rain : {
    iconName : "weather-pouring",
    iconColor : "white",
    gradient : ["#718090","#BFC8D6"],
    statusbar : "light-content",
    subtitle : "예쁜신발 신지 말고, \n 전투화를 신어보세요.",
  },
  Snow : {
    iconName : "weather-snowy",
    iconColor : "white",
    gradient : ["#75ADE0","white"],
    statusbar : "dark-content",
    subtitle : "아... 스키타러 가고싶다.",
  },
  Mist : {
    iconName : "weather-fog",
    iconColor : "#535c68",
    gradient : ["#D2D2D2","white"],
    statusbar : "dark-content",
    subtitle : "얼굴에 뿌리는 미스트가 아닙니다.",
  },
  Smoke : {
    iconName : "weather-fog",
    iconColor : "white",
    gradient : ["#6D6E71","#D5D6D9"],
    statusbar : "light-content",
    subtitle : "마스크 꼭 쓰세요!",
  },
  Haze :{
    iconName : "weather-fog",
    iconColor : "gray",
    gradient : ["#EDEDEB","white"],
    statusbar : "dark-content",
    subtitle : "비도오고 그래서.. 생각이나서..",
  },
  Dust : {
    iconName : "weather-fog",
    iconColor : "white",
    gradient : ["#AC9173","#CDAC86"],
    statusbar : "light-content",
    subtitle : "마스크 꼭 쓰세요!",
  },
  Fog: {
    iconName : "weather-fog",
    iconColor : "#535c68",
    gradient : ["#D2D2D2","white"],
    statusbar : "dark-content",
    subtitle : "안보여요! 차조심! 운전조심!",
  },
  Sand : {
    iconName : "weather-fog",
    iconColor : "white",
    gradient : ["#AC9173","#CDAC86"],
    statusbar : "light-content",
    subtitle : "와 중국을 없애버려야 하나..",
  },
  Ash : {
    iconName : "weather-fog",
    iconColor : "white",
    gradient : ["#3E0A12","#F4A82B"],
    statusbar : "light-content",
    subtitle : "화산이 폭발했어요! 도망가세요!",
  },
  Squall : {
    iconName : "weather-fog",
    iconColor : "white",
    gradient : ["#415D6E","#7A8B97"],
    statusbar : "light-content",
    subtitle : "갑자기 비가 올 수 있습니다. \n 우산 필수!",
  },
  Tornado : {
    iconName : "weather-tornado",
    iconColor : "white",
    gradient : ["#494950","#DCCED3"],
    statusbar : "light-content",
    subtitle : "제발 내 차야 날아가지 말아라!",
  },
  Clear : {
    iconName : "weather-sunny",
    iconColor : "white",
    gradient : ["#3B69C0","#608CEF"],
    statusbar : "light-content",
    subtitle : "놀러가유~!",
  },
  Clouds : {
    iconName : "weather-cloudy",
    iconColor : "white",
    gradient : ["#608CEF","#ADB2CA"],
    statusbar : "light-content",
    subtitle : "토끼구름 나비구름",
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

      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{condition}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
  },
  textContainer : {
    paddingHorizontal : 20, 
  },
  title : {
    color : weatherOptions[textCondition].iconColor,
    fontSize : 44,
    fontWeight : "300",
    marginBottom : 10,
    textAlign : "center"
  },
  subtitle : {
    color : weatherOptions[textCondition].iconColor,
    fontWeight : "600",
    fontSize : 24,
    textAlign : "center",
    marginBottom : 60,
  }
});