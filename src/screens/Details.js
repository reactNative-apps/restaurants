import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Details = (props) => {
  const { navigation } = props;
  const {
    image_url,
    name,
    rating,
    review_count,
    is_closed,
    location,
    display_phone,
  } = navigation.getParam("restaurant");
  const { address1, zip_code, city, state } = location;

  return (
    <View>
      <Image source={{ uri: image_url }} style={styles.image} />
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text
          style={styles.address}
        >{`${address1}, ${city}, ${state} - ${zip_code}`}</Text>
        <Text>{display_phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detailContainer: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  address: {},
});

export default Details;
