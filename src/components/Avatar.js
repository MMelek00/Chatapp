import React from "react";
import { View, Text } from "react-native";
import { Avatar as RNEAvatar, Icon } from "react-native-elements";

import styles from "../styles/avatar";

const Picture = ({ user, ...rest }) => {
  const title = user.avatar
    ? null
    : (user.firstName || "").slice(0, 2).toUpperCase();
  const src = user.avatar ? { uri: user.avatar } : null;
  return (
    <RNEAvatar
      rounded
      source={src}
      title={title}
      activeOpacity={0.7}
      {...rest}
    />
  );
};

const Avatar = ({ user, unseen, withIcon, ...rest }) => {
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
  if (withIcon) {
    return (
      <View>
        <View style={styles.icon}>
          <Icon name="edit" type="materialIcons" color="black" />
        </View>
        <Picture user={user} {...rest} />
      </View>
    );
  }
  return <Picture user={user} {...rest} />;
};

export default Avatar;
