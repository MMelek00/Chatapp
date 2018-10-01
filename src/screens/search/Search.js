import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Icon, Button } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
//components
import ButtonGroup from "../../components/ButtonGroup";
//utils
import styles, {
  pickerSelectStyles,
  pickerHalfStyles
} from "../../styles/search";
import { categories, WebOption, experience } from "../../utils/properties";

export default class Search extends React.Component {
  static navigationOptions = {
    title: "SEARCH"
  };
  updateIndex = index => {
    this.setState({ index });
  };

  state = {
    index: [0],
    experiences: 1,
    category: null,
    job: "Mobile Development",
    country: "Tunisia",
    name: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.inputContainer, styles.shadow]}>
          <Icon name="user" type="font-awesome" color="white" />
          <TextInput
            placeholder="Name"
            placeholderTextColor="#fff"
            style={styles.textInput}
            autoCorrect={false}
            multiline={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={name => this.setState({ name })}
          />
        </View>
        <View style={styles.shadow}>
          <ButtonGroup
            selectMultiple
            onPress={this.updateIndex}
            selectedIndexes={this.state.index}
            buttons={["Freelancer", "Part Time", "Full Time"]}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.row}>
            <Icon
              name="chain"
              type="font-awesome"
              color="gray"
              style={styles.icon}
            />
            <Text style={styles.title}>Years Experience</Text>
          </View>
          <RNPickerSelect
            placeholder={{
              label: "Select a experience year...",
              value: null
            }}
            items={experience}
            hideIcon
            onValueChange={value => {
              this.setState({
                experiences: value
              });
            }}
            style={{ ...pickerSelectStyles }}
            value={this.state.experiences}
          />
        </View>
        <View style={[styles.card, styles.row]}>
          <View>
            <Text style={styles.title}>Category</Text>
            <RNPickerSelect
              placeholder={{
                label: "Select a category...",
                value: null
              }}
              hideIcon
              items={categories}
              onValueChange={value => {
                this.setState({
                  category: value
                });
              }}
              style={{ ...pickerHalfStyles }}
              value={this.state.category}
            />
          </View>
          <View style={styles.devider} />
          <View>
            <Text style={styles.title}>Job</Text>
            <RNPickerSelect
              placeholder={{
                label: "Select a job...",
                value: null
              }}
              hideIcon
              items={WebOption}
              onValueChange={value => {
                this.setState({
                  job: value
                });
              }}
              style={{ ...pickerHalfStyles }}
              value={this.state.job}
            />
          </View>
        </View>
        <View style={styles.card}>
          <RNPickerSelect
            placeholder={{
              label: "Select a country...",
              value: null
            }}
            hideIcon
            items={WebOption}
            onValueChange={value => {
              this.setState({
                category: value
              });
            }}
            style={{ ...pickerSelectStyles }}
            value={this.state.category}
          />
        </View>
        <View>
          <Button
            rounded
            onPress={() => console.log(this.state.index)}
            title="SEARCH"
            backgroundColor="#1C39A1"
            containerViewStyle={styles.button}
          />
        </View>
      </View>
    );
  }
}
