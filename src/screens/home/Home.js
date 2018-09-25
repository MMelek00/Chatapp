import React from "react";
import { View } from "react-native";
import { Container, Picker, Content } from "native-base";

import { Feather } from "@expo/vector-icons";
import UsersList from "../../components/UsersList";
import { getUsers } from "../../utils/firebase-fns";
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
    data: []
  };

  componentWillMount = () => {
    getUsers()
      .then(data => {
        this.setState({ data });
      })

      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.props.navigation.setParams({
      onValueChange: this.onValueChange,
      selected: this.state.selected
    });
  }
  onValueChange = (value: string) => {
    this.props.navigation.navigate(value);
  };
  render() {
    return (
      <Container>
        <Content>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              padding: 5
            }}
          >
            <View
              style={{
                width: "40%",
                backgroundColor: "gray",
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 10
              }}
            >
              <Picker
                selectedValue={this.state.country}
                style={{ height: 20, width: "90%" }}
                itemStyle={{ color: "blue" }}
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
                width: "50%",
                backgroundColor: "#57A0FD",
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 10
              }}
            >
              <Picker
                selectedValue={this.state.job}
                itemStyle={{ color: "blue" }}
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
          <UsersList data={this.state.data} />
        </Content>
      </Container>
    );
  }
}
