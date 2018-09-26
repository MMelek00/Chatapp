import React from "react";
import { View, Content, Text } from "native-base";
import HistoryCard from "../Components/HistoryCard";
import { FlatList } from "react-native";
import { gethistory } from "../../../utils/firebase-fns";
import { connect } from "react-redux";
import { Loader } from "../../../components/Loader";
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: "",
      id: props.id
    };
  }
  componentDidMount() {
    this._fetchhistory(this.state.id);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id
    });
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item, key }) => <HistoryCard data={item} key={key} />;
  _fetchhistory = id => {
    gethistory(id)
      .then(data => {
        this.setState({ data, isLoading: false });
      })
      .catch(error => {
        this.setState({ isLoading: false, error });
      });
  };
  render() {
    const { isLoading, error } = this.props;
    if (error) {
      return <Text>{error}</Text>;
    }
    if (isLoading) {
      return <Loader />;
    }
    if (this.state.data.length === 0) {
      return (
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 17 }}>no job history recorded yet.</Text>
        </View>
      );
    }
    return (
      <Content style={{ paddingTop: 10 }}>
        <FlatList
          data={this.state.data}
          extraData={this.props}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </Content>
    );
  }
}
const mapStateToProps = state => ({
  member: state.member || {}
});
export default connect(mapStateToProps)(History);
