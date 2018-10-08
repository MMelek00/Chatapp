import React from "react";
import { View, Card, CardItem, Text, Right, Left } from "native-base";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import format from "date-fns/format";
import Avatar from "../../components/Avatar";
import ActiveStatus from "../../components/ActiveStatus";
import styles from "../../styles/conversations-card";

const ConversationCard = ({ data, navigation }) => {
  if (!data.sendTo || !data.conversation) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Messages", {
          sendToId: data.sendToId,
          sendToName: data.sendTo.firstName,
          isGroup: data.conversation.isGroup,
          conversationId: data.conversationId
        });
      }}
    >
      <Card style={styles.card}>
        <CardItem style={styles.item}>
          <Left>
            <Avatar user={data.sendTo} unseen={data.unseenCount} large />
            <View>
              <Text style={styles.name}>
                {data.conversation.isGroup
                  ? `Group: ${data.sendTo.firstName}`
                  : data.sendTo.firstName}
              </Text>
              <Text style={styles.message}>
                {data.conversation.displayMessage}
              </Text>
            </View>
          </Left>
          <Right>
            <Text style={styles.message}>
              {format(data.conversation.lastMessageTime, "YYYY-MM-DD")}
            </Text>
            {!data.conversation.isGroup && (
              <ActiveStatus
                style={styles.online}
                online={data.sendTo.online}
                lastLoggedIn={data.sendTo.lastLoggedIn}
              />
            )}
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default withNavigation(ConversationCard);
