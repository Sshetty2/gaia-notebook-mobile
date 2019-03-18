import React, { Component } from 'react';
import Item from './Item';
import './Items.css';

class Items extends Component {
  render() {
    const { title, items, onCheckOff, onRemove } = this.props;
    return (
      <View className="Items">
        <Text h2>
          {title} ({items.length})
        </Text>
        { this.props.render && this.props.render() }
        {items.map(item => (
            <Item
              key={item.id}
              onCheckOff={() => onCheckOff(item.id)}
              onRemove={() => onRemove(item.id)}
              {...item}
            />
          ))}
      </View>
    );
  }
}

export default Items;
