import { StyleSheet } from "react-native";
import colors from "../utils/colors";
import { normalize } from "../utils/fonts";

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    errorContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    errorText: {
        fontSize: normalize(16),
    }
});

export default styles;
