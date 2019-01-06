import React, {Component} from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import { ListItem } from 'react-native-elements'

class ListData extends Component {

  _renderListData(){
    let listData = this.props.listData
    return listData.map((item, key) => (
      <TouchableWithoutFeedback key={key} onPress={() => this.props.navigation.navigate('Details', {tagItem: item})}>
        <ListItem
          key={item.id}
          title={item.name}
          titleNumberOfLines={0}
          containerStyle={{
            borderColor: "#D3D5D8",
            borderBottomWidth: 1,
            marginTop: 1
          }}
        />
      </TouchableWithoutFeedback>
    ));
  }

  render(){
    return(
      <ScrollView>{this._renderListData()}</ScrollView>
    );

  }
}

export default ListData