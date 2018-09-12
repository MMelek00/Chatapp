import React from "react";
import {
  View,
  Item,
  Content,
  Card,
  CardItem,
  Text,
  Right,
  Left
} from "native-base";
import { Icon, Avatar, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
const UserCard = () => {
  return (
    <Content>
      <Card>
        <CardItem style={styles.Citem}>
          <Left>
            <Avatar
              large
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
              }}
              activeOpacity={0.7}
            />
            <View>
              <Text style={styles.text2}>Marwa M</Text>
              <Text style={styles.text}>Marwam44@gmail.com</Text>
              <Text style={styles.text2}>Graphic design</Text>
            </View>
          </Left>
          <Right style={{ top: -10 }}>
            <Button
              rounded
              title="Send message"
              rightIcon={{
                name: "send",
                type: "materialIcons"
              }}
              backgroundColor="#1C39A1"
              buttonStyle={{ height: 25, width: 130 }}
            />
          </Right>
        </CardItem>
        <CardItem footer style={styles.Citem}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Item style={{ paddingLeft: 10 }}>
              <Icon name="500px" type="entypo" color="pink" />
              <Text style={{ paddingLeft: 10 }}>3 years Experience</Text>
            </Item>
            <Item style={{ paddingLeft: 10, width: "50%" }}>
              <Icon name="access-time" type="materialIcons" color="pink" />
              <Text style={{ paddingLeft: 10 }}>Part-Time Full-time</Text>
            </Item>
          </View>
        </CardItem>
      </Card>
    </Content>
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
  Citem: {
    borderRadius: 0,
    paddingLeft: 8,
    paddingBottom: 5,
    paddingRight: 5,
    paddingTop: 10
  }
});

export default UserCard;
