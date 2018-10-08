import React, { Component } from "react";
import { FlatList, Text, RefreshControl } from "react-native";

import UserCard from "./user-card";
import UserCardSelect from "./user-card-select";
import Loader from "./loader";
import EmptyState from "./empty-state";

export default class UsersList extends Component {
    _keyExtractor = (item, index) => item.id;

    _renderItem = ({ item, key }) => {
        if (this.props.addUserToList) {
            return (
                <UserCardSelect
                    data={item}
                    key={key}
                    addUserToList={this.props.addUserToList}
                />
            );
        }
        return (
            <UserCard
                data={item}
                key={key}
            />
        );
    };

    render() {
        const { isLoading, error, data, isRefreshing, _fetchUsers } = this.props;
        if (error) {
            return (<Text>{error}</Text>);
        }
        if (isLoading) {
            return (<Loader />);
        }
        if (data.length === 0) {
            return (<EmptyState />);
        }
        return (
            <FlatList
                data={data}
                extraData={this.props}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                refreshControl={
                    isRefreshing === undefined ?
                        undefined
                        :
                        (
                            <RefreshControl
                                refreshing={isRefreshing}
                                onRefresh={_fetchUsers}
                                enabled
                            />
                        )
                }
            />
        );
    }
}
