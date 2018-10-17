import React from "react";
import { View, TextInput } from "react-native";
import { Icon } from "react-native-elements";

import UsersList from "../../components/users-list";
import { getUsers, addGroup } from "../../utils/firebase-fns";

import styles from "../../styles/groups";

class NewGroupe extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "ADD GROUP",
      headerRight: (
        <Icon
          name="check"
          type="feather"
          color="#fff"
          containerStyle={styles.addIcon}
          onPress={() => params.handleAddClick()}
        />
      )
    };
  };

  state = {
    usersToAdd: [],
    data: [],
    name: "",
    avatar: "",
    isLoading: true,
    error: ""
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleAddClick: this.handleSubmit
    });
    this._fetchUsers();
  }

  handleSubmit = () => {
    const { usersToAdd, name, avatar } = this.state;
    const { navigate } = this.props.navigation;
    addGroup(name, avatar, usersToAdd)
      .then(groupId => {
        navigate("Conversations");
      })
      .catch(e => console.log(`Error: ${e}`));
  };

  _fetchUsers = () => {
    getUsers()
      .then(data => {
        this.setState({ data, isLoading: false });
      })
      .catch(error => {
        this.setState({ isLoading: false, error });
        console.error(error);
      });
  };

  addUserToList = id => {
    var array = [...this.state.usersToAdd];
    var index = array.map(e => e).indexOf(id);
    if (index === -1) {
      this.setState(prevState => ({
        usersToAdd: [...prevState.usersToAdd, id]
      }));
    } else {
      this.setState(prevState => ({
        usersToAdd: [...array.slice(0, index), ...array.slice(index + 1)]
      }));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Groupe name"
          placeholderTextColor="#fff"
          style={styles.textInput}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <View style={styles.avatarUpload}>
          <Icon
            raised
            name="camera"
            type="entypo"
            color="#f50"
            size={35}
            onPress={() => console.log("hello")}
          />
        </View>
        <View style={styles.usersContainer}>
          <UsersList {...this.state} addUserToList={this.addUserToList} />
        </View>
      </View>
    );
  }
}

export default NewGroupe;
