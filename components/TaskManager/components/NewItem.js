import React, { Component } from 'react';
import { Button, Input } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import { Formik } from 'formik';

export default class NewItem extends Component {

  

  handleChange = (text) => {
    const value = text;
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
      <Formik initialValues={{ email: '' }} onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}>
        {props => (
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Input containerStyle = {{width: 50}}
              onBlur={props.handleBlur('email')}
              onChange={this.handleChange}
            />
            <Button style={{width: 10 }} onPress={props.handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
  NewItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
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