import React from "react";
import { View, Item, Card, CardItem, Text, Right, Left } from "native-base";
import { Icon, Avatar, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
const UserCard = () => {
  return (
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
        <Right>
          <View>
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
            <Text style={styles.Onligne}>Onligne</Text>
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
            <Text style={{ paddingLeft: 10 }}>3 years Experience</Text>
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
    fontSize: 18,
    fontFamily: "Roboto_medium",
    color: "pink",
    paddingTop: 10,
    paddingLeft: 18
  },
  Citem: {
    borderRadius: 0,
    paddingLeft: 8,
    paddingBottom: 5,
    paddingRight: 5,
    paddingTop: 5
  }
});

export default UserCard;
