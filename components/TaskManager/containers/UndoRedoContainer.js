import React from 'react';
import { View } from 'react-native';
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
        <Button onPress = { undo }>Undo</Button>
        <Button onPress = { redo }>Redo</Button>
    </View>


))