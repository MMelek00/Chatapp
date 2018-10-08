import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/active-status";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const ActiveStatus = ({ online, lastLoggedIn, style, minimal }) => {
  const lastSeen =
    "last seen " + distanceInWordsToNow(lastLoggedIn, { addSuffix: true });
  const offlineMessage = minimal ? "offline" : lastSeen;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.indicator} />
      <Text style={styles.text}>{online ? "online" : offlineMessage}</Text>
    </View>
  );
};

export default ActiveStatus;
