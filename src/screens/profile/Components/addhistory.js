import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  Item,
  Picker,
  Label,
  Input,
  DatePicker,
  Button as NBButton,
  Icon as NBIcon,
  Text as NBText
} from "native-base";
import { ButtonGroup } from "react-native-elements";
import colors from "../../../utils/colors";
class Addhistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      startDate: new Date(),
      year: 1,
      jobName: "",
      link: "",
      availability: "",
      index: 2
    };
    this.setDate = this.setDate.bind(this);
  }
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
  handleSubmit = () => {
    const { name, jobName, startDate, year, link, availability } = this.state;
    if (name && jobName !== 0) {
      this.props.addhistoryHandler({
        name,
        jobName,
        year,
        link,
        availability
      });
      this.setState({ name: "", jobName: "" });
    }
  };
  render() {
    return (
      <View>
        <View
          style={{
            padding: 15,
            justifyContent: "center",
            backgroundColor: "#fff",
            borderWidth: 2,
            shadowColor: "#e0e0e0",
            shadowOffset: {
              width: -2,
              height: 2
            },
            borderRadius: 10
          }}
        >
          <Item>
            <Label>Company Name:</Label>
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
              defaultDate={new Date(2018, 12, 31)}
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

          <ButtonGroup
            selectedButtonStyle={{ backgroundColor: "#57A0FD" }}
            onPress={this.updateIndex}
            selectedIndex={this.state.index}
            buttons={["Freelancer", "Part Time", "Full Time"]}
            containerStyle={{ height: 45, width: "90%" }}
          />

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Roboto_medium",
                paddingRight: 10,
                color: "gray"
              }}
            >
              Years on Company:
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
          <Item>
            <Label>Job Titre: </Label>
            <Input onChangeText={jobName => this.setState({ jobName })} />
          </Item>
          <Item>
            <Label>Company Link: </Label>
            <Input onChangeText={link => this.setState({ link })} />
          </Item>
        </View>
        <NBButton full iconLeft transparent onPress={this.handleSubmit}>
          <NBIcon type="Feather" name="plus-circle" color={colors.base} />
          <NBText>add history</NBText>
        </NBButton>
      </View>
    );
  }
}

export default Addhistory;
