import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/Home";
import DetailsScreen from "./src/screens/Details";
import SearchScreen from "./src/screens/Search";
import Search from "./src/screens/Search";
import DetailsWithImagesScreen from "./src/screens/DetailsWithImages";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    Details: DetailsScreen,
    DetailsWithImages: DetailsWithImagesScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurants Search",
    },
  }
);

export default createAppContainer(navigator);
