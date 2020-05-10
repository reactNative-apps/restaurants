import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

import SearchBar from "../components/searchBar";
import RestaurantsList from "../components/restaurantsList";
import useResult from "../hooks/useResult";

const Search = (props) => {
  const {} = props;
  const [searchText, setSearchText] = useState("american");
  const [location, setLocation] = useState("07080");
  const [error, searchApi, result] = useResult(searchText, location);

  const filterResultsByPrice = (price) => {
    return result.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <SearchBar
          searchTerm={searchText}
          onChangeSearchTerm={setSearchText}
          placeholder="Food"
        />
        <SearchBar
          searchTerm={location}
          onChangeSearchTerm={setLocation}
          placeholder="place or zip"
        />
        <Button title="Search" onPress={searchApi} />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
      {!error && !!result && result.length > 0 && (
        <ScrollView>
          <RestaurantsList
            title="Cost Effective"
            restaurants={filterResultsByPrice("$")}
          />
          <RestaurantsList
            title="Bit Pricer"
            restaurants={filterResultsByPrice("$$")}
          />
          <RestaurantsList
            title="Big Spender!"
            restaurants={filterResultsByPrice("$$$")}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flex: 1,
  },
  error: {
    fontWeight: "bold",
    fontSize: 20,
    color: "red",
    textTransform: "uppercase",
  },
  searchBox: {
    marginBottom: 12,
  },
});

export default Search;
