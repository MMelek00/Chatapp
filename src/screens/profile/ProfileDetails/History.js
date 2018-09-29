import React from "react";
import { View, Content, Text } from "native-base";
import HistoryCard from "../Components/HistoryCard";
import { FlatList } from "react-native";
import { Loader } from "../../../components/Loader";
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: ""
    };
  }

  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item, key }) => <HistoryCard data={item} key={key} />;
  render() {
    const { isLoading, error } = this.props;
    if (error) {
      return <Text>{error}</Text>;
    }
    if (isLoading) {
      return <Loader />;
    }
    if (this.props.data.history.length === 0) {
      return (
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 17 }}>no job history recorded yet.</Text>
        </View>
      );
    }
    return (
      <Content style={{ paddingTop: 10 }}>
        <FlatList
          data={this.props.data.history}
          extraData={this.props}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </Content>
    );
  }
}

export default History;
