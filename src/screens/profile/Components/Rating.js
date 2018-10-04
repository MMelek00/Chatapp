import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { CheckBox, Rating } from "react-native-elements";
import { addRating } from "../../../utils/firebase-fns";
class CheckRating extends React.Component {
  constructor(props) {
    super(props);
    const { email } = props.member;
    this.state = {
      bool: props.data.email === email
    };
  }
  setrating = rating => {
    const { member, data } = this.props;
    addRating(member.uid, data.id, rating);
  };
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
            checked={this.props.data.online}
            textStyle={{ color: "pink" }}
            checkedColor="pink"
            containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
          />
        </View>
        <View>
          <Rating
            readonly={this.state.bool}
            onFinishRating={this.setrating}
            fractions={1}
            startingValue={this.props.data.rate}
            imageSize={35}
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
