// @ts-nocheck
import { Navigation } from "react-native-navigation"
import { registerScreens } from "./screens"
import MainTabBar from "./MainTabBar"
import HomeStack from "./HomeStack"

export const setAppRoot = async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: MainTabBar()
    }
  })
}

export default async () => {
  registerScreens()
  Navigation.events().registerAppLaunchedListener(() => {
    setAppRoot()
  })
}
