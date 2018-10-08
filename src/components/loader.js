import React from "react";
import { View, ActivityIndicator } from "react-native";
import colors from "../utils/colors";
import styles from "../styles/indicators";

const Loader = () => {
    return (
        <View style={styles.loaderContainer} >
            <ActivityIndicator size="large" color={colors.base} />
        </View>
    );
};

export default Loader;
