import React, { Component } from "react";
import {
    View,
    Card,
    CardItem,
    Text,
    Right,
    Left,
} from "native-base";
import { withNavigation } from "react-navigation";
import { TouchableHighlight } from "react-native";
import { CheckBox } from "react-native-elements";
import Avatar from "./avatar";

import styles from "../styles/user-card";
import { truncate } from "../utils/helpers";

class UserCard extends Component {
    state = {
        isSelected: false
    }

    onCheckboxChange = () => {
        this.props.addUserToList(this.props.data.id);
        this.setState({ isSelected: !this.state.isSelected });
    }

    render() {
        const { data, navigation } = this.props;
        return (
            <Card style={styles.card}>
                <CardItem style={styles.item}>
                    <Left>
                        <TouchableHighlight
                            onPress={() => navigation.navigate("Profile", { data })}
                        >
                            <Avatar user={data} />
                        </TouchableHighlight>
                        <View>
                            <Text style={styles.text2}>{truncate(data.firstName, 15)}</Text>
                            <Text style={styles.text}>{truncate(data.email, 18)}</Text>
                            <Text style={styles.text2}>{truncate(data.job, 15)}</Text>
                        </View>
                    </Left>
                    <Right>
                        <CheckBox
                            checked={this.state.isSelected}
                            onPress={this.onCheckboxChange}
                        />
                    </Right>
                </CardItem>
            </Card>
        );

    }
}


export default withNavigation(UserCard);
