import React from "react";
import { Card, Textarea } from "native-base";
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Alert,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import { Button, Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import * as firebase from "firebase";

import styles, { pickerSelectStyles } from "../../../styles/editProfile";
import Avatar from "../../../components/Avatar";
import ButtonGroup from "../../../components/ButtonGroup";
import { ImagePicker } from "expo";
import { updateProfile } from "../../../actions/member";
import { categories, WebOption } from "../../../utils/properties";
import colors from "../../../utils/colors";
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
    uid: this.props.member.uid,
    firstName: this.props.member.firstName || "",
    phoneNumber: this.props.member.phoneNumber || "",
    avatar: this.props.member.avatar || "",
    availability: this.props.member.availability || [0],
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
  updateIndex = availability => {
    this.setState({ availability });
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
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => this.onChooseImagePress()}
          style={{ alignSelf: "center" }}
        >
          <Avatar user={this.props.member} width={250} height={250} />
        </TouchableOpacity>

        <View>
          <View style={[styles.inputContainer, styles.shadow]}>
            <Icon name="user" type="font-awesome" color="white" />
            <TextInput
              placeholder="Name"
              placeholderTextColor="#fff"
              style={styles.textInputt}
              value={this.state.firstName}
              autoCorrect={false}
              multiline={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={firstName => this.setState({ firstName })}
            />
            <Icon name="edit" type="materialIcons" color="black" />
          </View>

          <View style={[styles.inputContainer, styles.shadow]}>
            <Icon name="phone" type="font-awesome" color="white" />
            <TextInput
              placeholder="phoneNumber"
              placeholderTextColor="#fff"
              style={styles.textInputt}
              value={this.state.phoneNumber}
              autoCorrect={false}
              multiline={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
            />
            <Icon name="edit" type="materialIcons" color="black" />
          </View>

          <View style={[styles.inputContainer, styles.shadow]}>
            <Icon name="location-pin" type="entypo" color="white" />
            <TextInput
              placeholder="country"
              placeholderTextColor="#fff"
              style={styles.textInputt}
              value={this.state.country}
              autoCorrect={false}
              multiline={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={country => this.setState({ country })}
            />
            <Icon name="edit" type="materialIcons" color="black" />
          </View>

          <View style={[styles.inputContainer, styles.shadow]}>
            <Icon name="location-city" type="materialIcons" color="white" />
            <TextInput
              placeholder="city"
              placeholderTextColor="#fff"
              style={styles.textInputt}
              value={this.state.city}
              autoCorrect={false}
              multiline={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={city => this.setState({ city })}
            />
            <Icon name="edit" type="materialIcons" color="black" />
          </View>
        </View>

        <View style={{ paddingTop: 10 }}>
          <ButtonGroup
            selectMultiple
            onPress={this.updateIndex}
            selectedIndexes={this.state.availability}
            buttons={["Freelancer", "Part Time", "Full Time"]}
          />
        </View>

        <Card>
          <Text style={styles.title}>Category</Text>
          <View style={{ paddingLeft: 10 }}>
            <RNPickerSelect
              placeholder={{
                label: "Select a category...",
                value: null
              }}
              hideIcon
              items={categories}
              style={{ ...pickerSelectStyles }}
              onValueChange={value => {
                this.setState({
                  category: value
                });
              }}
              value={this.state.category}
            />
          </View>
        </Card>
        <Card>
          <Text style={styles.title}>Job</Text>
          <View style={{ paddingLeft: 10 }}>
            <RNPickerSelect
              placeholder={{
                label: "Select a category...",
                value: null
              }}
              hideIcon
              items={WebOption}
              style={{ ...pickerSelectStyles }}
              onValueChange={value => {
                this.setState({
                  job: value
                });
              }}
              value={this.state.job}
            />
          </View>
        </Card>
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
        <Button
          rounded
          block
          onPress={this.handleSubmit}
          title="Next"
          backgroundColor={colors.base}
          containerViewStyle={styles.button}
        />
      </ScrollView>
    );
  }
}

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
