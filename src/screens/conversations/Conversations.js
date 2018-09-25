import React, { Component } from "react";
import { connect } from "react-redux";

import { getConversations } from "../../utils/firebase-fns";
import { Text, View } from "react-native";
import Loader from "../../components/Loader";
import ConversationsList from "./ConversationsList";

class ConversationsScreen extends Component {
  static navigationOptions = {
    title: "CONVERSATIONS"
  };
  state = {
    data: [],
    isLoading: true,
    isRefreshing: false
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("didFocus", () => {
      this._fetchConversations();
    });
  }

  _fetchConversations = () => {
    this.setState({ isRefreshing: true });
    getConversations(this.props.member.uid)
      .then(data => {
        this.setState({ data, isLoading: false, isRefreshing: false });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    if (this.state.data.length === 0) {
      return (
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 17 }}>
            you didn't made any conversations yet.
          </Text>
        </View>
      );
    }
    return (
      <ConversationsList {...this.state} onRefresh={this._fetchConversations} />
    );
  }
}

export default connect(state => ({
  member: state.member || {}
}))(ConversationsScreen);
