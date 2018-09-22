import React from "react";
import { View, Card, CardItem, Text, Right, Left } from "native-base";
import { Avatar } from "react-native-elements";
import { StyleSheet, TouchableOpacity } from "react-native";

import { withNavigation } from "react-navigation";

const MessageCard = ({ data, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Messages", {
          sendToId: data.sendToId,
          sendToName: data.sendTo.firstName
        });
      }}
    >

      <Card>
        <CardItem style={styles.Citem}>
          <Left>
            <Avatar
              large
              rounded
              // source={{
              //   uri:
              //     "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
              // }}
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
      </Card>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: "Roboto_medium",
    color: "pink",
    paddingLeft: 5
  },
  text2: {
    fontSize: 15,
    fontFamily: "Roboto_medium",
    paddingLeft: 5
  },
  Onligne: {
    fontSize: 15,
    fontFamily: "Roboto_medium",
    color: "pink",
    paddingTop: 40,
    paddingLeft: 0
  },
  Citem: {
    borderRadius: 0,
    paddingLeft: 8,
    paddingBottom: 5,
    paddingRight: 5,
    paddingTop: 5
  }
});

export default withNavigation(MessageCard);
