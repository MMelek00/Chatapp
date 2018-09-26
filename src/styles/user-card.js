import { StyleSheet } from "react-native";

import colors from "../utils/colors";
import { normalize } from "../utils/fonts";

const styles = StyleSheet.create({
    text: {
        fontSize: normalize(10),
        fontFamily: "Roboto_medium",
        color: "pink",
        paddingLeft: 5
    },
    text2: {
        fontSize: normalize(13),
        fontFamily: "Roboto_medium",
        paddingLeft: 5
    },
    footer: {
        paddingTop: 0,
        borderRadius: 10,
    },
    span: {
        flex: 1,
        borderBottomWidth: 0,
    },
    item: {
        borderRadius: 10,
    },
    card: {
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10
    },
    sendButton: {
        backgroundColor: colors.base
    }
});

export default styles;
