import React from "react";
import { Text } from "react-native";
import { View } from "native-base";

const Availability = ({ availability }) => {
    const availabilityList = ["Freelancer", "Part Time", "Full Time"];
    if (!Array.isArray(availability) || !availability) {
        return (<Text>-</Text>);
    }
    return (
        <View
            style={{ flexDirection: "column" }}
        >
            {availability.map((value, i) => (<Text key={i}>{availabilityList[value]}</Text>))}
        </View>
    );
};

export default Availability;
