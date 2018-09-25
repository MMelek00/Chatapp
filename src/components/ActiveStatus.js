import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/active-status";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const ActiveStatus = ({ online, lastLoggedIn }) => {
    const lastSeen = "last seen " + distanceInWordsToNow(lastLoggedIn, { addSuffix: true });
    return (
        <View style={styles.container} >
            <View style={styles.indicator} />
            <Text style={styles.text}>{online ? "online" : lastSeen}</Text>
        </View>
    );
};

export default ActiveStatus;
