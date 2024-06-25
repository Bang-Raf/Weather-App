import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeatherInfo = ({ weatherData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>{weatherData.name}</Text>
      <Text style={styles.temperatureText}>{weatherData.main.temp}°C</Text>
      <View style={styles.weatherContainer}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
          }}
          style={styles.weatherIcon}
        />
        <Text style={styles.weatherMainText}>
          {weatherData.weather[0].main}
        </Text>
      </View>
      <Text style={styles.descriptionText}>
        {weatherData.weather[0].description}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.labelText}>Visibility:</Text>
        <Text style={styles.valueText}>{weatherData.visibility} km</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.labelText}>Wind Speed:</Text>
        <Text style={styles.valueText}>{weatherData.wind.speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f0f4f7",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  locationText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  temperatureText: {
    fontSize: 80,
    fontWeight: "300",
    color: "#ff8c00",
    marginTop: 10,
  },
  weatherContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  weatherMainText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  descriptionText: {
    fontSize: 18,
    color: "#666",
    marginTop: 5,
    fontStyle: "italic",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  valueText: {
    fontSize: 16,
    color: "#666",
  },
});

export default WeatherInfo;
