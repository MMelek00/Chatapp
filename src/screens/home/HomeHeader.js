import React, { Component } from "react";
import { View } from "react-native";
import { Picker, Icon } from "native-base";

import { categories, countries } from "../../utils/properties";
import styles from "../../styles/home";

const HomeHeader = ({ country, job, onPickerChange }) => {
    return (
        <View style={styles.pickersContainer} >
            <Picker
                selectedValue={country}
                onValueChange={(value) => onPickerChange(value, "country")}
                style={[styles.picker, styles.countryPicker]}
                textStyle={styles.pickerText}
                iosIcon={<Icon name="ios-arrow-down-outline" style={{ color: "#fff" }} />}
            >
                {
                    countries.map((value, i) =>
                        (<Picker.Item label={value} value={value} key={i} />)
                    )
                }
            </Picker>
            <Picker
                selectedValue={job}
                onValueChange={(value) => onPickerChange(value, "job")}
                style={[styles.picker, styles.jobPicker]}
                textStyle={styles.pickerText}
                iosIcon={<Icon name="ios-arrow-down-outline" style={{ color: "#fff" }} />}
            >
                {
                    categories.map((value, i) =>
                        (<Picker.Item label={value} value={value} key={i} />)
                    )
                }
            </Picker>
        </View>
    );
};


export default HomeHeader;
