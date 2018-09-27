import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Item, Card, Picker } from "native-base";
import { Icon, Button } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
//components
import ButtonGroup from "../../components/ButtonGroup";
//utils
import styles from "../../styles/search";
import { categories, cats, WebOption, countries } from "../../utils/properties";

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding: 13,
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: "white",
    color: "black",
  },
});

export default class Search extends React.Component {
  static navigationOptions = {
    title: "SEARCH"
  };
  updateIndex = index => {
    this.setState({ index });
  };

  state = {
    index: [0],
    Years: 1,
    category: null,
    job: "Mobile Development",
    country: "Tunisia",
    name: "",
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Iteminput}>
          <Icon name="user" type="font-awesome" color="white" />
          <TextInput
            placeholder="Name"
            placeholderTextColor="white"
            style={styles.textInput}
            autoCorrect={false}
            multiline={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={name => this.setState({ name })}
          />
        </View>
        <ButtonGroup
          selectMultiple
          onPress={this.updateIndex}
          selectedIndexes={this.state.index}
          buttons={["Freelancer", "Part Time", "Full Time"]}
        />
        <Card >
          <Item>
            <Icon name="chain" type="font-awesome" color="gray" />
            <Text>Years Experience</Text>
          </Item>
          <RNPickerSelect
            placeholder={{
              label: "Select a category...",
              value: null,
            }}
            items={cats}
            onValueChange={(value) => {
              this.setState({
                category: value,
              });
            }}
            style={{ ...pickerSelectStyles }}
            value={this.state.category}
          />
        </Card>
        <View>
          <Card>
            <View>
              <Text>Category</Text>
            </View>
            <RNPickerSelect
              placeholder={{
                label: "Select a category...",
                value: null,
              }}
              items={cats}
              onValueChange={(value) => {
                this.setState({
                  category: value,
                });
              }}
              style={{ ...pickerSelectStyles }}
              value={this.state.category}
            />
          </Card>
          <Card>
            <View>
              <Text>Job</Text>
            </View>
            <RNPickerSelect
              placeholder={{
                label: "Select a category...",
                value: null,
              }}
              items={cats}
              onValueChange={(value) => {
                this.setState({
                  category: value,
                });
              }}
              style={{ ...pickerSelectStyles }}
              value={this.state.category}
            />
          </Card>
        </View>
        <Card>
          <RNPickerSelect
            placeholder={{
              label: "Select a category...",
              value: null,
            }}
            items={cats}
            onValueChange={(value) => {
              this.setState({
                category: value,
              });
            }}
            style={{ ...pickerSelectStyles }}
            value={this.state.category}
          />
        </Card>
        <View>
          <Button
            rounded
            onPress={() => console.log(this.state.index)}
            title="SEARCH"
            backgroundColor="#1C39A1"
          />
        </View>
      </View>
    );
  }
}
