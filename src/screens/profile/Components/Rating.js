import React from "react";
import { View } from "react-native";
import { Firebase } from "../../../utils/firebase";
import { CheckBox, Rating } from "react-native-elements";
class CheckRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false
    };
  }
  componentDidMount() {
    const user = Firebase.auth().currentUser;
    if (this.props.data.id === user.uid) {
      this.setState({ bool: true });
    }
  }
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
            fractions={1}
            startingValue={this.props.data.rating}
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

export default CheckRating;
