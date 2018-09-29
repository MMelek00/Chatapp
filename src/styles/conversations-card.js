import { StyleSheet } from "react-native";

import { normalize, DEFAULT_FONT } from "../utils/fonts";
import colors from "../utils/colors";

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10
    },
    item: {
        borderRadius: 10
    },
    name: {
        fontSize: normalize(12),
        color: colors.base,
        fontWeight: "500",
        fontFamily: DEFAULT_FONT,
        paddingLeft: 5
    },
    message: {
        fontSize: normalize(13),
        fontFamily: DEFAULT_FONT,
        color: colors.grey,
        paddingLeft: 5
    },
    online: {
        marginTop: 20
    }
});

export default styles;
