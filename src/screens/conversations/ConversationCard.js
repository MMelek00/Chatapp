import React from "react";
import { View, Card, CardItem, Text, Right, Left } from "native-base";
import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import styles from "../../styles/conversations-card";

const ConversationCard = ({ data, navigation }) => {
  if (data.sendTo === null) {
    return (
      <CardItem style={styles.Citem}>
        <Text style={styles.text2}>this conversation is deleted</Text>
      </CardItem>
    );
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
      <CardItem style={styles.Citem}>
        <Left>
          <Avatar
            medium
            rounded
            // source={{
            //   uri:
            //     "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            // }}
            title={data.sendTo.firstName.slice(0, 2).toUpperCase()}
            activeOpacity={0.7}
          />
          <View>
            <Text style={styles.text2}>{data.sendTo.firstName}</Text>
            <Text style={styles.text2}>{data.conversation.displayMessage}</Text>
          </View>
        </Left>
        <Right>
          <View>
            <Text>{data.conversation.lastMessageTime}</Text>
            <Text style={styles.Onligne}>Onligne</Text>
          </View>
        </Right>
      </CardItem>
    </TouchableOpacity>
  );
};


export default withNavigation(ConversationCard);
