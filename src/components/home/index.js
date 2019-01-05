import React, { Component } from "react";
import {
  View,
  Text
} from 'react-native'
import HomeMenuIcon from '../shared/HomeMenuIcon'
class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('homeTitle', <HomeMenuIcon/>),
    };
  }

  render(){
    return(
      <View>
        <Text>Home info</Text>
      </View>
    )
  }
}
export default Home