import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Item } from "native-base";
import { Icon, Button } from "react-native-elements";
import { login } from "../../actions/member";
import styles from "../../styles/login";
import colors from "../../utils/colors";
import Loader from "../../components/loader";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null,
    isLoading: false
  };

  handleSubmit = async () => {
    await this.setState({ isLoading: true });
    const { onFormSubmit } = this.props;
    const { navigate } = this.props.navigation;
    try {
      await onFormSubmit(this.state);
      await this.setState({ isLoading: false });
      navigate("App");
    } catch (e) {
      this.setState({ errorMessage: e, isLoading: false });
    }
  };

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }
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
          onPress={() => this.props.navigation.navigate("ForgetPassword")}
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
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text style={styles.forgettext}>No account yet? Create one</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = {
  onFormSubmit: login
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
