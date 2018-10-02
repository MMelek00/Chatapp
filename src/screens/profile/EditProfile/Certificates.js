import React, { Component } from "react";
import { View } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import { Button } from "react-native-elements";
import Loader from "../../../components/Loader";
import { connect } from "react-redux";
import { updatecertificates } from "../../../actions/member";
import colors from "../../../utils/colors";
import { certeficateOption } from "../../../utils/properties";

class Certificates extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Add Certificates ",
      headerRight: (
        <Button
          block
          onPress={() => params.handleAddClick()}
          title="finish"
          backgroundColor={colors.base}
        />
      )
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({
      handleAddClick: this.handleSubmit
    });
  }

  state = {
    selectedCertif: this.props.member.certificates || [],
    isloading: false
  };
  handleSubmit = async () => {
    this.setState({ isloading: true });
    const array = this.state.selectedCertif.map(cert => cert.value);
    const { onFormSubmit } = this.props;
    const { navigate } = this.props.navigation;
    onFormSubmit(array)
      .then(resp => {
        this.setState({ isloading: false });
        navigate("Profile");
      })
      .catch(e => console.log(`Error: ${e}`));
  };
  onSelectionsChange = selectedCertif => {
    this.setState({ selectedCertif });
  };

  render() {
    if (this.state.isloading) {
      return <Loader />;
    }
    return (
      <View>
        <SelectMultiple
          items={certeficateOption}
          selectedItems={this.state.selectedCertif}
          onSelectionsChange={this.onSelectionsChange}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {}
});
const mapDispatchToProps = {
  onFormSubmit: updatecertificates
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Certificates);
