import React, { Component } from "react";
import { View, Text } from "react-native";
import { Item, Button as NBButton, Icon as NBIcon, Text as NBText } from "native-base";
import { Slider } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";

import { skills } from "../utils/properties";
import styles, { pickerSelectStyles } from "../styles/skills";
import colors from "../utils/colors";

class SkillAdd extends Component {
    state = {
        name: null,
        rate: 50,
    }

    handleSubmit = () => {
        const { name, rate } = this.state;
        if (name && rate !== 0) {
            this.props.addSkillHandler({ name, rate });
            this.setState({ name: null, rate: 50 });
        }
    }
    handlePickerChange = (value) => {
        this.setState({
            name: value,
        });
    }

    handleSliderChange = rate => this.setState({ rate: ~~(rate * 100) })

    render() {
        return (
            <View style={styles.card}>
                <View>
                    <RNPickerSelect
                        placeholder={{
                            label: "Select a skill...",
                            value: null,
                        }}
                        items={skills}
                        onValueChange={this.handlePickerChange}
                        value={this.state.name}
                        style={{ ...pickerSelectStyles }}
                    />
                    <Text style={styles.rateText}>Rate: {this.state.rate}</Text>
                </View>
                <View>
                    <Slider
                        value={this.state.rate / 100}
                        thumbTintColor={colors.primary}
                        onValueChange={this.handleSliderChange} />
                </View>
                <NBButton full iconLeft transparent onPress={this.handleSubmit}>
                    <NBIcon type="Feather" name="plus-circle" color={colors.base} />
                    <NBText>Add skill</NBText>
                </NBButton>
            </View>
        );
    }
}

export default SkillAdd;
