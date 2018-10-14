import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../utils/colors";
import styles from "../styles/skills";
import Availability from "./availability";
class HistoryList extends Component {
  _keyExtractor = (item, index) => item.name;

  _renderItem = ({ item, key }) => (
    <View
      style={{
        margin: 7,
        padding: 15,
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 0,
        shadowColor: "#e0e0e0",
        shadowOffset: {
          width: -2,
          height: 2
        },
        borderRadius: 10
      }}
    >
      <View>
        {this.props.deletehistoryHandler && (
          <Icon
            name="x-circle"
            type="feather"
            color={colors.negative}
            onPress={() => this.props.deletehistoryHandler(item)}
          />
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.skillTitle}>{item.name}</Text>
        <Text style={styles.skillTitle}>{item.startDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.skillTitle}>{item.jobName}</Text>
        <Text style={styles.skillTitle}>{item.availability}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <FlatList
        removeClippedSubviews={false}
        data={this.props.data}
        extraData={this.props}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default HistoryList;
