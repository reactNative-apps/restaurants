import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import yelp from "../api/yelp";

const SearchBar = (props) => {
  const {
    onChangeSearchTerm,
    searchTerm,
    onTermSubmitted,
    placeholder,
  } = props;

  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        placeholder={placeholder}
        value={searchTerm}
        style={styles.input}
        onChangeText={onChangeSearchTerm}
        onEndEditing={onTermSubmitted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 12,
    marginHorizontal: 12,
    backgroundColor: "#F0EEEE",
    borderRadius: 4,
    height: 50,
    borderWidth: 1,
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    paddingLeft: 6,
  },
});

export default SearchBar;
