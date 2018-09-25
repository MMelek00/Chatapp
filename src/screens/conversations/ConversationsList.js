import React, { Component } from "react";
import { FlatList, RefreshControl } from "react-native";

import ConversationCard from "./ConversationCard";

import colors from "../../utils/colors";

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
