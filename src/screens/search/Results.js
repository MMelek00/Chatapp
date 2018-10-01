import React from "react";
import UsersList from "../../components/UsersList";
import { getUsers } from "../../utils/firebase-fns";

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
        getUsers()
            .then(data => {
                this.setState({ data });
            })

            .catch(err => console.log(err));
    };
    render() {
        return (
            <UsersList {...this.state} />
        );
    }
}
