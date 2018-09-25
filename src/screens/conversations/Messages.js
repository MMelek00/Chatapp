import React from "react";
import { connect } from "react-redux";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { Icon } from "native-base";
import MessageBubble from "./MessageBubble";

import { sendMessage, loadMessages, getConversationId, closeChat } from "../../utils/firebase-fns";

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

  componentWillUnmount() {
    closeChat();
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

  renderBubble(props) {
    return (
      <MessageBubble
        {...props}
      />
    );
  }

  renderSend(props) {
    return (
      <Send
        {...props}
      >
        <Icon name="send" type="MaterialIcons" />
      </Send>
    );
  }


  render() {
    const { member } = this.props;
    return (
      <GiftedChat
        messages={this.state.messages}
        renderBubble={this.renderBubble}
        renderSend={this.renderSend}
        onSend={messages => this._sendMessage(messages)}
        user={{
          _id: member.uid,
          name: member.firstName,
        }}
        showUserAvatar
        loadEarlier
        showAvatarForEveryMessage
      />
    );
  }
}


export default connect(state => ({
  member: state.member || {},
}))(Messages);
