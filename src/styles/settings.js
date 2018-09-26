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
        color: colors.body,
        fontSize: normalize(16),
    },
    logout: {
        color: colors.negative,
        fontSize: normalize(16),
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
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    button: {
        backgroundColor: colors.base,
        marginTop: 20,
        borderRadius: 50
    }
});

export default styles;
