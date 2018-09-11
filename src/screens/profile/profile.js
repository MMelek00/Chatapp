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
import History from "./ProfileDetails/historyLine";
import Certificates from "./ProfileDetails/certificates";
import Skills from "./ProfileDetails/skills";
import Mywork from "./ProfileDetails/mywork";

export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right>
            <Icon
              name="edit"
              type="Entypo"
              color="white"
              onPress={() => console.log("hello")}
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
          <Tab heading="Mywork">
            <Mywork />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
