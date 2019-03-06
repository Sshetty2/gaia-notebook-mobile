import { connect } from 'react-redux';
import Items from '../../TaskManager/components/Items';

import { toggleItem, removeItem } from '../actions/items-actions';

const mapStateToProps = ({ items, filter }) => {
  return { items: items.present.filter(item => item.packed && item.value.includes(filter.packedItemsFilter)) };
};

const mapDispatchToProps = dispatch => ({
  onCheckOff(id) {
    dispatch(toggleItem(id));
  },
  onRemove(id) {
    dispatch(removeItem(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
