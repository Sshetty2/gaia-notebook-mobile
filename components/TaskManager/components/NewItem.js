import React, { Component } from 'react';


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
    display: flex
  },
  NewItemInput: {
    width: '100%'
  }
});

export default NewItem;
