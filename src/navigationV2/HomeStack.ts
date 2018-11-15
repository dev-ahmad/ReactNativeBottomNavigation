import { Screens } from "./screens"

export default () => ({
  id: "HOME_STACK",
  children: [
    {
      component: {
        id: Screens.HomeScreen,
        name: Screens.HomeScreen
      }
    }
  ],
  options: {
    bottomTabs: {
      // @ts-ignore
    },
    bottomTab: {
      fontSize: 12,
      text: "Home",
      textColor: "black",
      titleDisplayMode: "alwaysShow",
      disableSelectedIconTint: true,
      icon: require("../../assets/bottomBarIcons/homeIcon.png"),
      selectedIconColor: "#2096f3",
      selectedTextColor: "#2096f3"
    }
  }
})
