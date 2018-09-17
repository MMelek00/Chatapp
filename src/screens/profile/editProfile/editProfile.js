import React from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Item,
  Card
} from "native-base";
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  TextInput,
  Picker,
  Text,
  ScrollView
} from "react-native";
import { Icon, Button } from "react-native-elements";
import { ImagePicker } from "expo";
import * as firebase from "firebase";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "User Name ",
      AvatarLink: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      isloading: false,
      Years: 1
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
      console.log(result.base64);
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
          <View
            style={{
              flexDirection: "row",
              padding: 10
            }}
          >
            <Item style={styles.Iteminput}>
              <Icon name="user" type="font-awesome" color="white" />
              <TextInput
                placeholder="Name"
                placeholderTextColor="white"
                style={styles.textInput}
                autoCorrect={false}
                multiline={false}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                onChangeText={name => this.setState({ name })}
              />
            </Item>
            <Item style={styles.Iteminput}>
              <Icon name="phone" type="font-awesome" color="white" />
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor="white"
                ref={input => (this.phonenumber = input)}
                returnKeyType="go"
                keyboardType="numeric"
                style={styles.textInput}
                autoCorrect={false}
                multiline={false}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                onChangeText={phonenumber => this.setState({ phonenumber })}
              />
            </Item>
          </View>
          <Card style={{ width: "90%", height: 90, alignSelf: "center" }}>
            <Item style={{ paddingTop: 10, paddingLeft: 15 }}>
              <Icon name="chain" type="font-awesome" color="gray" />
              <Text style={{ paddingLeft: 20 }}>Years Experience</Text>
            </Item>
            <View style={{ paddingLeft: 10 }}>
              <Picker
                selectedValue={this.state.Years}
                style={{ height: 50, width: "50%" }}
                itemStyle={{ color: "blue" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ Years: itemValue })
                }
              >
                <Picker.Item label="1 year" value="1" />
                <Picker.Item label="2 years" value="2" />
                <Picker.Item label="+3 years" value="3" />
                <Picker.Item label="+5 years" value="5" />
              </Picker>
            </View>
          </Card>
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
          <TextInput
            placeholder="Description"
            placeholderTextColor="white"
            returnKeyType="go"
            style={{
              padding: 5,
              paddingLeft: 10,
              borderWidth: 0.5,
              width: "90%",
              color: "black",
              backgroundColor: "gray",
              borderRadius: 8,
              height: 150,
              alignSelf: "center"
            }}
            autoCorrect={false}
            multiline={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
          />
        </ScrollView>
        <View style={{ width: "30%", alignSelf: "flex-end" }}>
          <Button
            block
            onPress={() => console.log(this.state.index)}
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
    // alignItems: "center",
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
    width: "50%",
    backgroundColor: "gray",
    borderColor: "#a39e9e",
    borderRadius: 8,
    borderWidth: 0,
    padding: 12
  }
});
export default EditProfile;
