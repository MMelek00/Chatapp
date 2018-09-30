import React from "react";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { updatehistory } from "../../../actions/member";
import Loader from "../../../components/Loader";
import colors from "../../../utils/colors";
import styles from "../../../styles/skills";
import Addhistory from "../Components/addhistory";
import HistoryList from "../Components/historyList";
import { Content } from "native-base";
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

  updateIndex = index => {
    this.setState({ index });
    if (index === 0) {
      this.state.availability = "Freelancer";
    } else if (index === 1) {
      this.state.availability = "Part Time";
    } else {
      this.state.availability = "Full Time";
    }
  };
  render() {
    const { history, isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <Content style={styles.container}>
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
      </Content>
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
