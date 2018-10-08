import React from "react";
import { View, Item, Card, CardItem, Text, Right, Left } from "native-base";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native";
import Avatar from "./avatar";
import Availability from "./availability";
import ActiveStatus from "./active-status";
import styles from "../styles/user-card";
import colors from "../utils/colors";
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
          <Icon
            reverse
            name="send"
            type="materialicons"
            color={colors.base}
            onPress={() => {
              navigation.navigate("Messages", {
                sendToId: data.id,
                sendToName: data.firstName
              });
            }}
          />
        </Right>
      </CardItem>
      <CardItem footer style={styles.footer}>
        <Item style={styles.span}>
          <Icon name="500px" type="Entypo" color="#D46A6A" />
          <Text>{data.experience} Years Experience</Text>
        </Item>
        <Item style={styles.span}>
          <Icon name="access-time" type="materialicons" color="#D46A6A" />
          <Availability availability={data.availability} />
        </Item>
      </CardItem>
    </Card>
  );
};

export default withNavigation(UserCard);
