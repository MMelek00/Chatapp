import React from "react";
import { Container, Tab, Tabs, ScrollableTab } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import About from "./about.tab";
import History from "./history.tab";
import Certificates from "./certificates.tab";
import Skills from "./skills.tab";
class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "PROFILE"
    };
  };

  render() {
    const { navigation, member } = this.props;
    const userProp = navigation.getParam("data");
    const data = userProp || member;
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="About">
            <About data={data} />
          </Tab>
          <Tab heading="History">
            <History data={data} />
          </Tab>
          <Tab heading="Certificates">
            <Certificates data={data} />
          </Tab>
          <Tab heading="Skills">
            <Skills data={data} />
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
