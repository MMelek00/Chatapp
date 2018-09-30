import React, { Component } from "react";
import { FlatList, Text, RefreshControl } from "react-native";

import UserCard from "./UserCard";
import UserCardSelect from "./UserCardSelect";
import Loader from "./Loader";

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
