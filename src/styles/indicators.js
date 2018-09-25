import { StyleSheet } from "react-native";
import colors from "../utils/colors";

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    refresherContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.positive
    }
});

export default styles;
