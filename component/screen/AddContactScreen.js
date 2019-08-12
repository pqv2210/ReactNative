// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class AddContactScreen extends Component {
    render() {
        return(
            <View style={mstyle.container}>
                <View style={mstyle.browseImage} />
                <View style={mstyle.haflcontainer}>

                </View>
            </View>
        );
    }
}
export default AddContactScreen;

const mstyle = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#F5A89A',
        height: '80%',
        width: '80%',
        marginTop: '10%',
        marginLeft: '10%',
    },
    browseImage:{
        height: '50%',
        width: '100%',
    },
    haflcontainer:{
        height: '50%',
        width: '100%',
    },
});