import React, { Component } from "react";
import { View } from "react-native";

import CustomHeader from "../../App/Navigation/CustomHeader";

export default class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <CustomHeader navigation={this.props.navigation} />
      </View>
    );
  }
}