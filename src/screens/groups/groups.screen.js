import React from "react";
import { View, TextInput } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { ImagePicker, Permissions } from "expo";
import UsersList from "../../components/users-list";
import { getUsers, addGroup } from "../../utils/firebase-fns";
import { Imageurl } from "../../utils/firebase-fns";
import * as firebase from "firebase";

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
    avatar:
      "https://cdn.dribbble.com/users/91147/screenshots/1741674/test_icons.png",
    isLoading: true,
    isuploading: false,
    error: null
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
    if (this.state.name !== "") {
      addGroup(name, avatar, usersToAdd)
        .then(groupId => {
          navigate("Conversations");
        })

        .catch(e => console.log(`Error: ${e}`));
    }
  };
  onChooseImagePress = async () => {
    const id = Math.random(1000);
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true
      });
      this.setState({ isuploading: true });
      if (!result.cancelled) {
        await this.uploadImage(result.uri, id);
        const url = await Imageurl(id);
        this.setState({ avatar: url });
        this.setState({ isuploading: false });
      }
    }
  };
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child("images")
      .child(`${imageName}.jpg`);
    return ref.put(blob);
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
          <Avatar
            large
            rounded
            source={{
              uri: this.state.avatar
            }}
            onPress={() => this.onChooseImagePress()}
            activeOpacity={0.7}
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
