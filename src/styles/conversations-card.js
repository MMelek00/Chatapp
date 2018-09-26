import { StyleSheet } from "react-native";

import { normalize } from "../utils/fonts";

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10
    },
    item: {
        borderRadius: 10,
    },
    text: {
        fontSize: normalize(12),
        fontFamily: "Roboto_medium",
        color: "pink",
        paddingLeft: 5
    },
    text2: {
        fontSize: normalize(15),
        fontFamily: "Roboto_medium",
        paddingLeft: 5
    },
    online: {
        marginTop: 20
    },
});

export default styles;
