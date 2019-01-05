import React, { Component } from "react";
import {
  View,
  Text
} from 'react-native'
class Tags extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('tagsTitle', 'Tags'),
    };
  }

  render(){
    return(
      <View>
        <Text>Tags list</Text>
      </View>
    )
  }
}
export default Tags