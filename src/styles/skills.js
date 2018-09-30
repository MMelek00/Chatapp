import { StyleSheet } from "react-native";

import { normalize } from "../utils/fonts";
import colors from "../utils/colors";


const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    rateText: {
        fontSize: normalize(14),
        fontWeight: "500",
        paddingVertical: 5,
        color: colors.base,
    },
    card: {
        paddingHorizontal: 22,
        paddingVertical: 10,
        backgroundColor: "#fff",
        marginVertical: 5,
        borderRadius: 8,
        shadowColor: "#e0e0e0",
        shadowOffset: {
            width: -2,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    button: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 10
    },
    skillItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: colors.border
    },
    skillTitle: {
        color: colors.grey,
        fontSize: normalize(14),
        marginBottom: 10,
        fontWeight: "500",
        padding: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});


export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: normalize(14),
        fontWeight: "500",
        paddingVertical: 5,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: "white",
        color: colors.base,
    }
});


export default styles;
