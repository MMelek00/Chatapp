import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { Icon } from "react-native-elements";

import ProgressBar from "./progress-bar";

import colors from "../utils/colors";
import styles from "../styles/skills";

class SkillsList extends Component {
  _keyExtractor = (item, index) => item.name;

  _renderItem = ({ item, key }) => (
    <View style={styles.skillItem}>
      <View style={styles.row}>
        <Text style={styles.skillTitle}>{item.name}</Text>
        {this.props.deleteSkillHandler && (
          <Icon
            name="x-circle"
            type="feather"
            color={colors.negative}
            onPress={() => this.props.deleteSkillHandler(item)}
          />
        )}
      </View>
      <View style={styles.row}>
        <ProgressBar rate={item.rate} />
        <Text>{item.rate}%</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View>
        <FlatList
          removeClippedSubviews={false}
          data={this.props.data}
          extraData={this.props}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default SkillsList;
