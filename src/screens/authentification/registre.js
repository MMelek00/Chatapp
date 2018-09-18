import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/member";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Item, Button } from "native-base";
import { Icon } from "react-native-elements";
import * as firebase from "firebase";
require("firebase/firestore");

class Registre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      phonenumber: "",
      errorMessage: null
    };
  }

  updateUser = id => {
    const { firstname, phonenumber, email } = this.state;
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const originalSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function (body) {
      if (body === "") {
        originalSend.call(this);
      } else {
        originalSend.call(this, body);
      }
    };
    const DocCol = firestore.collection("User");
    DocCol.add({
      Userid: id,
      mail: email,
      Name: firstname,
      AvatarLink: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      phonenumber: phonenumber
    })
      .then(() => {
        this.props.navigation.navigate("Profilee");
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => {
        return response;
      })
      .then(response => {
        this.updateUser(response.user.uid);
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    console.log(this.props);
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
            alignItems: "center",
            paddingTop: 130
          }}
        >
          <Text style={styles.textStyle}>Registre</Text>
          <Item style={styles.Iteminput}>
            <Icon name="mail" color="#c50d66" />
            <TextInput
              placeholder="email"
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
              placeholder="Password"
              autoCapitalize="none"
              returnKeyType="next"
              multiline={false}
              ref={input => (this.passwordInput = input)}
              onSubmitEditing={() => this.firstname.focus()}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </Item>
          <Item style={styles.Iteminput}>
            <Icon name="user" type="font-awesome" color="#c50d66" />
            <TextInput
              placeholder="First name"
              placeholderTextColor="#393E46"
              ref={input => (this.firstname = input)}
              returnKeyType="next"
              onSubmitEditing={() => this.phonenumber.focus()}
              style={styles.textInput}
              autoCorrect={false}
              multiline={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={firstname => this.setState({ firstname })}
            />
          </Item>
          <Item style={styles.Iteminput}>
            <Icon name="phone" type="font-awesome" color="#c50d66" />
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#393E46"
              ref={input => (this.phonenumber = input)}
              returnKeyType="go"
              keyboardType="numeric"
              style={styles.textInput}
              autoCorrect={false}
              multiline={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={phonenumber => this.setState({ phonenumber })}
            />
          </Item>
          <View style={{ width: "80%", paddingTop: 50 }}>
            <Button block onPress={this.handleSignUp}>
              <Text style={styles.buttonstyle}>Create Account</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
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

const mapStateToProps = state => ({
  member: state.member || {},
  status: state.status.signup || null,
});

const mapDispatchToProps = {
  onFormSubmit: signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registre);
