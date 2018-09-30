import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import { Button, CheckBox } from "react-native-elements";
import { connect } from "react-redux";
import { updateCertificate } from "../../../actions/member";
import colors from "../../../utils/colors";
import { EngineeringOption } from "../../../utils/properties";
const renderLabel = (label, style) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{ width: 42, height: 42 }}
        source={{ uri: "https://dummyimage.com/100x100/52c25a/fff&text=S" }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  );
};
class Certificates extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add Certificates ",
      headerRight: (
        <Button
          block
          onPress={this.handleSubmit}
          title="finish"
          backgroundColor={colors.base}
        />
      )
    };
  };
  state = {
    selectedCertif: this.props.member.certificates || []
  };
  handleSubmit = async () => {
    this.setState({ isloading: true });
    const { onFormSubmit } = this.props;
    const { navigate } = this.props.navigation;
    onFormSubmit(this.state)
      .then(resp => {
        this.setState({ isloading: false });
        navigate("Profile");
      })
      .catch(e => console.log(`Error: ${e}`));
  };
  onSelectionsChange = selectedCertif => {
    this.setState({ selectedCertif });
    console.log(this.state.selectedCertif);
  };

  render() {
    return (
      <View>
        <SelectMultiple
          items={EngineeringOption}
          renderLabel={renderLabel}
          selectedItems={this.state.selectedFruits}
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
  onFormSubmit: updateCertificate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Certificates);
