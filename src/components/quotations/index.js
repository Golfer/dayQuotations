import React, { Component } from "react";
import {
  View,
  Text
} from 'react-native'

class Quotations extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Quotation', 'Quotas'),
    };
  }

  render(){
    return(
      <View>
        <Text>Quotations info</Text>
      </View>
    )
  }
}
export default Quotations