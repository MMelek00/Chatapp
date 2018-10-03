import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";
import { ImagePicker,Permissions } from "expo";
import { connect } from "react-redux";
import { Button, Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import * as firebase from "firebase";

import Avatar from "../../../components/Avatar";
import ButtonGroup from "../../../components/ButtonGroup";
import { updateProfile } from "../../../actions/member";
import { Imageurl } from "../../../utils/firebase-fns";
import { categories, WebOption, experience } from "../../../utils/properties";
import Loader from "../../../components/Loader";

import colors from "../../../utils/colors";
import styles, { pickerSelectStyles } from "../../../styles/editProfile";

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
    isuploading: false,
    category: this.props.member.category || "",
    job: this.props.member.job || ""
  };
  handleSubmit = async () => {
    this.setState({ isloading: true });
    const { onFormSubmit } = this.props;
    const { navigate } = this.props.navigation;
    onFormSubmit(this.state)
      .then(resp => {
        this.setState({ isloading: false });
        navigate("Company");
      });
  };
  onChooseImagePress = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true
      });
      this.setState({ isuploading: true });
      if (!result.cancelled) {
        await this.uploadImage(result.uri, this.state.uid);
        const url = await Imageurl(this.state.uid);
      this.setState({ avatar: url });
      this.setState({ isuploading: false });
    }
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
      <KeyboardAvoidingView behavior="position">
        <TouchableOpacity
          onPress={() => this.onChooseImagePress()}
          style={{ alignSelf: "center" }}
        >
          {this.state.isuploading ? (
            <ActivityIndicator />
          ) : (
            <Avatar user={{ ...this.state }} xlarge withIcon />
          )}
        </TouchableOpacity>

          <Text style={styles.title}>First name</Text>

          <View style={styles.inputContainer}>
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
            <Icon name="edit" type="materialIcons" color={colors.darkGrey} />
          </View>

          <Text style={styles.title}>Phone number</Text>

          <View style={styles.inputContainer}>
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
            <Icon name="edit" type="materialIcons" color={colors.darkGrey} />
          </View>

          <Text style={styles.title}>Country</Text>

          <View style={styles.inputContainer}>
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
            <Icon name="edit" type="materialIcons" color={colors.darkGrey} />
          </View>

          <Text style={styles.title}>City</Text>

          <View style={styles.inputContainer}>
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
            <Icon name="edit" type="materialIcons" color={colors.darkGrey} />
          </View>

          <View style={{ paddingTop: 10 }}>
            <ButtonGroup
              selectMultiple
              onPress={this.updateIndex}
              selectedIndexes={this.state.availability}
              buttons={["Freelancer", "Part Time", "Full Time"]}
            />
          </View>

          <Text style={styles.title}>Experience</Text>

          <RNPickerSelect
            placeholder={{
              label: "Select a experience...",
              value: null
            }}
            hideIcon
            items={experience}
            style={{ ...pickerSelectStyles }}
            onValueChange={value => {
              this.setState({
                experience: value
              });
            }}
            value={this.state.experience}
          />

          <Text style={styles.title}>Category</Text>

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

          <Text style={styles.title}>Job</Text>

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

          <TextInput
            value={this.state.description}
            placeholder="Description ..."
            placeholderTextColor={colors.darkGrey}
            style={styles.textArea}
            multiline
            returnKeyType="done"
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

      </KeyboardAvoidingView>
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
