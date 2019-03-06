import React, { Component } from 'react';

import {

  StyleSheet,
  Text
} from 'react-native';

class NewItem extends Component {
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
    <Text style = {styles.NewItem} >
      This is where the new item input might be?
    </Text>
      // <form className="NewItem" onSubmit={this.handleSubmit}>
      //   <input
      //     className="NewItem-input"
      //     type="text"
      //     value={value}
      //     onChange={this.handleChange}
      //   />
      //   <input className="NewItem-submit button" type="submit" />
      // </form>
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

export default NewItem;
