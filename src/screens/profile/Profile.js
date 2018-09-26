import React from "react";
import { Container, Tab, Tabs, ScrollableTab } from "native-base";
import { Icon } from "react-native-elements";
import About from "./ProfileDetails/About";
import History from "./ProfileDetails/History";
import Certificates from "./ProfileDetails/Certificates";
import Skills from "./ProfileDetails/Skills";
export default class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "PROFILE",
      headerRight: (
        <Icon
          name="edit"
          type="entypo"
          color="white"
          containerStyle={{ paddingRight: 10 }}
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        />
      )
    };
  };

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("data");
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="About">
            <About data={data} />
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
