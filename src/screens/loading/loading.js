import React from "react";
import { connect } from "react-redux";
import { ActivityIndicator, StatusBar, View } from "react-native";

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const { uid } = this.props.member;
    this.props.navigation.navigate(uid ? "App" : "Auth");
  };

  render() {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {}
});

export default connect(mapStateToProps)(AuthLoading);
