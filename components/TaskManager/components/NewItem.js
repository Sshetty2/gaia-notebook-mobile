import React, { Component } from 'react';

import { Input } from 'react-native-elements';


import {

  StyleSheet,
  View,
  Text
} from 'react-native';

export default class NewItem extends Component {
  handleChange = (event) => {
    const value = event.target.value;
    this.props.updateNewItemValue(value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.props;
    this.props.addNewItem(value);
  }

  render() {
    const { value } = this.props;

    return (
    <View>
    <Input
      placeholder='INPUT WITH ICON'
      leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
    />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  NewItem: {
    flex: 1,
    flexDirection: 'row'
  },
  NewItemInput: {
    width: '100%'
  }
});



      // <form className="NewItem" onSubmit={this.handleSubmit}>
      //   <input
      //     className="NewItem-input"
      //     type="text"
      //     value={value}
      //     onChange={this.handleChange}
      //   />
      //   <input className="NewItem-submit button" type="submit" />
      // </form>