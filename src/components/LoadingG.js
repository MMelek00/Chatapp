import React from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";

class LoadingG extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default LoadingG;
