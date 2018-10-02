import React from "react";
import { Content, Text } from "native-base";
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
