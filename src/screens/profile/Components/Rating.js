import React from "react";
import { View } from "react-native";
import { CheckBox, Rating } from "react-native-elements";
import { connect } from "react-redux";

class CheckRating extends React.Component {

  state = {
    bool: false
  };

  componentDidMount() {
    const { data, member } = this.props;
    if (data.id === member.uid) {
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

const mapStateToProps = state => ({
  member: state.member || {}
});

export default connect(mapStateToProps)(CheckRating);
