import React, { Component } from 'react';
import NewItemContainer from '../components/TaskManager/containers/NewItemContainer';
// import PackedItemsContainer from '../containers/PackedItemsContainer';
// import UnpackedItemsContainer from '../containers/UnpackedItemsContainer';
// import MarkAllAsUnpackedContainer from '../containers/MarkAllAsUnpackedContainer';
// import UnpackedFilterContainer from '../containers/UnpackedFilterContainer';
// import PackedFilterContainer from '../containers/PackedFilterContainer';
import UndoRedoContainer from '../components/TaskManager/containers/UndoRedoContainer'

import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';


class Application extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NewItemContainer />
        <UndoRedoContainer />
        {/*
        <UnpackedItemsContainer title="Unpacked Items" render={() => <UnpackedFilterContainer />} />
        <PackedItemsContainer title="Packed Items" render={() => <PackedFilterContainer />} />
        <MarkAllAsUnpackedContainer /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1
  }
});


export default Application;