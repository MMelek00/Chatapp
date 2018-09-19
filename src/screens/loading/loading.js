import React from "react";
import { connect } from "react-redux";
import { ActivityIndicator, StatusBar, ImageBackground } from "react-native";

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
      <ImageBackground
        source={(require = "./loadingImage.png")}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {}
});

export default connect(mapStateToProps)(AuthLoading);
