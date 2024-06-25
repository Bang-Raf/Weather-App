import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const CustomTextInput = ({
  text,
  onChange,
  multiline = false,
  placeholder,
  numberOfLines,
  style,
}) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={[styles.input, style]}
      placeholder={placeholder}
      onChangeText={onChange}
      value={text}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
});

export default CustomTextInput;
