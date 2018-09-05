import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Item, Button } from "native-base";
import { Icon } from "react-native-elements";
import * as firebase from "firebase";

export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <View
          style={{
            flex: 1,
            // justifyContent: "center",
            alignItems: "center",
            paddingTop: 130
          }}
        >
          <Text style={styles.textStyle}>Login</Text>
          <Item style={styles.Iteminput}>
            <Icon name="mail" color="#c50d66" />
            <TextInput
              placeholder="user@gmail.com"
              placeholderTextColor="#393E46"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              style={styles.textInput}
              autoCorrect={false}
              multiline={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item style={styles.Iteminput}>
            <Icon name="lock" type="font-awesome" color="#c50d66" />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              placeholderTextColor="#393E46"
              autoCapitalize="none"
              returnKeyType="go"
              multiline={false}
              ref={input => (this.passwordInput = input)}
              placeholder="Password"
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </Item>
          <Button iconRight transparent primary>
            <Text style={styles.forgettext}>Forget password</Text>
            <Icon
              size={20}
              name="info-circle"
              type="font-awesome"
              color="blue"
            />
          </Button>
          <View style={{ width: "80%", paddingTop: 50 }}>
            <Button block onPress={this.handleLogin}>
              <Text style={styles.buttonstyle}>SIGN IN</Text>
            </Button>
          </View>
          <Button iconRight transparent primary>
            <Text style={styles.forgettext}>No account yet?Create one</Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"

    // justifyContent: "center",
    // alignItems: "center"
  },
  textInput: {
    height: 45,
    width: "80%",
    borderRadius: 8,
    color: "black",
    padding: 15
  },
  Iteminput: {
    height: 50,
    width: "85%",
    backgroundColor: "#eae3e3",
    borderColor: "#a39e9e",
    marginTop: 12,
    borderRadius: 8,
    padding: 12
  },
  textStyle: {
    color: "#003399",
    fontFamily: "Roboto_medium",
    fontSize: 45,
    alignSelf: "flex-start",
    paddingLeft: 35,
    paddingBottom: 10
  },
  buttonstyle: {
    color: "white",
    fontFamily: "Roboto_medium",
    fontSize: 25
  },
  forgettext: {
    color: "blue",
    fontFamily: "Roboto",
    fontSize: 18,
    paddingLeft: 30,
    paddingRight: 10
  }
});
