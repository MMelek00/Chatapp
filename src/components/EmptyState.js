import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/indicators";

const EmptyState = () => {
    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
                No users found.
            </Text>
        </View>
    );
};

export default EmptyState;
