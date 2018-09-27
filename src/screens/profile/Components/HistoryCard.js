import React from "react";
import { Item, ListItem } from "native-base";
import { Icon, Button } from "react-native-elements";
import styles from "../../../styles/historyCard";
import { View, Text } from "react-native";
const HistoryCard = ({ data }) => {
  return (
    <View
      style={{
        paddingBottom: 10,
        borderBottomWidth: 5,
        borderBottomColor: "#000"
      }}
    >
      <ListItem itemDivider>
        <Text style={styles.text3}>Start Day: {data.date}</Text>
        <Button
          block
          onPress={() => {}}
          title="delete"
          backgroundColor="#1C39A1"
        />
      </ListItem>
      <View style={styles.homeContainer}>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Item>
          <Icon name="500px" type="entypo" color="pink" />
          <Text style={styles.text2}>{data.year} years in Company</Text>
        </Item>
        <Item style={{ paddingLeft: 50, width: "50%" }}>
          <Icon name="access-time" type="materialIcons" color="pink" />
          <Text>{data.availability}</Text>
        </Item>
      </View>
      <View style={styles.container2}>
        <Text>{data.jobName}</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>My Project</Text>
        <Text style={styles.linktext}>{data.link}</Text>
      </View>
    </View>
  );
};

export default HistoryCard;
