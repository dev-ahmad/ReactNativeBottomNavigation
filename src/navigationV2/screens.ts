import { Navigation } from "react-native-navigation";
import { AppRegistry } from "react-native";
import HomeScreen from "../Screens/Home";
import ExploreScreen from "../Screens/Explore";
import ProfileScreen from "../Screens/Profile";

export enum Screens {
  HomeScreen = "HomeScreen",
  ExploreScreen = "ExploreScreen",
  ProfileScreen = "ProfileScreen"
}

export const registerScreens = () => {
  Navigation.registerComponent(Screens.HomeScreen, () => HomeScreen);
  Navigation.registerComponent(Screens.ExploreScreen, () => ExploreScreen);
  Navigation.registerComponent(Screens.ProfileScreen, () => ProfileScreen);
};
