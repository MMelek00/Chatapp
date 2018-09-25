import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import LoadingG from "../../components/LoadingG";
import ConversationsList from "./ConversationsList";
import { getConversations, test } from "../../utils/firebase-fns";

class ConversationsScreen extends Component {
  static navigationOptions = {
    title: "CONVERSATIONS"
  };
  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("didFocus", () => {
      this._fetchConversations();
    });
  }

  _fetchConversations = () => {
    this.setState({ loading: true });
    getConversations(this.props.member.uid)
      .then(data => {
        console.log(data);
        this.setState({ data, loading: false });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.loading) {
      return <LoadingG />;
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
    return <ConversationsList data={this.state.data} />;
  }
}

export default connect(state => ({
  member: state.member || {}
}))(ConversationsScreen);
