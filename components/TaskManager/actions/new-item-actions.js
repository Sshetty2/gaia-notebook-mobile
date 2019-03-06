import { UPDATE_NEW_ITEM_VALUE } from '../components/TaskManager/constants';

export const updateNewItemValue = (value) => ({
  type: UPDATE_NEW_ITEM_VALUE,
  value,
});
