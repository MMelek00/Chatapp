import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { FirebaseRef } from "../../utils/firebase";

class Report extends Component {

    static navigationOptions = {
        title: "REPORT CONTENT"
    };

    state = {
        message: ""
    }

    handleSubmit = () => {
        const { message } = this.state;
        if (message) {
            FirebaseRef.child("/reports").push({ message }).catch(err => console.log(err));
            this.props.navigation.navigate("Home");
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    value={this.state.message}
                    placeholder="Write your report on objectionable content or feedback..."
                    style={{
                        marginTop: 20,
                        marginBottom: 20,
                        padding: 30,
                        backgroundColor: "#fff",
                        height: 150
                    }}
                    multiline
                    returnKeyType="done"
                    underlineColorAndroid="transparent"
                    onChangeText={message => this.setState({ message })}
                />
                <Button
                    rounded
                    title="Send report"
                    onPress={() => this.handleSubmit()}
                    rightIcon={{
                        name: "send",
                        type: "material-community",
                        size: 20,
                        style: { paddingLeft: 10 }
                    }}
                    backgroundColor="#1C39A1"
                />
            </View>
        );
    }
}


export default Report;
