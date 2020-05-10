import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import yelp from "../api/yelp";

const DetailsWithImages = (props) => {
  const { navigation } = props;
  const id = navigation.getParam("id");

  const [results, setResults] = useState();
  const [error, setError] = useState();

  console.log(results);

  const getResults = async (id) => {
    try {
      const response = await yelp.get(id);
      setResults(response.data);
    } catch (error) {
      setError("Something went wrong !");
    }
  };

  useEffect(() => {
    getResults(id);
  }, []);

  return (
    <View>
      {!!results && results.photos.length > 0 && (
        <FlatList
          horizontal
          data={results.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        ></FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 300,
    marginHorizontal: 6,
  },
});

export default DetailsWithImages;
