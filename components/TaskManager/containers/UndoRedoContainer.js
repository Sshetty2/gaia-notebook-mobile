import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { undoItemAction, redoItemAction } from '../actions/items-actions';

const mapDispatchToProps = dispatch => bindActionCreators({
    undo: undoItemAction,
    redo: redoItemAction
}, dispatch);

export default connect(null, mapDispatchToProps)(({ undo, redo }) => (
    <View style={{flex: 1, flexDirection: 'row'}}>
        <Button style={styles.UndoButton} onPress = { undo } title= "Undo" />
        <Button style={styles.RedoButton} onPress = { redo } title= "Redo" />
    </View>


))


const styles = StyleSheet.create({
    UndoButton : {
        height: 40,
        margin: 5
    },
    RedoButton : {
        height: 40,
        margin: 5
    }
  });