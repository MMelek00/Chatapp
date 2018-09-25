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
  state = {
    data: {}
  };
  componentDidMount() {
    const { navigation } = this.props;
    this.state.data = navigation.getParam("data");
  }
  render() {
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="About">
            <About data={this.state.data} />
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
