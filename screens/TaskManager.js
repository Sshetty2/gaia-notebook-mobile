import React, { Component } from 'react';
import NewItemContainer from '../containers/NewItemContainer';
import PackedItemsContainer from '../containers/PackedItemsContainer';
import UnpackedItemsContainer from '../containers/UnpackedItemsContainer';
import MarkAllAsUnpackedContainer from '../containers/MarkAllAsUnpackedContainer';
import UnpackedFilterContainer from '../containers/UnpackedFilterContainer';
import PackedFilterContainer from '../containers/PackedFilterContainer';
import UndoRedoContainer from '../containers/UndoRedoContainer'


class Application extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NewItemContainer />
        {/* <UndoRedoContainer />
        <UnpackedItemsContainer title="Unpacked Items" render={() => <UnpackedFilterContainer />} />
        <PackedItemsContainer title="Packed Items" render={() => <PackedFilterContainer />} />
        <MarkAllAsUnpackedContainer /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    maxWidth: '400px',
  }
});


export default Application;