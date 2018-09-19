import React from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Tab,
  Tabs,
  ScrollableTab
} from "native-base";
import { Icon } from "react-native-elements";

import About from "./ProfileDetails/about";
import History from "./ProfileDetails/history";
import Certificates from "./ProfileDetails/certificates";
import Skills from "./ProfileDetails/skills";
export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name="arrow-back"
              color="white"
              onPress={() => this.props.navigation.navigate("Main")}
            />
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right>
            <Icon
              name="edit"
              type="Entypo"
              color="white"
              onPress={() => this.props.navigation.navigate("EditProfile")}
            />
          </Right>
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="About">
            <About />
          </Tab>
          <Tab heading="History">
            <History />
          </Tab>
          <Tab heading="Certificates">
            <Certificates />
          </Tab>
          <Tab heading="Skills">
            <Skills />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
