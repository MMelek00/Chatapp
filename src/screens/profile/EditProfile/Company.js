import React from "react";
import {
  Container,
  Item,
  Label,
  Input,
  Content,
  Picker,
  DatePicker
} from "native-base";
import { Button, ButtonGroup } from "react-native-elements";
import { connect } from "react-redux";
import { updatehistory } from "../../../actions/member";
import Loader from "../../../components/Loader";
import { View, Text } from "react-native";
class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: this.props.member.uid,
      name: "",
      startDate: new Date(),
      year: 1,
      jobName: "",
      link: "",
      availability: "",
      index: 2,
      isloading: false
    };
    this.setDate = this.setDate.bind(this);
  }
  handleSubmit = async () => {
    this.setState({ isloading: true });
    const { onFormSubmit } = this.props;
    const { navigate } = this.props.navigation;
    onFormSubmit(this.state)
      .then(resp => {
        this.setState({ isloading: false });
        navigate("Skills");
      })
      .catch(e => console.log(`Error: ${e}`));
  };
  setDate(newDate) {
    this.setState({ startDate: newDate });
  }
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
    if (this.state.isloading) {
      return <Loader />;
    }
    return (
      <Container>
        <Content style={{ backgroundColor: "#ecf0f1" }}>
          <View
            style={{
              padding: 25,
              justifyContent: "center",
              backgroundColor: "#E6E6E6"
            }}
          >
            <Item floatingLabel>
              <Label>Company Name</Label>
              <Input onChangeText={name => this.setState({ name })} />
            </Item>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  paddingTop: 10,
                  fontFamily: "Roboto_medium",
                  color: "gray"
                }}
              >
                Add your start Date
              </Text>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(2014, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Job Start Date"
                textStyle={{ color: "green", fontFamily: "Roboto_medium" }}
                placeHolderTextStyle={{ color: "gray" }}
                onDateChange={this.setDate}
              />
            </View>
            <View style={{ paddingTop: 10 }}>
              <ButtonGroup
                selectedButtonStyle={{ backgroundColor: "#57A0FD" }}
                onPress={this.updateIndex}
                selectedIndex={this.state.index}
                buttons={["Freelancer", "Part Time", "Full Time"]}
                containerStyle={{ height: 45, width: "90%" }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Roboto_medium",
                  paddingRight: 10,
                  color: "gray"
                }}
              >
                Years on Company
              </Text>
              <Picker
                selectedValue={this.state.years}
                style={{ height: 20, width: "100%", paddingLeft: 5 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ years: itemValue })
                }
              >
                <Picker.Item label="1 year" value="1" />
                <Picker.Item label="2 years" value="2" />
                <Picker.Item label="+3 years" value="3" />
                <Picker.Item label="+5 years" value="5" />
              </Picker>
            </View>
            <Item floatingLabel>
              <Label>Job Titre</Label>
              <Input onChangeText={jobName => this.setState({ jobName })} />
            </Item>
            <Item floatingLabel>
              <Label>Company Link</Label>
              <Input onChangeText={link => this.setState({ link })} />
            </Item>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              justifyContent: "center"
            }}
          >
            <Button
              block
              onPress={this.handleSubmit}
              title="ADD"
              backgroundColor="#1C39A1"
            />
            <Button
              block
              onPress={() => this.props.navigation.navigate("Skills")}
              title="Next"
              backgroundColor="#1C39A1"
            />
          </View>
        </Content>
      </Container>
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
