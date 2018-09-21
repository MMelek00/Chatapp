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
  static navigationOptions = {
    title: "PROFILE"
  };
  render() {
    return (
      <Container>
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
