import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";

import RestaurantsStack from "./restaurantStack";

const RestaurantsList = (props) => {
  const { title, restaurants, navigation } = props;

  return (
    <View style={styles.container}>
      {!!restaurants && restaurants.length > 0 && (
        <>
          <Text style={styles.title}>{`${title} (${restaurants.length})`}</Text>
          <FlatList
            horizontal
            keyExtractor={(restaurant) => restaurant.id}
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("DetailsWithImages", {
                      id: item.id,
                    })
                  }
                >
                  <RestaurantsStack restaurant={item} />
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  container: {
    marginBottom: 12,
    marginLeft: 12,
  },
});

export default withNavigation(RestaurantsList);
