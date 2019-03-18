import React, { Component } from 'react';
import {StyleSheet, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import { Button, Input } from 'react-native-elements';


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

          <View style={styles.NewItem}>
            <Input containerStyle={styles.NewItemInput} onChangeText={this.handleChange} />
            <Button style={styles.NewItemButton} type='solid' onPress={this.handleSubmit} title="Submit" />
          </View>

    );
  }
}

const styles = StyleSheet.create({
  NewItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  NewItemInput: {
    width: 120,
    height:40,
  },
  NewItemButton: {
    height:40,
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