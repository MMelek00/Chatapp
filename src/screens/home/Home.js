import React from "react";
import { View } from "react-native";
import { Container, Picker, Content } from "native-base";

import { Feather } from "@expo/vector-icons";
import UsersList from "../../components/UsersList";
import { getUsers } from "../../utils/firebase-fns";
import { CategoryOption } from "../../components/category";

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
    category: "EGYPT",
    job: "DESIGN",
    data: [],
    isLoading: true,
    isRefreshing: false,
    error: ""
  };


  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("didFocus", () => { this._fetchUsers(); });
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
  }

  onValueChange = (value: string) => {
    this.props.navigation.navigate(value);
  };

  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.pickersContainer} >
          <View
            style={{
              flex: 1,
              backgroundColor: "gray",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 5
            }}
          >
            <Picker
              selectedValue={this.state.country}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ country: itemValue })
              }
            >
              <Picker.Item label="EGYPT" value="EGYPT" />
              <Picker.Item label="2 years" value="2" />
              <Picker.Item label="+3 years" value="3" />
              <Picker.Item label="+5 years" value="5" />
            </Picker>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#57A0FD",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 10
            }}
          >
            <Picker
              selectedValue={this.state.job}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ job: itemValue })
              }
            >
              <Picker.Item label="DESIGN" value="DESIGN" />
              <Picker.Item label="2 years" value="2" />
              <Picker.Item label="+3 years" value="3" />
              <Picker.Item label="+5 years" value="5" />
            </Picker>
          </View>
        </View>
        <View style={styles.usersContainer}>
          <UsersList {...this.state} _fetchUsers={this._fetchUsers} />
        </View>
      </View>
    );
  }
}
