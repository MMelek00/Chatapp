import React from "react";
import { Container, Item, Content } from "native-base";
import { Button } from "react-native-elements";

import { View, TextInput, StyleSheet } from "react-native";
class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill1: "",
      rate1: 0,
      skill2: "",
      rate2: 0,
      skill3: "",
      rate3: 0,
      skill4: "",
      rate4: 0,
      skill5: "",
      rate5: 0
    };
  }
  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: "#ecf0f1" }}>
          <View style={styles.container}>
            <Item regular style={styles.Iteminput}>
              <TextInput
                placeholder="Skill"
                placeholderTextColor="#393E46"
                returnKeyType="go"
                style={styles.textInput}
                underlineColorAndroid="transparent"
                onChangeText={skill1 => this.setState({ skill1 })}
              />
            </Item>
            <Item regular style={styles.Iteminput2}>
              <TextInput
                placeholder="Rate"
                placeholderTextColor="#393E46"
                returnKeyType="go"
                style={styles.textInput2}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                onChangeText={rate1 => this.setState({ rate1 })}
              />
            </Item>
          </View>
          <View style={styles.container}>
            <Item regular style={styles.Iteminput}>
              <TextInput
                placeholder="Skill"
                placeholderTextColor="#393E46"
                returnKeyType="go"
                style={styles.textInput}
                underlineColorAndroid="transparent"
                onChangeText={skill2 => this.setState({ skill2 })}
              />
            </Item>
            <Item regular style={styles.Iteminput2}>
              <TextInput
                placeholder="Rate"
                placeholderTextColor="#393E46"
                returnKeyType="go"
                style={styles.textInput2}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                onChangeText={rate2 => this.setState({ rate2 })}
              />
            </Item>
          </View>
          <View style={styles.container}>
            <Item regular style={styles.Iteminput}>
              <TextInput
                placeholder="Skill"
                placeholderTextColor="#393E46"
                returnKeyType="go"
                style={styles.textInput}
                underlineColorAndroid="transparent"
                onChangeText={skill3 => this.setState({ skill3 })}
              />
            </Item>
            <Item regular style={styles.Iteminput2}>
              <TextInput
                placeholder="Rate"
                placeholderTextColor="#393E46"
                returnKeyType="go"
                style={styles.textInput2}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                onChangeText={rate3 => this.setState({ rate3 })}
              />
            </Item>
          </View>
          <View style={styles.container}>
            <Item regular style={styles.Iteminput}>
              <TextInput
                placeholder="Skill"
                placeholderTextColor="#393E46"
                returnKeyType="go"
                style={styles.textInput}
                underlineColorAndroid="transparent"
                onChangeText={skill4 => this.setState({ skill4 })}
              />
            </Item>
            <Item regular style={styles.Iteminput2}>
              <TextInput
                placeholder="Rate"
                placeholderTextColor="#393E46"
                returnKeyType="go"
                style={styles.textInput2}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                onChangeText={rate4 => this.setState({ rate4 })}
              />
            </Item>
          </View>
          <View style={styles.container}>
            <Item regular style={styles.Iteminput}>
              <TextInput
                placeholder="Skill"
                placeholderTextColor="#393E46"
                returnKeyType="go"
                style={styles.textInput}
                underlineColorAndroid="transparent"
                onChangeText={skill5 => this.setState({ skill5 })}
              />
            </Item>
            <Item regular style={styles.Iteminput2}>
              <TextInput
                placeholder="Rate"
                placeholderTextColor="#393E46"
                returnKeyType="go"
                style={styles.textInput2}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                onChangeText={rate5 => this.setState({ rate5 })}
              />
            </Item>
          </View>
          <View style={{ width: "30%", alignSelf: "flex-end" }}>
            <Button
              block
              onPress={() => this.props.navigation.navigate("Certificates")}
              title="Next"
              backgroundColor="#1C39A1"
            />
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 2,
    paddingHorizontal: 10,
    alignSelf: "center"
  },
  textInput: {
    height: 40,
    width: "100%",
    borderRadius: 8,
    color: "black"
  },
  Iteminput: {
    height: 40,
    width: "60%",
    backgroundColor: "#eae3e3",
    borderColor: "#a39e9e",
    marginTop: 12,
    borderRadius: 8,
    padding: 12
  },
  textInput2: {
    height: 40,
    width: "100%",
    borderRadius: 8,
    color: "black"
  },
  Iteminput2: {
    height: 40,
    width: "20%",
    backgroundColor: "#eae3e3",
    borderColor: "#a39e9e",
    marginTop: 12,
    borderRadius: 8,
    padding: 12
  }
});
export default Skills;
