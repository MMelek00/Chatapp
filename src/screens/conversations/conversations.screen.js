import React, { Component } from "react";
import { connect } from "react-redux";
import compareAsc from "date-fns/compare_asc";
import { getConversations } from "../../utils/firebase-fns";
import { Text, View } from "react-native";
import Loader from "../../components/loader";
import ConversationsList from "./conversations-list";

import styles from "../../styles/indicators";

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
    const { member } = this.props;
    getConversations(member.uid)
      .then(res => {
        console.log({ res });
        const data = res.filter(conversation => {
          let index = (member.blockList || []).indexOf(conversation.sendToId);
          return index === -1;
        });
        this.setState({ data, isLoading: false, isRefreshing: false });
      });
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    if (this.state.data.length === 0) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
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
