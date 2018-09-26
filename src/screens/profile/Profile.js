import React from "react";
import { Container, Tab, Tabs, ScrollableTab } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import About from "./ProfileDetails/About";
import History from "./ProfileDetails/History";
import Certificates from "./ProfileDetails/Certificates";
import Skills from "./ProfileDetails/Skills";
class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "PROFILE"
    };
  };

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("data");
    const { uid } = this.props.member;
    if (uid === data.id) {
      this.data = this.props.member;
    }
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="About">
            <About data={data} />
          </Tab>
          <Tab heading="History">
            <History id={data.id} />
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
const mapStateToProps = state => ({
  member: state.member || {}
});

export default connect(mapStateToProps)(withNavigation(Profile));
