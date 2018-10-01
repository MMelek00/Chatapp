import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Item } from "native-base";
import { Icon, Button } from "react-native-elements";
import { login } from "../../actions/member";
import styles from "../../styles/login";
import colors from "../../utils/colors";
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
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
        <TouchableOpacity
          style={{ flexDirection: "row", alignSelf: "flex-start" }}
        >
          <Text style={styles.forgettext}>Forget password</Text>
          <Icon
            size={20}
            name="info-circle"
            type="font-awesome"
            color={colors.base}
          />
        </TouchableOpacity>
        <View style={{ width: "90%", paddingTop: 50 }}>
          <Button
            rounded
            onPress={this.handleSubmit}
            title="SignIn"
            backgroundColor={colors.base}
          />
        </View>
        <TouchableOpacity
          onPress={this._signup}
          style={{ flexDirection: "row", alignSelf: "flex-start" }}
        >
          <Text style={styles.forgettext}>No account yet? Create one</Text>
        </TouchableOpacity>
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
