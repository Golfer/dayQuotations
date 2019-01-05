import React, { Component } from "react";
import {
  View,
  Text
} from 'react-native'
import DetailMenuIcon from '../shared/DetailMenuIcon'

class Details extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('detailsTitle', <DetailMenuIcon/>),
    };
  }

  render(){
    return(
      <View>
        <Text>Details info</Text>
      </View>
    )
  }
}
export default Details