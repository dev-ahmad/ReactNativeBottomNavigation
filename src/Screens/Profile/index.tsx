import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView
} from "react-native";
import styles from "./styles";
type Props = {};
export default class App extends Component<Props> {
  static get options() {
    return {
      topBar: {
        drawBehind: true,
        visible: false,
        backButton: {
          visible: false
        }
      }
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.profilePicContainer}>
          <View style={styles.profilePicContent}>
            <Image
              style={styles.profilePicImage}
              resizeMode={"cover"}
              source={{
                uri:
                  "https://cdn.vox-cdn.com/thumbor/WqMY2QINJvS9H0tqdrFBXsg2ghk=/0x86:706x557/1200x800/filters:focal(0x86:706x557)/cdn.vox-cdn.com/imported_assets/847184/stevejobs.png"
              }}
            />
          </View>
          <Text style={styles.userName}>Steve Jobs</Text>
        </View>
        <View style={styles.analyticsView}>
          <View style={styles.reviewsView}>
            <Text>12</Text>
            <Text>Reviews</Text>
          </View>
          <View
            style={styles.visitsView}
          >
            <Text>16</Text>
            <Text>Visits</Text>
          </View>
          <View style={styles.friendsView}>
            <Text>20</Text>
            <Text>Friends</Text>
          </View>
        </View>
        <View style={styles.listView}>
          <View style={styles.rowList}>
            <View style={styles.leftRow}>
              <Image
                style={styles.travelIcon}
                resizeMode={"contain"}
                source={require("../../../assets/profileIcons/ListIcon.png")}
              />
              <Text style={styles.listText}>
                To Travel List
              </Text>
            </View>

            <View style={styles.arrowIconView}>
              <Image
                style={styles.arrowIcon}
                resizeMode={"contain"}
                source={require("../../../assets/profileIcons/arrowIcon.png")}
              />
            </View>
          </View>
          <View style={styles.rowList}>
            <View style={styles.leftRow}>
              <Image
                style={styles.favoriteIcon}
                resizeMode={"contain"}
                source={require("../../../assets/profileIcons/FavoritIcon.png")}
              />
              <Text style={styles.listText}>Favorites</Text>
            </View>
            <View style={styles.arrowIconView}>
              <Image
                style={styles.arrowIcon}
                resizeMode={"contain"}
                source={require("../../../assets/profileIcons/arrowIcon.png")}
              />
            </View>
          </View>
          <View style={styles.rowList}>
            <View style={styles.leftRow}>
              <Image
                style={styles.historyIcon}
                resizeMode={"contain"}
                source={require("../../../assets/profileIcons/HistoryIcon.png")}
              />
              <Text style={styles.listText}>History</Text>
            </View>
            <View style={styles.arrowIconView}>
              <Image
                style={styles.arrowIcon}
                resizeMode={"contain"}
                source={require("../../../assets/profileIcons/arrowIcon.png")}
              />
            </View>
          </View>
          <View style={styles.rowList}>
            <View style={styles.leftRow}>
              <Image
                style={styles.settingsIcon}
                resizeMode={"contain"}
                source={require("../../../assets/profileIcons/SettingIcon.png")}
              />
              <Text style={styles.listText}>Settings</Text>
            </View>
            <View style={styles.arrowIconView}>
              <Image
                style={styles.arrowIcon}
                resizeMode={"contain"}
                source={require("../../../assets/profileIcons/arrowIcon.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
