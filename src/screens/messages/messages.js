import React from "react";
<<<<<<< HEAD
import { StyleSheet } from "react-native";
import MessageCard from "../component/messageCard";
import { Container } from "native-base";
export default class Messages extends React.Component {
  static navigationOptions = {
    title: "MESSAGES"
  };
=======
import { connect } from "react-redux";
import { GiftedChat } from "react-native-gifted-chat";

import { sendMessage, loadMessages, getConversationId } from "../../lib/firebase-fn";

class Messages extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("sendToName", "MESSAGES")
    };
  };
  state = { messages: [], conversationId: "" };

  componentDidMount() {
    this._fetchConversation();
  }

  _fetchConversation = () => {
    const { navigation, member } = this.props;
    const sendToId = navigation.getParam("sendToId");
    getConversationId(member.uid, sendToId).then((conversationId) => {
      loadMessages(conversationId, (message) => {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, message),
          conversationId
        }));
      });
    });
  }

  _sendMessage = (message) => {
    const { navigation, member } = this.props;
    const sendToId = navigation.getParam("sendToId");
    sendMessage(
      message,
      this.state.conversationId,
      member.uid,
      sendToId
    ).then(res => {
      if (res) {
        this.setState({ conversationId: res });
        this._fetchConversation();
      }
    });
  }


>>>>>>> 86c3727044463662a1ab82d19177668965f45c42
  render() {
    const { member } = this.props;
    return (
<<<<<<< HEAD
      <Container>
        <MessageCard />
      </Container>
=======
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this._sendMessage(messages)}
        user={{
          _id: member.uid,
          name: member.firstName,
        }}
        showUserAvatar
        loadEarlier
        showAvatarForEveryMessage
      />
>>>>>>> 86c3727044463662a1ab82d19177668965f45c42
    );
  }
}


export default connect(state => ({
  member: state.member || {},
}))(Messages);
