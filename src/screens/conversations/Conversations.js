import React, { Component } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";


import ConversationsList from "./ConversationsList";
import { getConversations, test } from "../../utils/firebase-fns";

class ConversationsScreen extends Component {
    static navigationOptions = {
        title: "CONVERSATIONS"
    }
    state = {
        data: [],
        loading: true
    };

    componentDidMount() {
        const { navigation } = this.props;
        navigation.addListener("didFocus", () => { this._fetchConversations(); });
    }

    _fetchConversations = () => {
        this.setState({ loading: true });
        getConversations(this.props.member.uid).then(data => {
            console.log(data);
            this.setState({ data, loading: false });
        }).catch(err => console.log(err));
    }

    render() {
        if (this.state.loading) {
            return (<ActivityIndicator />);
        }
        return (
            <ConversationsList
                data={this.state.data}
            />
        );
    }
}

export default connect(state => ({
    member: state.member || {},
}))(ConversationsScreen);
