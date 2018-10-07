import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import ActiveStatus from "../../../components/ActiveStatus";
import { Rating } from "react-native-elements";
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
        <ActiveStatus
          style={{ marginTop: 15, paddingRight: 15 }}
          online={this.props.data.online}
          minimal
        />
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
