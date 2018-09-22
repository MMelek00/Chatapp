import React, { Component } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { NavigationEvents } from "react-navigation";


import ConversationCard from "./ConversationCard";
import { getConversations } from "../../utils/firebase-fns";

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

    _keyExtractor = (item, index) => item.conversationId;

    _renderItem = ({ item, key }) => (
        <ConversationCard
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
