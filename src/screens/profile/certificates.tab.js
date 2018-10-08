import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { View } from "native-base";
import Loader from "../../components/loader";
import CertifCard from "../../components/certificate-card";

class Certificates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: ""
    };
  }
  _keyExtractor = (item, index) => item;
  _renderItem = ({ item, key }) => <CertifCard Name={item} key={key} />;
  render() {
    const { isLoading, error } = this.props;
    if (error) {
      return <Text>{error}</Text>;
    }
    if (isLoading) {
      return <Loader />;
    }
    return (
      <View style={{ paddingTop: 10, flex: 1 }}>
        <FlatList
          numColumns={2}
          data={this.props.data.certificates}
          extraData={this.props}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
export default Certificates;
