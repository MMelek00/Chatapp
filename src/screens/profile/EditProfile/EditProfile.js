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
  Picker,
  Text,
  ScrollView,
  Alert
} from "react-native";
import { Button, ButtonGroup } from "react-native-elements";
import { ImagePicker } from "expo";
import * as firebase from "firebase";
import { connect } from "react-redux";
import CategoryOption from "../../../components/category";
class EditProfile extends React.Component {
  static navigationOptions = {
    title: "PROFILE"
  };
  constructor(props) {
    super(props);
    this.state = {
      availability: this.props.member.availability,
      name: this.props.member.firstName,
      Number: this.props.member.phoneNumber,
      AvatarLink: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      isloading: false,
      Years: this.props.member.experience,
      Country: this.props.member.country,
      City: this.props.member.city,
      Description: this.props.member.description
    };
  }
  onChooseImagePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true
    });

    if (!result.cancelled) {
      this.uploadImage(result.uri, this.state.name)
        .then(() => {
          this.setState({ AvatarLink: result.uri });
        })
        .catch(error => {
          Alert.alert(error);
        });
    }
  };
  updateIndex = availability => {
    this.setState({ availability });
  };
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("images/" + imageName);
    return ref.put(blob);
  };
  _pressHandler = () => {
    const user = firebase.auth().currentUser;
    const {
      name,
      Number,
      AvatarLink,
      Years,
      Country,
      City,
      availability,
      Description
    } = this.state;
    firebase
      .database()
      .ref(`users/${user.uid}`)
      .update({
        name,
        Number,
        AvatarLink,
        Years,
        Country,
        City,
        availability,
        Description
      })
      .then(this.props.navigation.navigate("Company"));
  };

  render() {
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
                uri: this.state.AvatarLink
              }}
            />
          </TouchableOpacity>

          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
              />
            </Item>

            <Item floatingLabel>
              <Label>Phone Number</Label>
              <Input
                value={this.state.Number}
                onChangeText={Number => this.setState({ Number })}
              />
            </Item>

            <Item floatingLabel>
              <Label>Country</Label>
              <Input
                value={this.state.Country}
                onChangeText={Country => this.setState({ Country })}
              />
            </Item>
            <Item floatingLabel>
              <Label>City</Label>
              <Input
                value={this.state.City}
                onChangeText={City => this.setState({ City })}
              />
            </Item>
          </Form>
          <View style={{ paddingTop: 10 }}>
            <ButtonGroup
              selectedButtonStyle={{ backgroundColor: "#57A0FD" }}
              onPress={this.updateIndex}
              selectedIndex={this.state.availability}
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
                <Picker
                  selectedValue={this.state.Category}
                  style={{ height: 50, width: "100%" }}
                  itemStyle={{ color: "blue" }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ Category: itemValue })
                  }
                >
                  <Picker.Item label="Mobile" value="Mobile" />
                  <Picker.Item label="2 years" value="2" />
                  <Picker.Item label="+3 years" value="3" />
                  <Picker.Item label="+5 years" value="5" />
                </Picker>
              </View>
            </Card>
            <Card style={{ width: "50%", height: 90 }}>
              <View style={{ paddingTop: 15 }}>
                <Text style={{ paddingLeft: 20 }}>Job</Text>
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Picker
                  selectedValue={this.state.Job}
                  style={{ height: 50, width: "100%" }}
                  itemStyle={{ color: "blue" }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ Job: itemValue })
                  }
                >
                  <Picker.Item label="Design" value="Design" />
                  <Picker.Item label="2 years" value="2" />
                  <Picker.Item label="+3 years" value="3" />
                  <Picker.Item label="+5 years" value="5" />
                </Picker>
              </View>
            </Card>
          </View>

          <View style={{ paddingTop: 5, paddingHorizontal: 14 }}>
            <Textarea
              value={this.state.Description}
              rowSpan={5}
              bordered
              placeholder="Description"
              placeholderTextColor="white"
              returnKeyType="go"
              style={{
                padding: 10,
                backgroundColor: "gray"
              }}
              onChangeText={Description => this.setState({ Description })}
            />
          </View>
        </ScrollView>
        <View style={{ width: "30%", alignSelf: "flex-end" }}>
          <Button
            block
            onPress={() => this._pressHandler()}
            title="Next"
            backgroundColor="#1C39A1"
          />
        </View>
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

export default connect(mapStateToProps)(EditProfile);
