import React, { Component } from "react";
import {
  View,
  Text
} from 'react-native'
class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('userProfile', 'Profile'),
    };
  }

  render(){
    return(
      <View>
        <Text>Profile info</Text>
      </View>
    )
  }
}
export default Profile