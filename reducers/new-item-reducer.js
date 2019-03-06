import { UPDATE_NEW_ITEM_VALUE } from '../components/TaskManager/constants';

export default function(state = '', action) {
  if (action.type === UPDATE_NEW_ITEM_VALUE) {
    return action.value;
  }

  return state;
}
