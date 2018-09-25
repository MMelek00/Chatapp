import { StyleSheet } from "react-native";
import colors from "../utils/colors";

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        flexDirection: "column",
    },
    pickersContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 5
    },
    usersContainer: {
        flex: 10
    },
    picker: {
        borderRadius: 50,
        height: 30,
    },
    jobPicker: {
        backgroundColor: colors.primary,
        flex: 4,
    },
    countryPicker: {
        backgroundColor: "gray",
        flex: 1,
    },
    pickerText: {
        color: "#fff"
    }
});

export default styles;
