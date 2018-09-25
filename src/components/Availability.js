import React from "react";
import { Text } from "react-native";

const Availability = ({ availability }) => {
    if (!Array.isArray(availability) || !availability) {
        return (<Text>-</Text>);
    }
    return availability.map((value, i) => (<Text key={i}>{value}</Text>));
};

export default Availability;
