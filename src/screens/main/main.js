import React from "react";
import { View, Dimensions } from "react-native";
//import * as firebase from "firebase";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Picker,
  Content
} from "native-base";
import { Icon } from "react-native-elements";
import UserCard from "../component/UserCard";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Settings"
    };
  }
  onValueChange(value: string) {
    this.props.navigation.navigate(value);
  }
  render() {
    let deviceWidth = Dimensions.get("window").width;
    return (
      <Container>
        <Header>
          <Left />
          <Body style={{ paddingLeft: deviceWidth / 4 - 10 }}>
            <Title>BUSINESS APP</Title>
          </Body>
          <Right style={{ paddingRight: 8 }}>
            <Picker
              mode="dropdown"
              iosHeader="Select"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="New group" value="NewGroupe" />
              <Picker.Item label="Account" value="Profile" />
              <Picker.Item label="Setting" value="Settings" />
            </Picker>
          </Right>
        </Header>
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
                selectedValue={this.state.Category}
                style={{ height: 20, width: "90%" }}
                itemStyle={{ color: "blue" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ Category: itemValue })
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
                selectedValue={this.state.Job}
                style={{ height: 20, width: "90%" }}
                itemStyle={{ color: "blue" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ Job: itemValue })
                }
              >
                <Picker.Item label="DESIGN" value="DESIGN" />
                <Picker.Item label="2 years" value="2" />
                <Picker.Item label="+3 years" value="3" />
                <Picker.Item label="+5 years" value="5" />
              </Picker>
            </View>
          </View>
          <UserCard />
          <UserCard />
          <UserCard />
        </Content>
      </Container>
    );
  }
}
