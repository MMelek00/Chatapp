import React from "react";
import { TextInput, View, Text } from "react-native";
import { Item, Card, Picker } from "native-base";
import { Icon, ButtonGroup, Button } from "react-native-elements";
import styles from "../../styles/search";
import { categories, WebOption, countries } from "../../utils/properties";

export default class Search extends React.Component {
  static navigationOptions = {
    title: "SEARCH"
  };
  state = {
    index: 0,
    Years: 1,
    category: "Design & Creative",
    job: "Mobile Development",
    country: "Tunisia",
    name: ""
  };
  updateIndex = index => {
    this.setState({ index });
  };

  render() {
    return (
      <View style={styles.container}>
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
        <View style={{ paddingTop: 10 }}>
          <ButtonGroup
            selectedButtonStyle={{ backgroundColor: "#57A0FD" }}
            onPress={this.updateIndex}
            selectedIndex={this.state.index}
            buttons={["Freelancer", "Part Time", "Full Time"]}
            containerStyle={{ height: 45, width: "90%" }}
          />
        </View>
        <Card style={{ width: "90%", height: 90 }}>
          <Item style={{ paddingTop: 10, paddingLeft: 15 }}>
            <Icon name="chain" type="font-awesome" color="gray" />
            <Text style={{ paddingLeft: 20 }}>Years Experience</Text>
          </Item>
          <View style={{ paddingLeft: 10 }}>
            <Picker
              selectedValue={this.state.Years}
              itemStyle={{ color: "blue" }}
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ Years: itemValue })
              }
              mode="dialog"
              iosHeader="Select"
            >
              <Picker.Item label="1 year" value="1" />
              <Picker.Item label="2 years" value="2" />
              <Picker.Item label="+3 years" value="3" />
              <Picker.Item label="+5 years" value="5" />
            </Picker>
          </View>
        </Card>
        <View
          style={{ flexDirection: "row", padding: 5, paddingHorizontal: 22 }}
        >
          <Card style={{ width: "50%", height: 90 }}>
            <View style={{ paddingTop: 15 }}>
              <Text style={{ paddingLeft: 20 }}>Category</Text>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Picker
                selectedValue={this.state.category}
                itemStyle={{ color: "blue" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ category: itemValue })
                }
              >
                {categories.map((value, i) => (
                  <Picker.Item label={value} value={value} key={i} />
                ))}
              </Picker>
            </View>
          </Card>
          <Card style={{ width: "50%", height: 90 }}>
            <View style={{ paddingTop: 15 }}>
              <Text style={{ paddingLeft: 20 }}>Job</Text>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Picker
                selectedValue={this.state.job}
                style={{ height: 50, width: "100%" }}
                itemStyle={{ color: "blue" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ job: itemValue })
                }
              >
                {WebOption.map((value, i) => (
                  <Picker.Item label={value} value={value} key={i} />
                ))}
              </Picker>
            </View>
          </Card>
        </View>
        <Card style={{ width: "90%", height: 50 }}>
          <Picker
            selectedValue={this.state.country}
            style={{ height: 50, width: "100%" }}
            itemStyle={{ color: "blue" }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ country: itemValue })
            }
          >
            {countries.map((value, i) => (
              <Picker.Item label={value} value={value} key={i} />
            ))}
          </Picker>
        </Card>
        <View style={{ width: "95%", paddingTop: 30 }}>
          <Button
            rounded
            onPress={() => console.log(this.state.index)}
            title="SEARCH"
            backgroundColor="#1C39A1"
          />
        </View>
      </View>
    );
  }
}
