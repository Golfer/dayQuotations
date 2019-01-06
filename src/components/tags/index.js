import React, { Component } from "react";
import {
  ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import { getRandomTags } from '../../actions/tagsActions'
import Loader from '../shared/loader'
import ListData from './listData'

import axios from 'axios'

class Tags extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('tagTitle', 'Tags'),
    };
  }
  constructor() {
    super();
  }

  componentDidMount(){
    this.props.getRandomTags();
  }

  render(){
    return(
      <ScrollView>
        {this.props.tags.length > 0 ? <ListData listData={this.props.tags} navigation={this.props.navigation}/> : <Loader/>}
      </ScrollView>
    )
  }
}


function mapStateToProps(state) {
  return {
    tags: state.tags
  }
}

export default connect(mapStateToProps, {getRandomTags})(Tags)
