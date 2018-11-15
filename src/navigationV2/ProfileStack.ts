import { Screens } from "./screens"

export default () => ({
  children: [
    {
      component: {
        id: Screens.ProfileScreen,
        name: Screens.ProfileScreen
      }
    }
  ],
  options: {
    bottomTabs: {
      // @ts-ignore
    },
    bottomTab: {
      fontSize: 12,
      text: "Profile",
      textColor: "black",
      titleDisplayMode: "alwaysShow",
      disableSelectedIconTint: true,
      icon: require("../../assets/bottomBarIcons/profileIcon.png"),
      selectedIconColor: "#2096f3",
      selectedTextColor: "#2096f3"
    }
  }
})

