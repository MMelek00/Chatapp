import React from "react";
import { connect } from "react-redux";
import { View, Platform } from "react-native";
import {
  GiftedChat,
  Bubble,
  Send,
  MessageText,
  Time,
  InputToolbar,
  Composer
} from "react-native-gifted-chat";
import { Icon } from "react-native-elements";
import KeyboardSpacer from "react-native-keyboard-spacer";
import {
  sendMessage,
  loadMessages,
  pushMessages,
  getConversationId,
  closeChat
} from "../../utils/firebase-fns";
import colors from "../../utils/colors";

class Messages extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const isGroup = navigation.getParam("isGroup");
    if (!isGroup) {
      return { title: navigation.getParam("sendToName", "MESSAGES") };
    }
    return {
      title: navigation.getParam("sendToName", "MESSAGES"),
      headerRight:
        <Icon
          name="users"
          type="feather"
          color="#fff"
          containerStyle={{ marginRight: 5 }}
          onPress={() => params.handleMembersClick()} />
    };
  };

  state = { messages: [], conversationId: "" };

  componentDidMount() {
    this._fetchConversation();
    this.props.navigation.setParams({
      handleMembersClick: this.handleMembers
    });
  }

  handleMembers = () => {
    const { navigation } = this.props;
    const sendToId = navigation.getParam("sendToId");
    navigation.navigate("GroupMembers", { groupId: sendToId });
  }

  componentWillUnmount() {
    closeChat();
  }

  _fetchConversation = () => {
    const { navigation, member } = this.props;
    const sendToId = navigation.getParam("sendToId");
    const conversationId = navigation.getParam("conversationId");
    const isGroup = navigation.getParam("isGroup");
    if (isGroup) {
      loadMessages(conversationId, message => {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, message)
        }));
      });
    } else {
      getConversationId(member.uid, sendToId).then(resId => {
        loadMessages(resId, message => {
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
            conversationId
          }));
        });
      });
    }
  };

  _sendMessage = message => {
    const { navigation, member } = this.props;
    const sendToId = navigation.getParam("sendToId");
    const isGroup = navigation.getParam("isGroup");
    if (isGroup === true) {
      const conversationId = navigation.getParam("conversationId");
      pushMessages(message, conversationId);
    } else {
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
  };

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "transparent"
          },
          right: {
            backgroundColor: "transparent"
          }
        }}
      />
    );
  }

  renderMessageText(props) {
    return (
      <MessageText
        {...props}
        containerStyle={{
          left: {
            backgroundColor: colors.body,
            padding: 5
          },
          right: {
            backgroundColor: colors.body,
            padding: 5
          }
        }}
        textStyle={{
          left: {
            color: colors.grey
          },
          right: {
            color: colors.grey
          }
        }}
      />
    );
  }

  renderTime(props) {
    return (
      <Time
        {...props}
        textStyle={{
          left: {
            color: colors.secondary
          },
          right: {
            color: colors.secondary
          }
        }}
      />
    );
  }

  renderInputToolbar(props) {
    return (
      <InputToolbar
        {...props}
        containerStyle={{ backgroundColor: colors.primary }}
      />
    );
  }

  renderComposer(props) {
    return (
      <Composer
        {...props}
        textInputStyle={{ color: "#fff" }}
        placeholderTextColor="#fff"
      />
    );
  }

  renderSend(props) {
    return (
      <Send {...props}>
        <Icon name="send" type="materialicons" color="white" />
      </Send>
    );
  }

  render() {
    const { member } = this.props;
    return (
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          renderBubble={this.renderBubble}
          renderMessageText={this.renderMessageText}
          renderTime={this.renderTime}
          renderInputToolbar={this.renderInputToolbar}
          renderSend={this.renderSend}
          renderComposer={this.renderComposer}
          onSend={messages => this._sendMessage(messages)}
          user={{
            _id: member.uid,
            name: member.firstName
          }}
          showUserAvatar
          loadEarlier
          showAvatarForEveryMessage
        />
        {Platform.OS === "android" ? <KeyboardSpacer /> : null}
      </View>
    );
  }
}

export default connect(state => ({
  member: state.member || {}
}))(Messages);
