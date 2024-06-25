import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import CustomTextInput from "./customTextInput";

const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState("");

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        text={location}
        onChange={setLocation}
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => searchWeather(location)}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#ff8c00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WeatherSearch;