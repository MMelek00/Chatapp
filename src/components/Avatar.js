import React from "react";
import { View, Text } from "react-native";
import { Avatar as RNEAvatar } from "react-native-elements";

import styles from "../styles/avatar";

const Picture = ({ user, ...rest }) => {
  const title =
    user.avatar && !user.firstName
      ? null
      : user.firstName.slice(0, 2).toUpperCase();
  const src = user.avatar ? { uri: user.avatar } : null;
  return (
    <RNEAvatar
      large
      rounded
      source={src}
      title={title}
      activeOpacity={0.7}
      {...rest}
    />
  );
};

const Avatar = ({ user, unseen, ...rest }) => {
  if (Number.isInteger(unseen)) {
    return (
      <View>
        <View style={styles.badge}>
          <Text style={styles.text}>{unseen}</Text>
        </View>
        <Picture user={user} {...rest} />
      </View>
    );
  }
  return <Picture user={user} {...rest} />;
};

export default Avatar;
