import React, { Component } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { NavigationEvents } from "react-navigation";


import MessageCard from "../component/messageCard";
import { getConversations } from "../../lib/firebase-fn";

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
            this.setState({ data, loading: false });
            console.log(this.state);
        }).catch(err => console.log(err));
    }

    _keyExtractor = (item, index) => item.conversationId;

    _renderItem = ({ item, key }) => (
        <MessageCard
            data={item}
            key={key}
        />
    );

    render() {
        if (this.state.loading) {
            return (<ActivityIndicator />);
        }
        return (
            <FlatList
                extraData={this.state}
                data={this.state.data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

export default connect(state => ({
    member: state.member || {},
}))(ConversationsScreen);