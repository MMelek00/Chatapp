import React, { Component } from "react";
import { View } from "react-native";
import { CheckBox, Rating } from "react-native-elements";
class CheckRating extends Component {
  state = { checked: true };
  render() {
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
            checked={this.state.checked}
            onIconPress={() =>
              this.setState({
                checked: !this.state.checked
              })
            }
            textStyle={{ color: "pink" }}
            checkedColor="pink"
            containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
          />
        </View>
        <View>
          <Rating
            readonly
            fractions={1}
            startingValue={3.3}
            imageSize={30}
            showRating
            style={{
              flexDirection: "row-reverse",
              paddingTop: 10
            }}
          />
        </View>
      </View>
    );
  }
}

export default CheckRating;
