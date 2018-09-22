import React from "react";
import { View, Item, Card, CardItem, Text, Right, Left } from "native-base";
import { Icon, Avatar, Button } from "react-native-elements";
import { withNavigation } from "react-navigation";

import fonts from "../utils/fonts";
import styles from "../styles/user-card";

const UserCard = ({ data, navigation }) => {
  return (
    <Card style={styles.cardStyle}>
      <CardItem style={styles.Citem}>
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
          <View>
            <Button
              rounded
              title="Send message"
              rightIcon={{
                name: "send",
                type: "materialIcons"
              }}
              titleStyle={{ fontSize: 10 }}
              backgroundColor="#1C39A1"
              buttonStyle={{ height: 25, width: 130 }}
              onPress={() => {
                navigation.navigate("Messages", {
                  sendToId: data.id,
                  sendToName: data.firstName
                });
              }}
            />
            <Text style={styles.Onligne}>{data.online ? "online" : "offline"}</Text>
          </View>
        </Right>
      </CardItem>
      <CardItem footer style={styles.Citem}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Item
            style={{
              paddingLeft: 10,
              borderColor: "white"
            }}
          >
            <Icon name="500px" type="entypo" color="pink" />
            <Text style={{ paddingLeft: 10 }}>{data.experience} Experience</Text>
          </Item>
          <Item
            style={{
              paddingLeft: 10,
              width: "50%",
              borderColor: "white"
            }}
          >
            <Icon name="access-time" type="materialIcons" color="pink" />
            <Text style={{ paddingLeft: 10 }}>Part-Time Full-time</Text>
          </Item>
        </View>
      </CardItem>
    </Card>
  );
};


export default withNavigation(UserCard);
