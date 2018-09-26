import React from "react";
import { View } from "react-native";
import { CheckBox, Rating } from "react-native-elements";

const CheckRating = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: 5
      }}
    >
      <View>
        <CheckBox
          right
          title="Online"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={data.online}
          textStyle={{ color: "pink" }}
          checkedColor="pink"
          containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
        />
      </View>
      <View>
        <Rating
          readonly
          fractions={1}
          startingValue={data.rating}
          imageSize={35}
          style={{
            flexDirection: "row-reverse",
            paddingTop: 10
          }}
        />
      </View>
    </View>
  );
};

export default CheckRating;
