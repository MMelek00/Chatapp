import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/member";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { Item } from "native-base";
import { Icon, Button } from "react-native-elements";
import colors from "../../utils/colors";
import styles from "../../styles/signup";
import Loader from "../../components/loader";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      phoneNumber: "",
      isLoading: false,
      errorMessage: null
    };
  }

  handleSubmit = async () => {
    await this.setState({ isLoading: true });
    const { onFormSubmit } = this.props;
    const { navigate } = this.props.navigation;
    try {
      await onFormSubmit(this.state);
      await this.setState({ isLoading: false });
      navigate("EditProfile");
    } catch (e) {
      Alert.alert(
        e,
        undefined,
        [
          { text: "Cancel", style: "cancel" },
        ]
      );
      this.setState({ isLoading: false });
    }
  };

  _login = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }
    return (
      <KeyboardAvoidingView style={styles.container} bahvior="padding" keyboardVerticalOffset={-50}>
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
            returnKeyType="done"
            keyboardType="numeric"
            style={styles.textInput}
            autoCorrect={false}
            multiline={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
          />
        </Item>
        {this.state.errorMessage && (
          <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>
            {this.state.errorMessage}
          </Text>
        )}
        <TouchableOpacity
          onPress={this._login}
          style={{
            flexDirection: "row",
            alignSelf: "flex-start",
            paddingTop: 10
          }}
        >
          <Text style={styles.forgettext}>
            already have an account? Login
            </Text>
        </TouchableOpacity>
        <View style={{ paddingTop: 30, width: "90%" }}>
          <Button
            block
            rounded
            onPress={this.handleSubmit}
            title="Create Account"
            backgroundColor={colors.base}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = {
  onFormSubmit: signUp
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
