import React, { Component } from "react";
import { FlatList } from "react-native";
import UserCard from "./UserCard";

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
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}
