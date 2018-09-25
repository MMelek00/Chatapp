import React from "react";
import { View, Card, CardItem, Text, Right, Left } from "native-base";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import Avatar from "../../components/Avatar";
import ActiveStatus from "../../components/ActiveStatus";
import styles from "../../styles/conversations-card";

const ConversationCard = ({ data, navigation }) => {
  if (data.sendTo === null) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Messages", {
          sendToId: data.sendToId,
          sendToName: data.sendTo.firstName
        });
      }}
    >
      <Card style={styles.card}>
        <CardItem style={styles.item}>
          <Left>
            <Avatar user={data.sendTo} unseen={data.unseenCount} />
            <View>
              <Text style={styles.text2}>{data.sendTo.firstName}</Text>
              <Text style={styles.text2}>{data.conversation.displayMessage}</Text>
            </View>
          </Left>
          <Right>
            <View>
              <Text>{data.conversation.lastMessageTime}</Text>
              <ActiveStatus online={data.sendTo.online} lastLoggedIn={data.sendTo.lastLoggedIn} />
            </View>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};


export default withNavigation(ConversationCard);
