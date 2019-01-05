import React, { Component } from "react";
import {
  StyleSheet
} from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'

class DetailMenuIcon extends React.Component {

  render(){
    return(
      <FeatherIcon
        name='more-horizontal'
        onPress={()=> navigation.goBack()}
        size={30}
        color='#000'
        style={styles.button}
      />
    )
  }
}
export default DetailMenuIcon


const styles = StyleSheet.create({
  button: {
    marginRight: 15
  },
})