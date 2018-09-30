
import React from "react";
import {
    View,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
} from "react-native";
import { Text } from "react-native-elements";

import colors from "../utils/colors";
import { normalize } from "../utils/fonts";

const ButtonGroup = props => {
    const {
        buttons,
        onPress,
        selectedIndex,
        selectedIndexes,
        selectMultiple,
        containerStyle,
        innerBorderStyle,
        lastBorderStyle,
        buttonStyle,
        textStyle,
        selectedTextStyle,
        selectedButtonStyle,
        underlayColor,
        activeOpacity,
        onHideUnderlay,
        onShowUnderlay,
        setOpacityTo,
        containerBorderRadius,
        disableSelected,
        ...attributes
    } = props;
    const Component = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;
    return (
        <View
            {...attributes}
            style={[styles.container, containerStyle && containerStyle]}
        >
            {buttons.map((button, i) => {
                const isSelected = selectedIndex === i || selectedIndexes.includes(i);

                return (
                    <Component
                        activeOpacity={activeOpacity}
                        setOpacityTo={setOpacityTo}
                        onHideUnderlay={onHideUnderlay}
                        onShowUnderlay={onShowUnderlay}
                        underlayColor={underlayColor || colors.primary}
                        disabled={disableSelected && isSelected ? true : false}
                        onPress={() => {
                            if (selectMultiple) {
                                if (selectedIndexes.includes(i)) {
                                    onPress(selectedIndexes.filter(index => index !== i));
                                } else {
                                    onPress([...selectedIndexes, i]);
                                }
                            } else {
                                onPress(i);
                            }
                        }}
                        key={i}
                        style={[
                            styles.button,
                            // FIXME: This is a workaround to the borderColor and borderRadius bug
                            // react-native ref: https://github.com/facebook/react-native/issues/8236
                            i < buttons.length - 1 && {
                                borderRightWidth:
                                    i === 0
                                        ? 0
                                        : (innerBorderStyle && innerBorderStyle.width) || 1,
                                borderRightColor:
                                    (innerBorderStyle && innerBorderStyle.color) || colors.primary,
                            },
                            i === 1 && {
                                borderLeftWidth:
                                    (innerBorderStyle && innerBorderStyle.width) || 1,
                                borderLeftColor:
                                    (innerBorderStyle && innerBorderStyle.color) || colors.primary,
                            },
                            i === buttons.length - 1 && {
                                ...lastBorderStyle,
                                borderTopRightRadius: containerBorderRadius,
                                borderBottomRightRadius: containerBorderRadius,
                            },
                            i === 0 && {
                                borderTopLeftRadius: containerBorderRadius,
                                borderBottomLeftRadius: containerBorderRadius,
                            },
                        ]}
                    >
                        <View
                            style={[
                                styles.textContainer,
                                buttonStyle && buttonStyle,
                                isSelected && {
                                    backgroundColor: colors.primary,
                                },
                                isSelected && selectedButtonStyle && selectedButtonStyle,
                            ]}
                        >
                            {button.element ? (
                                <button.element />
                            ) : (
                                    <Text
                                        style={[
                                            styles.buttonText,
                                            textStyle && textStyle,
                                            isSelected && { color: "#fff" },
                                            isSelected && selectedTextStyle,
                                        ]}
                                    >
                                        {button}
                                    </Text>
                                )}
                        </View>
                    </Component>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        marginBottom: 5,
        marginTop: 5,
        borderWidth: 0,
        flexDirection: "row",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
        height: 40,
    },
    buttonText: {
        fontSize: normalize(13),
        color: colors.grey,
        ...Platform.select({
            ios: {
                fontWeight: "500",
            },
        }),
    },
});



export default ButtonGroup;
