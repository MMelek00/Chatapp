import React from "react";
import {
  Container,
  Item,
  Label,
  Input,
  Card,
  Form,
  Textarea
} from "native-base";
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Alert
} from "react-native";
import { Button, ButtonGroup } from "react-native-elements";
import { ImagePicker } from "expo";
import { connect } from "react-redux";
import { updateProfile } from "../../../actions/member";
import RNPickerSelect from "react-native-picker-select";
import { categories, WebOption } from "../../../utils/properties";
import colors from "../../../utils/colors";
import * as firebase from "firebase";
import Loader from "../../../components/Loader";
class EditProfile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "PROFILE",
      headerRight: (
        <Button
          block
          onPress={() => navigation.navigate("Company")}
          title="Skip"
          backgroundColor={colors.base}
        />
      )
    };
  };

  state = {
    index: 2,
    uid: this.props.member.uid,
    firstName: this.props.member.firstName || "",
    phoneNumber: this.props.member.phoneNumber || "",
    avatar:
      this.props.member.avatar ||
      "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
    availability: this.props.member.availability || "",
    experience: this.props.member.experience || "",
    country: this.props.member.country || "",
    city: this.props.member.city || "",
    description: this.props.member.description || "",
    isloading: false,
    category: "Design & Creative",
    job: this.props.member.job || "Mobile Development"
  };
  handleSubmit = async () => {
    this.setState({ isloading: true });
    const { onFormSubmit } = this.props;
    const { navigate } = this.props.navigation;
    onFormSubmit(this.state)
      .then(resp => {
        this.setState({ isloading: false });
        navigate("Company");
      })
      .catch(e => console.log(`Error: ${e}`));
  };
  onChooseImagePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true
    });

    if (!result.cancelled) {
      this.uploadImage(result.uri, this.state.uid)
        .then(() => {
          this.setState({ avatar: result.uri });
        })
        .catch(error => {
          Alert.alert(error);
        });
    }
  };
  updateIndex = index => {
    this.setState({ index });
  };
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child("images")
      .child(`${imageName}.jpg`);
    return ref.put(blob);
  };

  render() {
    if (this.state.isloading) {
      return <Loader />;
    }
    return (
      <Container>
        <ScrollView style={styles.container}>
          <TouchableOpacity
            onPress={() => this.onChooseImagePress()}
            style={{ alignSelf: "center" }}
          >
            <Image
              style={{ width: 150, height: 150, borderRadius: 100 }}
              source={{
                uri: this.state.avatar
              }}
            />
          </TouchableOpacity>

          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                value={this.state.firstName}
                onChangeText={firstName => this.setState({ firstName })}
              />
            </Item>

            <Item floatingLabel>
              <Label>Phone Number</Label>
              <Input
                value={this.state.phoneNumber}
                onChangeText={phoneNumber => this.setState({ phoneNumber })}
              />
            </Item>

            <Item floatingLabel>
              <Label>Country</Label>
              <Input
                value={this.state.country}
                onChangeText={country => this.setState({ country })}
              />
            </Item>
            <Item floatingLabel>
              <Label>City</Label>
              <Input
                value={this.state.city}
                onChangeText={city => this.setState({ city })}
              />
            </Item>
          </Form>
          <View style={{ paddingTop: 10 }}>
            <ButtonGroup
              selectedButtonStyle={{ backgroundColor: "#57A0FD" }}
              onPress={this.updateIndex}
              selectedIndex={this.state.index}
              buttons={["Freelancer", "Part Time", "Full Time"]}
              containerStyle={{ height: 45, width: "90%" }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 22,
              alignSelf: "center"
            }}
          >
            <Card style={{ width: "50%", height: 90 }}>
              <View style={{ paddingTop: 15 }}>
                <Text style={{ paddingLeft: 20 }}>Category</Text>
              </View>
              <View style={{ paddingLeft: 10 }}>
                <RNPickerSelect
                  placeholder={{
                    label: "Select a category...",
                    value: null
                  }}
                  hideIcon
                  items={categories}
                  onValueChange={value => {
                    this.setState({
                      category: value
                    });
                  }}
                  value={this.state.category}
                />
              </View>
            </Card>
            <Card style={{ width: "50%", height: 90 }}>
              <View style={{ paddingTop: 15 }}>
                <Text style={{ paddingLeft: 20 }}>Job</Text>
              </View>
              <View style={{ paddingLeft: 10 }}>
                <RNPickerSelect
                  placeholder={{
                    label: "Select a category...",
                    value: null
                  }}
                  hideIcon
                  items={WebOption}
                  onValueChange={value => {
                    this.setState({
                      job: value
                    });
                  }}
                  value={this.state.job}
                />
              </View>
            </Card>
          </View>

          <View style={{ paddingTop: 5, paddingHorizontal: 14 }}>
            <Textarea
              value={this.state.description}
              rowSpan={5}
              bordered
              placeholder="Description"
              placeholderTextColor="white"
              returnKeyType="go"
              style={{
                padding: 10,
                backgroundColor: "gray"
              }}
              onChangeText={description => this.setState({ description })}
            />
          </View>
          <View style={{ width: "30%", alignSelf: "flex-end" }}>
            <Button
              block
              onPress={this.handleSubmit}
              title="Next"
              backgroundColor={colors.base}
            />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: "#ecf0f1"
  },
  textInput: {
    height: 45,
    width: "90%",
    borderRadius: 8,
    color: "black",
    borderWidth: 0,
    padding: 15
  },
  Iteminput: {
    height: 50,
    width: "90%",
    backgroundColor: "gray",
    borderColor: "#a39e9e",
    borderRadius: 8,
    borderWidth: 0,
    padding: 12
  }
});

const mapStateToProps = state => ({
  member: state.member || {}
});
const mapDispatchToProps = {
  onFormSubmit: updateProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
