import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1.2,
        justifyContent: "flex-start",
        backgroundColor: "#16a085",
        padding: 20,
        paddingTop: 100
    },
    input: {
        height: 40,
        marginBottom: 10,
        backgroundColor: "rgba(255,255,255,0.2)",
        color: "#fff",
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: "rgba(255,255,255,0.2)",
        paddingVertical: 15
    },
    buttonText: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "700"
    }
});

export default styles;
