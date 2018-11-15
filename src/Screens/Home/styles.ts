import { StyleSheet, Platform } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  cardContentView: {
    width: "97%",
    backgroundColor: "white",
    alignSelf: "center",
    height: 400,
    marginTop: 20,
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(0,0,0)",
        shadowOpacity: 0.5,
        shadowOffset: { height: 1, width: 0 }
      },
      android: {
        elevation: 4
      }
    })
  },
  cardTitleText: { color: "#2096f3", fontSize: 16, fontWeight: "500" },
  cardDate: { color: "gray", fontSize: 14 },
  cardImage: { width: "100%", height: 200 },
  cardInfoText: { color: "black", fontSize: 14, margin: 10 },
  cardBottomView: { flexDirection: "row", margin: 10 },
  cardBottomSingleView: { flex: 1, flexDirection: "row", alignItems: "center" },
  likeIcon : { width: 30, height: 30 },
  commentIcon : { width: 22, height: 22, tintColor: "gray" },
  likesText: {fontSize: 11, color: "red"},
  shareIcon : { width: 25, height: 25, tintColor: "gray" },
  commentText: { fontSize: 11 },
  shareText: { fontSize: 11 }

});
