import React from "react";
import { View, Item, Card, CardItem, Text, Right, Left } from "native-base";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native";
import Avatar from "./avatar";
import Availability from "./availability";
import ActiveStatus from "./active-status";
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
          <ActiveStatus
            style={{ marginBottom: 15 }}
            online={data.online}
            minimal
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Messages", {
                sendToId: data.id,
                sendToName: data.firstName
              });
            }}
            style={styles.ButtonStyle}
          >
            <Text style={{ color: "white", paddingRight: 5 }}>
              Send message
            </Text>
            <Icon name="send" type="materialicons" size={15} color="white" />
          </TouchableOpacity>
        </Right>
      </CardItem>
      <CardItem footer style={styles.footer}>
        <Item style={styles.span}>
          <Icon
            style={{ padding: 10 }}
            name="briefcase"
            type="feather"
            color="#D46A6A"
          />
          <Text>{data.experience} Years Experience</Text>
        </Item>
        <Item style={styles.span}>
          <Icon
            style={{ padding: 10 }}
            name="access-time"
            type="materialicons"
            color="#D46A6A"
          />
          <Availability availability={data.availability} />
        </Item>
      </CardItem>
    </Card>
  );
};

export default withNavigation(UserCard);
