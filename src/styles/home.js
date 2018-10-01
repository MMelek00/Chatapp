import { StyleSheet, Dimensions } from "react-native";
import colors from "../utils/colors";
import { normalize } from "../utils/fonts";
const deviceWidth = Dimensions.get("window").width;

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

export const jobPickerStyles = StyleSheet.create({
    inputIOS: {
        fontSize: normalize(16),
        fontWeight: "500",
        padding: 10,
        borderWidth: 0,
        borderRadius: 50,
        backgroundColor: colors.primary,
        color: "#fff",
        width: deviceWidth / 2,
        textAlign: "center",
    },
    viewContainer: {
        justifyContent: "center",
        alignItems: "center",
    }
});

export const countryPickerStyles = StyleSheet.create({
    inputIOS: {
        fontSize: normalize(16),
        fontWeight: "500",
        padding: 10,
        borderWidth: 0,
        borderRadius: 50,
        backgroundColor: colors.grey,
        color: "#fff",
        width: deviceWidth / 2.5,
        textAlign: "center"
    },
    viewContainer: {
        justifyContent: "center",
        alignItems: "center",
    }
});

export default styles;
