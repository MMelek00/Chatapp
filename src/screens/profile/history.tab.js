import React from "react";
import { FlatList, Text, View } from "react-native";
import HistoryCard from "../../components/history-card";
import { Loader } from "../../components/loader";
import styles from "../../styles/indicators";
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: ""
    };
  }

  _keyExtractor = (item, index) => item.name;
  _renderItem = ({ item, key }) => <HistoryCard data={item} key={key} />;
  render() {
    const { isLoading, error } = this.props;
    if (error) {
      return <Text>{error}</Text>;
    }
    if (isLoading) {
      return <Loader />;
    }
    if (this.props.data.length === 0) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            you didn't add any histories yet.
          </Text>
        </View>
      );
    }
    return (
      <View style={{ paddingTop: 10 }}>
        <FlatList
          data={this.props.data.history}
          extraData={this.props}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default History;
