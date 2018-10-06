import React from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { categories, countries } from "../../utils/properties";
import styles, {
  countryPickerStyles,
  jobPickerStyles
} from "../../styles/home";

const HomeHeader = ({ country, job, onPickerChange }) => {
  return (
    <View style={styles.pickersContainer}>
      <RNPickerSelect
        placeholder={{
          label: "Select a country...",
          value: null
        }}
        items={countries}
        onValueChange={value => onPickerChange(value, "country")}
        style={{ ...countryPickerStyles }}
        value={country}
      />
      <RNPickerSelect
        placeholder={{
          label: "Select a job...",
          value: null
        }}
        items={categories}
        hideIcon
        onValueChange={value => onPickerChange(value, "category")}
        style={{ ...jobPickerStyles }}
        value={job}
      />
    </View>
  );
};

export default HomeHeader;
