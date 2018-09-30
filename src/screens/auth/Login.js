import React from "react";
import { Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { Item, Button } from "native-base";
import { Icon } from "react-native-elements";
import { login } from "../../actions/member";
import colors from "../../utils/colors";
import styles from "../../styles/login";

class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };

  handleSubmit = async () => {
    const { onFormSubmit } = this.props;
    const { navigate } = this.props.navigation;
    onFormSubmit(this.state)
      .then(resp => {
        navigate("Main");
      })
      .catch(e => console.log(`Error: ${e}`));
  };
  _signup = () => {
    this.props.navigation.navigate("Signup");
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
            <Button block onPress={this.handleSubmit}>
              <Text style={styles.buttonstyle}>SIGN IN</Text>
            </Button>
          </View>
          <Button iconRight transparent primary onPress={this._signup}>
            <Text style={styles.forgettext}>No account yet?Create one</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
  status: state.status.login || null
});

const mapDispatchToProps = {
  onFormSubmit: login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
