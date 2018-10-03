import React, { Component } from "react";
import { View, Text } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import { Button } from "react-native-elements";
import Loader from "../../../components/Loader";
import { certeficateOption } from "../../../utils/properties";
import { connect } from "react-redux";
import { updatecertificates } from "../../../actions/member";
import colors from "../../../utils/colors";
import styles from "../../../styles/indicators";

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

  constructor(props) {
    super(props);
    this.state = {
      selectedCertif: this.props.member.certificates || [],
      isloading: false
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleAddClick: this.handleSubmit
    });
  }

  handleSubmit = async () => {
    this.setState({ isloading: true });
    const array = this.state.selectedCertif.map(cert => {
      if (cert.value) {
        return cert.value;
      }
      return cert;
    });
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
    if (this.state.data.length === 0) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            you didn't add any histories yet.
          </Text>
        </View>
      );
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
