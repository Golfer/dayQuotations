import React, { Component } from "react";
import {
  StyleSheet
} from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

class ProfileMenuIcon extends React.Component {

  render(){
    return(
      <AntDesignIcon
        name='profile'
        onPress={()=> navigation.goBack()}
        size={30}
        color='#000'
        style={styles.button}
      />
    )
  }
}
export default ProfileMenuIcon


const styles = StyleSheet.create({
  button: {
    marginRight: 15
  },

})