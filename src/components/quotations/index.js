import React, { Component } from "react";
import {
  ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import { getRandomQuotations } from '../../actions/quotationsActions'
import Loader from '../shared/loader'
import ListData from './listData'

import axios from 'axios'

class Quotations extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Quotation', 'Quotas'),
    };
  }
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount(){
    this.props.getRandomQuotations();
  }

  render(){
    return(
      <ScrollView>
        {this.props.quotations.length > 0 ? <ListData listData={this.props.quotations} navigation={this.props.navigation}/> : <Loader/>}
      </ScrollView>
    )
  }
}


function mapStateToProps(state) {
  return {
    quotations: state.quotations
  }
}

export default connect(mapStateToProps, {getRandomQuotations})(Quotations)
