import React from "react";
import { View } from "react-native";
import colors from "../utils/colors";
import styles from "../styles/indicators";
import ProgressCircleSnail from "react-native-progress/CircleSnail";

const Loader = () => {
    return (
        <View style={styles.loaderContainer} >
            <ProgressCircleSnail size={70} thickness={5} color={colors.base} />
        </View>
    );
};

export default Loader;
