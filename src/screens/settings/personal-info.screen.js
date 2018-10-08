import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import {
  FormLabel,
  FormInput,
  Button,
  Text,
  CheckBox
} from "react-native-elements";

import { connect } from "react-redux";

import Loader from "../../components/Loader";

import { updatePersonalInfo } from "../../actions/member";
import styles from "../../styles/settings";

class UpdateProfile extends React.Component {
  static navigationOptions = {
    title: "Personal Information"
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: null,
      firstName: props.member.firstName || "",
      email: props.member.email || "",
      password: "",
      password2: "",
      changeEmail: false,
      changePassword: false
    };
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val
    });
  };

  handleSubmit = () => {
    this.setState({ isLoading: true });
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state)
      .then(() => {
        this.setState({ isLoading: false, message: "Personal info updated" });
      })
      .catch(e => {
        this.setState({ isLoading: false, message: e });
      });
  };

  render() {
    const {
      firstName,
      email,
      changeEmail,
      changePassword,
      isLoading,
      message
    } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-64}>
        {message && <Text>{message}</Text>}
        <View style={styles.inputCard}>
          <FormLabel>First Name</FormLabel>
          <FormInput
            value={firstName}
            onChangeText={v => this.handleChange("firstName", v)}
          />
        </View>
        <View style={styles.inputCard}>
          <CheckBox
            checked={changeEmail}
            title="Email"
            onPress={() => this.handleChange("changeEmail", !changeEmail)}
          />

          {changeEmail && (
            <View>
              <FormLabel>Last Name</FormLabel>
              <FormInput
                autoCapitalize="none"
                value={email}
                keyboardType="email-address"
                onChangeText={v => this.handleChange("email", v)}
              />
            </View>
          )}
        </View>
        <View style={styles.inputCard}>
          <CheckBox
            checked={changePassword}
            title="Change Password"
            onPress={() => this.handleChange("changePassword", !changePassword)}
          />

          {changePassword && (
            <View>
              <FormLabel>Password</FormLabel>
              <FormInput
                autoCapitalize="none"
                secureTextEntry
                onChangeText={v => this.handleChange("password", v)}
              />
              <FormLabel>Confirm Password</FormLabel>
              <FormInput
                autoCapitalize="none"
                secureTextEntry
                onChangeText={v => this.handleChange("password2", v)}
              />
            </View>
          )}
        </View>

        <Button
          onPress={this.handleSubmit}
          buttonStyle={styles.button}
          title="Update"
        />
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {}
});

const mapDispatchToProps = {
  onFormSubmit: updatePersonalInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfile);
