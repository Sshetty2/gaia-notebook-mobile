import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CheckBox, Button } from 'react-native-elements';
import { View, Text } from 'react-native';


class Item extends Component {
  render() {
    const { packed, id, value, onCheckOff, onRemove } = this.props;
    return (
      <View className="Item" style={{flexDirection: 'row'}}>
      
        <CheckBox
          checked={packed}
          onPress={onCheckOff}
          id={id}
        />
        <Text>
          {value}
        </Text>
        <Button className="Item-remove" onPress={onRemove}>
          Remove
        </Button>
      </View>
    );
  }
}

Item.propTypes = {
  packed: PropTypes.bool,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onCheckOff: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

Item.defaultProps = {
  packed: false,
};

export default Item;


// .Item-remove {
//   background-color: white;
//   color: #f65e81;
//   border: none;
//   margin-left: 1em;
//   outline: none;
//   padding: 0;
// }

// .Item-remove:hover {
//   background-color: white;
//   text-decoration: underline;
// }

