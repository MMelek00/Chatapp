import React from "react";
import { View, Text } from "react-native";
import { Avatar as RNEAvatar } from "react-native-elements";

import styles from "../styles/avatar";

const Picture = ({ user }) => {
    const title = user.avatar ? null : user.firstName.slice(0, 2).toUpperCase();
    const src = user.avatar ? { uri: user.avatar } : null;
    return (
        <RNEAvatar
            large
            rounded
            source={src}
            title={title}
            activeOpacity={0.7}
        />
    );
};

const Avatar = ({ user, unseen }) => {
    if (Number.isInteger(unseen)) {
        return (
            <View>
                <View style={styles.badge}>
                    <Text style={styles.text}>{unseen}</Text>
                </View>
                <Picture user={user} />
            </View>
        );
    }
    return (
        <Picture user={user} />
    );
};

export default Avatar;
