import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/member";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Item, Button } from "native-base";
import { Icon } from "react-native-elements";

class Registre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      phoneNumber: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onFormSubmit } = this.props;
    const navigate = this.props.navigation.navigate;
    onFormSubmit(this.state)
      .then(() => navigate("Login"))
      .catch(e => console.log(`Error: ${e}`));
  }


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
              onSubmitEditing={() => this.firstName.focus()}
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
              ref={input => (this.firstName = input)}
              returnKeyType="next"
              onSubmitEditing={() => this.phoneNumber.focus()}
              style={styles.textInput}
              autoCorrect={false}
              multiline={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={firstName => this.setState({ firstName })}
            />
          </Item>
          <Item style={styles.Iteminput}>
            <Icon name="phone" type="font-awesome" color="#c50d66" />
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#393E46"
              ref={input => (this.phoneNumber = input)}
              returnKeyType="go"
              keyboardType="numeric"
              style={styles.textInput}
              autoCorrect={false}
              multiline={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
            />
          </Item>
          <View style={{ width: "80%", paddingTop: 50 }}>
            <Button block onPress={this.handleSubmit}>
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
  status: state.status.signup || null
});

const mapDispatchToProps = {
  onFormSubmit: signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registre);
