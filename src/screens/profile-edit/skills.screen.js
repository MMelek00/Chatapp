import React from "react";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { updateskills } from "../../actions/member";
import { ScrollView, View } from "react-native";
//components
import SkillAdd from "../../components/skill-add";
import SkillsList from "../../components/skills-list";
import Loader from "../../components/loader";
//utils
import colors from "../../utils/colors";
import styles from "../../styles/skills";

class Skills extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add your Skills ",
      headerRight: (
        <Button
          block
          onPress={() => navigation.navigate("Certificates")}
          title="Skip"
          backgroundColor={colors.base}
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      skills: this.props.member.skills || [],
      isloading: false
    };
  }

  addSkillHandler = skill => {
    var array = [...this.state.skills];
    var index = array.map(e => e.name).indexOf(skill.name);
    if (index === -1) {
      this.setState(prevState => ({
        skills: [...prevState.skills, skill]
      }));
    }
  };

  deleteSkillHandler = skill => {
    var array = [...this.state.skills];
    var index = array.map(e => e.name).indexOf(skill.name);
    array.splice(index, 1);
    this.setState({ skills: array });
  };

  handleSubmit = async () => {
    this.setState({ isloading: true });
    const { onFormSubmit } = this.props;
    const { navigate } = this.props.navigation;
    onFormSubmit(this.state.skills).then(resp => {
      this.setState({ isloading: false });
      navigate("Certificates");
    });
  };

  render() {
    const { skills, isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <ScrollView style={styles.container}>
        <SkillsList
          data={skills}
          deleteSkillHandler={this.deleteSkillHandler}
        />
        <SkillAdd addSkillHandler={this.addSkillHandler} />
        <Button
          rounded
          onPress={this.handleSubmit}
          title="Save changes"
          backgroundColor={colors.base}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {}
});
const mapDispatchToProps = {
  onFormSubmit: updateskills
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);
