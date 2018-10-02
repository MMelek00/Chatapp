import React from "react";
import { Text } from "react-native";

const Availability = ({ availability }) => {
    const availabilityList = ["Freelancer", "Part Time", "Full Time"];
    if (!Array.isArray(availability) || !availability) {
        return (<Text>-</Text>);
    }
    return availability.map((value, i) => (<Text key={i}>{availabilityList[value]}{i + 1 !== availability.length && " - "}</Text>));
};

export default Availability;
