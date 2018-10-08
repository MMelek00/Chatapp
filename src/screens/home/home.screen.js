import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import UsersList from "../../components/UsersList";
import { getFilteredUsers } from "../../utils/firebase-fns";
import HomeHeader from "./HomeHeader";
import styles from "../../styles/home";

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "BUSINESS APP",
      headerRight: (
        <Icon
          containerStyle={{ paddingRight: 20 }}
          name="more-vertical"
          type="feather"
          color="white"
          onPress={() => navigation.navigate("HomePicker")}
        />
      )
    };
  };

  state = {
    selected: undefined,
    country: null,
    category: null,
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
    const { category, country } = this.state;
    getFilteredUsers({ category, country })
      .then(data => {
        this.setState({ data, isLoading: false, isRefreshing: false });
      })
      .catch(error => {
        this.setState({ isLoading: false, isRefreshing: false, error });
      });
  };

  onValueChange = (value: string) => {
    this.props.navigation.navigate(value);
  };

  onPickerChange = (value, target) => {
    this.setState({ [target]: value }, () => {
      this._fetchUsers();
    });
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
