import React, { Component } from "react";
import { connect } from "react-redux";
import compareAsc from "date-fns/compare_asc";
import { getConversations } from "../../utils/firebase-fns";
import { Text, View } from "react-native";
import Loader from "../../components/Loader";
import ConversationsList from "./ConversationsList";

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
    getConversations(this.props.member.uid)
      .then(res => {
        const data = res.sort((a, b) => {
          return compareAsc(a.lastMessageTime, b.lastMessageTime);
        });
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
