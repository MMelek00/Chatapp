import { StyleSheet } from "react-native";
import colors from "../utils/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    indicator: {
        height: 15,
        width: 15,
        borderRadius: 50,
        backgroundColor: colors.secondary,
        borderWidth: 3,
        borderColor: colors.base,
    },
    text: {
        color: colors.secondary,
        fontWeight: "bold",
        marginLeft: 10
    }
});

export default styles;
