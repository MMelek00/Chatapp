import React from "react";
import { TextInput, View, Text } from "react-native";
import { Icon, Button } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
//components
import ButtonGroup from "../../components/ButtonGroup";
//utils
import styles, {
  pickerSelectStyles,
  pickerHalfStyles
} from "../../styles/search";
import { categories, categoriesOptions, experience, countries } from "../../utils/properties";

export default class Search extends React.Component {
  static navigationOptions = {
    title: "SEARCH"
  };

  state = {
    availability: [],
    experience: null,
    category: null,
    job: null,
    country: null,
    firstName: ""
  };

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    navigate("Results", { filters: this.state });
  }

  handleState = (value, target) => {
    this.setState({ [target]: value });
  };

  render() {
    const { category } = this.state;
    const jobOptions = category ? categoriesOptions[category] : [];
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
            onChangeText={v => this.handleState(v, "firstName")}
          />
        </View>
        <View style={styles.shadow}>
          <ButtonGroup
            selectMultiple
            onPress={v => this.handleState(v, "availability")}
            selectedIndexes={this.state.availability}
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
            onValueChange={v => this.handleState(v, "experience")}
            style={{ ...pickerSelectStyles }}
            value={this.state.experience}
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
                  category: value,
                  job: null
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
              items={jobOptions}
              onValueChange={v => this.handleState(v, "job")}
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
            items={countries}
            onValueChange={v => this.handleState(v, "country")}
            style={{ ...pickerSelectStyles }}
            value={this.state.country}
          />
        </View>
        <Button
          rounded
          onPress={this.handleSubmit}
          title="SEARCH"
          backgroundColor="#1C39A1"
          containerViewStyle={styles.button}
        />
      </View>
    );
  }
}
