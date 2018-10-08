import React from "react";
import UsersList from "../../components/users-list";
import { getFilteredUsers } from "../../utils/firebase-fns";

export default class Results extends React.Component {
    static navigationOptions = {
        title: "Results",
    };

    state = {
        data: [],
        isLoading: true,
        error: "",
    };

    componentWillMount = () => {
        const { navigation } = this.props;
        const filters = navigation.getParam("filters");

        getFilteredUsers(filters)
            .then(data => {
                this.setState({ data, isLoading: false });
            });
    };
    render() {
        return (
            <UsersList {...this.state} />
        );
    }
}
