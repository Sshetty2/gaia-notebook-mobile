import {
  UPDATE_UNPACKED_ITEMS_FILTER,
  UPDATE_PACKED_ITEMS_FILTER
} from '../components/TaskManager/constants';

export const updateUnpackedItemsFilter = (text) => ({
  type: UPDATE_UNPACKED_ITEMS_FILTER,
  text,
});

export const updatePackedItemsFilter = (text) => ({
  type: UPDATE_PACKED_ITEMS_FILTER,
  text,
});
