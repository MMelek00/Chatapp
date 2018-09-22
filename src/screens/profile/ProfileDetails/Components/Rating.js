import React, { Component } from "react";
import { View } from "react-native";
import { CheckBox, Rating } from "react-native-elements";
import { connect } from "react-redux";

class CheckRating extends Component {
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
            checked={this.props.member.online}
            textStyle={{ color: "pink" }}
            checkedColor="pink"
            containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
          />
        </View>
        <View>
          <Rating
            readonly
            fractions={1}
            startingValue={this.props.member.rating}
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

const mapStateToProps = state => ({
  member: state.member || {}
});

export default connect(mapStateToProps)(CheckRating);
