import React from "react";
import { View, Item, Card, CardItem, Text, Right, Left, Button, Icon } from "native-base";
import { Avatar } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Availability from "./Availability";

import styles from "../styles/user-card";

const UserCard = ({ data, navigation }) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.item}>
        <Left>
          <Avatar
            large
            rounded
            // source={{
            //   uri:
            //     "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            // }}
            title={data.firstName.slice(0, 2).toUpperCase()}
            activeOpacity={0.7}
          />
          <View>
            <Text style={styles.text2}>{data.firstName}</Text>
            <Text style={styles.text}>{data.email}</Text>
            <Text style={styles.text2}>{data.job}</Text>
          </View>
        </Left>
        <Right>
          <Button
            iconRight
            rounded
            small
            onPress={() => {
              navigation.navigate("Messages", {
                sendToId: data.id,
                sendToName: data.firstName
              });
            }}
          >
            <Text>Home</Text>
            <Icon name="arrow-back" />
          </Button>
          {/* <Button
            rounded
            title="Send message"
            rightIcon={{
              name: "send",
              type: "materialIcons"
            }}
            titleStyle={{ fontSize: 5 }}
            backgroundColor="#1C39A1"
            onPress={() => {
              navigation.navigate("Messages", {
                sendToId: data.id,
                sendToName: data.firstName
              });
            }}
          /> */}
        </Right>
      </CardItem>
      <CardItem
        footer
        style={styles.footer}
      >
        <Item>
          <Icon name="500px" type="entypo" color="pink" />
          <Text >{data.experience} Experience</Text>
        </Item>
        <Item>
          <Icon name="access-time" type="materialIcons" color="pink" />
          <Availability availability={data.availability} />
        </Item>
      </CardItem>
    </Card >
  );
};


export default withNavigation(UserCard);
