import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { Content } from "native-base";
import Loader from "../../../components/Loader";
import CertifCard from "../Components/CertifCard";

class Certificates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: ""
    };
  }
  _keyExtractor = (item, index) => item.id;
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
      <Content style={{ paddingTop: 10 }}>
        <FlatList
          data={this.props.data.certificates}
          extraData={this.props}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </Content>
    );
  }
}
export default Certificates;
