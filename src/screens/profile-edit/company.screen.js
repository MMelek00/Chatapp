import React from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { updatehistory } from "../../actions/member";
import Loader from "../../components/loader";
import colors from "../../utils/colors";
import styles from "../../styles/skills";
import Addhistory from "../../components/history-add";
import HistoryList from "../../components/history-list";
class Company extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Job History",
      headerRight: (
        <Button
          block
          onPress={() => navigation.navigate("Skills")}
          title="Skip"
          backgroundColor={colors.base}
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      history: this.props.member.history || [],
      isloading: false
    };
  }
  addhistoryHandler = history => {
    var array = [...this.state.history];
    var index = array.map(e => e.name).indexOf(history.name);
    if (index === -1) {
      this.setState(prevState => ({
        history: [...prevState.history, history]
      }));
    }
  };
  deletehistoryHandler = history => {
    var array = [...this.state.history];
    var index = array.map(e => e.name).indexOf(history.name);
    array.splice(index, 1);
    this.setState({ history: array });
  };

  handleSubmit = async () => {
    this.setState({ isloading: true });
    const { onFormSubmit } = this.props;
    const { navigate } = this.props.navigation;
    onFormSubmit(this.state.history)
      .then(resp => {
        this.setState({ isloading: false });
        navigate("Skills");
      })
      .catch(e => console.log(`Error: ${e}`));
  };
  render() {
    const { history, isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <ScrollView style={styles.container}>
        <HistoryList
          data={history}
          deletehistoryHandler={this.deletehistoryHandler}
        />
        <Addhistory addhistoryHandler={this.addhistoryHandler} />
        <Button
          block
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
  onFormSubmit: updatehistory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Company);
