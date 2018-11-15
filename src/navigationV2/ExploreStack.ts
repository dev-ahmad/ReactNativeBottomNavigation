import { Screens } from "./screens"

export default () => ({
  children: [
    {
      component: {
        id: Screens.ExploreScreen,
        name: Screens.ExploreScreen
      }
    }
  ],
  options: {
    bottomTabs: {
      // @ts-ignore
    },
    bottomTab: {
      fontSize: 12,
      text: "Explore",
      textColor: "black",
      titleDisplayMode: "alwaysShow",
      disableSelectedIconTint: true,
      icon: require("../../assets/bottomBarIcons/exploreIcon.png"),
      selectedIconColor: "#2096f3",
      selectedTextColor: "#2096f3"
    }
  }
})
