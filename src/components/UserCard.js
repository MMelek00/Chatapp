import React from "react";
import {
  View,
  Item,
  Card,
  CardItem,
  Text,
  Right,
  Left,
  Button,
  Icon
} from "native-base";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native";
import Avatar from "./Avatar";
import Availability from "./Availability";

import styles from "../styles/user-card";
import { truncate } from "../utils/helpers";

const UserCard = ({ data, navigation }) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.item}>
        <Left>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile", { data })}
          >
            <Avatar user={data} large />
          </TouchableOpacity>
          <View>
            <Text style={styles.text2}>{truncate(data.firstName, 15)}</Text>
            <Text style={styles.text}>{truncate(data.email, 18)}</Text>
            <Text style={styles.text2}>{truncate(data.job, 15)}</Text>
          </View>
        </Left>
        <Right>
          <Button
            iconRight
            rounded
            small
            style={styles.sendButton}
            onPress={() => {
              navigation.navigate("Messages", {
                sendToId: data.id,
                sendToName: data.firstName
              });
            }}
          >
            <Text>Send message</Text>
            <Icon name="send" type="MaterialIcons" />
          </Button>
        </Right>
      </CardItem>
      <CardItem footer style={styles.footer}>
        <Item style={styles.span}>
          <Icon name="500px" type="Entypo" style={{ color: "pink" }} />
          <Text>{data.experience} Years Experience</Text>
        </Item>
        <Item style={styles.span}>
          <Icon
            name="access-time"
            type="MaterialIcons"
            style={{ color: "pink" }}
          />
          <Availability availability={data.availability} />
        </Item>
      </CardItem>
    </Card>
  );
};

export default withNavigation(UserCard);
