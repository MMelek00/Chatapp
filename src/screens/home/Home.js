import React from "react";
import { View } from "react-native";
import { Picker } from "native-base";
import { Feather } from "@expo/vector-icons";
import UsersList from "../../components/UsersList";
import { getUsers } from "../../utils/firebase-fns";
import HomeHeader from "./HomeHeader";

import styles from "../../styles/home";

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "BUSINESS APP",
      headerRight: (
        <Picker
          mode="dropdown"
          iosHeader="Select"
          iosIcon={
            <Feather
              name="more-vertical"
              color="white"
              style={{ paddingRight: 10 }}
            />
          }
          textStyle={{ color: "white" }}
          style={{ width: undefined }}
          onValueChange={navigation.getParam("onValueChange")}
        >
          <Picker.Item label="New group" value="NewGroupe" />
          <Picker.Item label="Account" value="Profile" />
          <Picker.Item label="Setting" value="Settings" />
        </Picker>
      )
    };
  };

  state = {
    selected: "Settings",
    country: null,
    job: null,
    data: [],
    isLoading: true,
    isRefreshing: false,
    error: ""
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("didFocus", () => {
      this._fetchUsers();
    });
    navigation.setParams({
      onValueChange: this.onValueChange,
      selected: this.state.selected
    });
  }

  _fetchUsers = () => {
    this.setState({ isRefreshing: true });
    getUsers()
      .then(data => {
        this.setState({ data, isLoading: false, isRefreshing: false });
      })
      .catch(error => {
        this.setState({ isLoading: false, isRefreshing: false, error });
        console.error(error);
      });
  };

  onValueChange = (value: string) => {
    this.props.navigation.navigate(value);
  };

  onPickerChange = (value, target) => {
    this.setState({ [target]: value });
  };

  render() {
    const { country, job } = this.state;
    return (
      <View style={styles.homeContainer}>
        <HomeHeader
          country={country}
          job={job}
          onPickerChange={this.onPickerChange}
        />
        <View style={styles.usersContainer}>
          <UsersList {...this.state} _fetchUsers={this._fetchUsers} />
        </View>
      </View>
    );
  }
}
