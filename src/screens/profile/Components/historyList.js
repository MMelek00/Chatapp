import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../../utils/colors";
import styles from "../../../styles/skills";
import Availability from "../../../components/Availability";
class HistoryList extends Component {
  _keyExtractor = (item, index) => item.name;

  _renderItem = ({ item, key }) => (
    <View style={styles.skillItem}>
      <View style={styles.row}>
        <Text style={styles.skillTitle}>{item.name}</Text>
        <Text style={styles.skillTitle}>{item.startDate}</Text>
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
        <Text style={styles.skillTitle}>{item.jobName}</Text>
        <Availability availability={item.availability} />
      </View>
    </View>
  );

  render() {
    return (
      <FlatList
        removeClippedSubviews={true}
        data={this.props.data}
        extraData={this.props}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default HistoryList;
