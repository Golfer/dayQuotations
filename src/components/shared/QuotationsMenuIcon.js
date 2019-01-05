import React, { Component } from "react";
import {
  StyleSheet
} from 'react-native'
import FoundationIcon from 'react-native-vector-icons/Foundation'

class HomeMenuIcon extends React.Component {

  render(){
    return(
      <FoundationIcon
        name='comment-quotes'
        onPress={()=> navigation.goBack()}
        size={30}
        color='#000'
        style={styles.button}
      />
    )
  }
}
export default HomeMenuIcon


const styles = StyleSheet.create({
  button: {
    marginRight: 15
  },

})