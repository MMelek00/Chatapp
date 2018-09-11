import React, { Component } from "react";
import { View, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";

class Aboutpart2 extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          alignItems: "center"
        }}
      >
        <View>
          <Avatar
            width={190}
            height={190}
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Roboto_medium"
          }}
        >
          Marwa M
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Roboto_medium",
            color: "pink"
          }}
        >
          MarwaM44@gmail.com
        </Text>
        <View style={{ width: 250, padding: 10 }}>
          <Button
            rounded
            title="Send message"
            rightIcon={{
              name: "send",
              type: "materialIcons",
              size: 20,
              style: { paddingLeft: 10 }
            }}
            backgroundColor="#1C39A1"
          />
        </View>
      </View>
    );
  }
}

export default Aboutpart2;
