import React from "react";
import { connect } from "react-redux";

import UsersList from "../../components/users-list";
import { getFilteredUsers } from "../../utils/firebase-fns";

class Results extends React.Component {
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
        const { member } = this.props;
        getFilteredUsers(filters)
            .then(res => {
                const data = res.filter(user => {
                    let index = (member.blockList || []).indexOf(user.id);
                    return (index === -1 && user.id !== member.uid);
                });
                this.setState({ data, isLoading: false });
            });
    };
    render() {
        return (
            <UsersList {...this.state} />
        );
    }
}

export default connect(state => ({
    member: state.member || {}
}))(Results);
