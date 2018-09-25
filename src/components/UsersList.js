import React, { Component } from "react";
import { FlatList, Text, RefreshControl } from "react-native";

import UserCard from "./UserCard";
import Loader from "./Loader";

export default class UsersList extends Component {
    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        console.log("user card clicked");
    };
    _renderItem = ({ item, key }) => (
        <UserCard
            data={item}
            key={key}
            onPressItem={this._onPressItem}
        />
    );

    render() {
        const { isLoading, error, data, isRefreshing, _fetchUsers } = this.props;
        if (error) {
            return (<Text>{error}</Text>);
        }
        if (isLoading) {
            return (<Loader />);
        }
        return (
            <FlatList
                data={data}
                extraData={this.props}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={_fetchUsers}
                        enabled
                    />
                }
            />
        );
    }
}
