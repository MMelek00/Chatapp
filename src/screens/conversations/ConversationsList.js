import React, { Component } from "react";
import { FlatList } from "react-native";
import ConversationCard from "./ConversationCard";

export default class ConversationsList extends Component {
    _keyExtractor = (item, index) => item.conversationId;

    _onPressItem = (id: string) => {
        console.log("user card clicked");
    };
    _renderItem = ({ item, key }) => (
        <ConversationCard
            data={item}
            key={key}
            onPressItem={this._onPressItem}
        />
    );

    render() {
        return (
            <FlatList
                removeClippedSubviews={true}
                data={this.props.data}
                extraData={this.props}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}
