import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantStack = (props) => {
  const { restaurant } = props || {};
  const { image_url, name, rating, review_count, is_closed } = restaurant || {};

  return (
    <View style={styles.container}>
      <Image source={{ uri: image_url }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.reviewsContainer}>
          <Text>{`${rating} ratings, ${review_count} reviews`}</Text>
        </View>
        {is_closed ? (
          <Text style={styles.close}>Closed</Text>
        ) : (
          <Text style={styles.open}>Open</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 20,
  },
  image: {
    height: 100,
    width: 250,
    marginBottom: 20,
  },
  name: {
    marginBottom: 6,
    fontWeight: "bold",
  },
  reviewsContainer: {
    marginBottom: 6,
  },
  infoContainer: {
    marginHorizontal: 6,
  },
  close: {
    marginBottom: 6,
    color: "red",
  },
  open: {
    marginBottom: 6,
    color: "green",
  },
});

export default RestaurantStack;
