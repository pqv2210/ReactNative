// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class DetailsScreen extends Component {
    static navigationOptions = {title: 'Chi tiet'}

    constructor(props){
        super(props)
        console.log(this.props);
        this.state={
             item: {},
        };
    }

    componentDidMount() {
        console.log('data', this.props.navigation.getParam('item', 'NO-ID'));
        const item = this.props.navigation.getParam('item', 'NO-ID')
        this.setState({item});
    }

    render() {
        return (
            <View style={mstyle.container1}>
                <Text>{this.state.item.fulname}</Text>
                <Text>{this.state.item.phonenumber}</Text>
            </View>
        );
    }
}

export default DetailsScreen;

const mstyle = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'row',
    },

    avatar: {
        height: 100,
        width: 100,
    },

    detail: {
        marginLeft: 20,
        flexDirection: 'column',
        fontSize: 70,
    },
});