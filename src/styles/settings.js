import { StyleSheet } from "react-native";
import colors from "../utils/colors";

import { normalize } from "../utils/fonts";

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: colors.chrome,
        borderColor: colors.border,
        borderTopWidth: 1,
    },
    control: {
        borderColor: colors.border,
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },

    text: {
        color: colors.grey,
        fontSize: normalize(14),
    },
    logout: {
        color: colors.negative,
        fontSize: normalize(14),
    },
    controlTitle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    leftIcon: {
        margin: 0, marginRight: 5, borderRadius: 5, height: 30, width: 30,
    },
    inputCard: {
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        paddingBottom: 15,
        borderRadius: 10,
        shadowColor: "rgba(223, 223, 223, 1)",
        shadowOffset: {
            width: -2,
            height: 2
        },
        shadowOpacity: 99,
        shadowRadius: 8
    },
    button: {
        backgroundColor: colors.base,
        marginTop: 20,
        borderRadius: 50
    }
});

export default styles;
