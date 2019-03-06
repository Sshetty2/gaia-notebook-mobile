import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewItem from '../../TaskManager/components/NewItem';

import { updateNewItemValue } from '../../TaskManager/actions/new-item-actions.js';
import { addNewItem } from '../../TaskManager/actions/items-actions';

const mapStateToProps = ({ newItemValue }) => ({ value: newItemValue });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewItemValue,
    addNewItem
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
