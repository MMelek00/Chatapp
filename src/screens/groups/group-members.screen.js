import React from "react";
import { View, TextInput } from "react-native";
import { Icon } from "react-native-elements";

import UsersList from "../../components/users-list";
import { getGroupMembers } from "../../utils/firebase-fns";

import styles from "../../styles/groups";

class GroupMembers extends React.Component {

  static navigationOptions = {
    title: "GROUP MEMBERS",
  };

  state = {
    data: [],
    name: "",
    avatar: "",
    isLoading: true,
    error: ""
  }

  componentDidMount() {
    this._fetchUsers();
  }

  _fetchUsers = () => {
    const { navigation, } = this.props;
    const groupId = navigation.getParam("groupId");
    getGroupMembers(groupId)
      .then(data => {
        this.setState({ data, isLoading: false });
      })
      .catch(error => {
        this.setState({ isLoading: false, error });
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <UsersList {...this.state} _fetchUsers={this._fetchUsers}/>
      </View>
    );
  }
}

export default GroupMembers;
