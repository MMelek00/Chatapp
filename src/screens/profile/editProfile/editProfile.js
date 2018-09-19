import React from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
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
  ScrollView
} from "react-native";
import { Icon, Button, ButtonGroup } from "react-native-elements";
import { ImagePicker } from "expo";
import * as firebase from "firebase";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      name: "User Name ",
      Number: "",
      AvatarLink: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      isloading: false,
      Years: 1,
      Country: "Tunisia",
      City: "",
      Description: ""
    };
  }
  updateIndex = index => {
    this.setState({ index });
  };
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });
    if (!result.cancelled) {
      this.setState({ AvatarLink: result.uri });
      const sessionId = new Date().getTime();
      const snapshot = await firebase
        .storage()
        .ref()
        .child("images")
        .child(`${sessionId}`)
        .putString(result.base64, "base64");

      console.log(snapshot);
    }
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name="arrow-back"
              color="white"
              onPress={() => this.props.navigation.navigate("Main")}
            />
          </Left>
          <Body>
            <Title>EditProfile</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView style={styles.container}>
          <TouchableOpacity
            onPress={() => this._pickImage()}
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
              <Input onChangeText={name => this.setState({ name })} />
            </Item>

            <Item floatingLabel>
              <Label>Phone Number</Label>
              <Input onChangeText={Number => this.setState({ Number })} />
            </Item>

            <Item floatingLabel>
              <Label>Country</Label>
              <Input onChangeText={Country => this.setState({ Country })} />
            </Item>
            <Item floatingLabel>
              <Label>City</Label>
              <Input onChangeText={City => this.setState({ City })} />
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
            onPress={() => this.props.navigation.navigate("Company")}
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
export default EditProfile;
