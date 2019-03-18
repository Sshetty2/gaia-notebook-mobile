import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import {StyleSheet, View, TextInput} from 'react-native';
import { Formik } from 'formik';


export default class NewItem extends Component {

  

  handleChange = (text) => {
    const value = text;
    this.props.updateNewItemValue(value);
  }


  

  handleSubmit = (text) => {
    const { value } = this.props;
    console.warn(value)
    this.props.addNewItem(value);
  }

  render() {
    const { value } = this.props;

    return (

          <View style={{flex: 1, flexDirection: 'row'}}>
            <TextInput style={{height: 40, width: 50, borderColor: 'gray', borderWidth: 1}}
              onChangeText={this.handleChange}
            />
            <Button type='solid' onPress={this.handleSubmit} title="Submit" />
          </View>

    );
  }
}

const styles = StyleSheet.create({
  NewItem: {
    flex: 1,
    flexDirection: 'row',
  },
  NewItemInput: {
    width: '70%'
  },
  NewItemButton: {
    width: '30%'
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