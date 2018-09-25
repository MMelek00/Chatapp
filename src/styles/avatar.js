import { StyleSheet } from "react-native";
import colors from "../utils/colors";

const styles = StyleSheet.create({
    badge: {
        position: "absolute",
        bottom: 0,
        height: 25,
        width: 25,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    }
});

export default styles;
