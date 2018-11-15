import { StyleSheet, Platform } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  profilePicContainer: {
    height: 400,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  profilePicContent: {
    width: 200,
    height: 200,
    borderRadius: 100,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(0,0,0)",
        shadowOpacity: 0.5,
        shadowOffset: { height: 2, width: 0 }
      },
      android: {
        elevation: 4
      }
    })
  },
  profilePicImage: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  userName: {
    color: "#2096f3",
    fontWeight: "600",
    fontSize: 30,
    marginTop: 20
  },
  analyticsView: {
    height: 60,
    flexDirection: "row",
    width: "100%",
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1
  },
  reviewsView : {
    flex: 1,
    alignItems: "center",
    margin: 10,
    borderRightColor: "#E0E0E0",
    borderRightWidth: 1
  },
  visitsView: {
    flex: 1,
    alignItems: "center",
    margin: 10
  },
  friendsView: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    borderLeftColor: "#E0E0E0",
    borderLeftWidth: 1
  },
  listView: { width: "95%", alignSelf: "center" },
  rowList : {
    width: "100%",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  leftRow: { flex: 8, flexDirection: "row" },
  travelIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
    tintColor: "black"
  },
  listText: { fontSize: 15, marginLeft: 10 },
  arrowIconView: { flex: 1, justifyContent: "flex-end" },
  arrowIcon: { width: 20, height: 20, tintColor: "#2096f3" },
  favoriteIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
    tintColor: "black"
  },
  historyIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
    tintColor: "black"
  },
  settingsIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
    tintColor: "black"
  }
});
