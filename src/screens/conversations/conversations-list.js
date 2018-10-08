import React, { Component } from "react";
import { FlatList, RefreshControl } from "react-native";

import ConversationCard from "./conversation-card";

import colors from "../../utils/colors";

export default class ConversationsList extends Component {
    _keyExtractor = (item, index) => item.conversationId;

    _renderItem = ({ item, key }) => (
        <ConversationCard
            data={item}
            key={key}
        />
    );

    render() {
        const { data, isRefreshing, onRefresh } = this.props;
        return (
            <FlatList
                removeClippedSubviews={true}
                data={data}
                extraData={this.props}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={onRefresh}
                        tintColor={colors.base}
                    />
                }
            />
        );
    }
}
