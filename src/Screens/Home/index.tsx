import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from "react-native";
import flatlistData from "./homeData";
import styles from "./styles";
type Props = {};

type State = {
  data: any;
};
export default class App extends Component<Props, State> {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Adventure",
          color: "#2096f3",
          fontSize: 18,
          alignment: "center"
        },
        elevation: 0.9,
        drawBehind: false,
        topBarElevationShadowEnabled: true,
        noBorder: false,
        leftButtons: [
          {
            id: "close",
            fontSize: 10,
            color: "#2096f3",
            icon: require("../../../assets/topBarIcons/menuIcon.png")
          }
        ],
        rightButtons: [
          {
            id: "close",
            fontSize: 10,
            color: "#2096f3",
            icon: require("../../../assets/topBarIcons/SettingIcon.png")
          }
        ],
        visible: true
      }
    };
  }

  state = {
    data: []
  };
  async componentDidMount() {
    let data = flatlistData();
    await this.setState({
      ...this.state,
      data: data
    });
  }
  render() {
    const _renderItem = ({ item, index }) => (
      <View style={styles.cardContentView}>
        <View style={{ margin: 10 }}>
          <Text numberOfLines={1} style={styles.cardTitleText}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={styles.cardDate}>
            {item.Date}
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          resizeMode={"cover"}
          source={{
            uri: item.Image
          }}
        />
        <Text numberOfLines={4} style={styles.cardInfoText}>
          {item.info}
        </Text>
        <View style={styles.cardBottomView}>
          <View style={styles.cardBottomSingleView}>
            <Image
              style={styles.likeIcon}
              resizeMode={"contain"}
              source={require("../../../assets/cardIcons/icons8-heart-outline-48.png")}
            />
            <Text style={styles.likesText}> 18 Likes</Text>
          </View>
          <View style={styles.cardBottomSingleView}>
            <Image
              style={styles.commentIcon}
              resizeMode={"contain"}
              source={require("../../../assets/cardIcons/icons8-topic-26.png")}
            />
            <Text style={styles.commentText}> 4 Comments</Text>
          </View>
          <View style={styles.cardBottomSingleView}>
            <Image
              style={styles.shareIcon}
              resizeMode={"contain"}
              source={require("../../../assets/cardIcons/icons8-email-send-80.png")}
            />
            <Text style={styles.shareText}> 3 Shares</Text>
          </View>
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.name}
          renderItem={_renderItem}
        />
      </View>
    );
  }
}
