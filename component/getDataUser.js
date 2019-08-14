// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react';
import {Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';

class GetDataUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
        };
    }

    getDataToPhoneBook = () => {
        this.props.getDataToPhoneBook(this.props.item);
    }

    render() {
        return (
            <TouchableOpacity
                style={mstyle.container}
                onPress= {this.getDataToPhoneBook}
            >
                <Image
                    source={{uri: this.props.item.avatarURL}}
                    style={mstyle.imageitem}
                />
                <TouchableOpacity style={mstyle.textitem}>
                    <Text>{this.props.item.fulname}</Text>
                    <Text>{this.props.item.phonenumber}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

export default GetDataUser;

const mstyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        zIndex: 0,
    },

    imageitem: {
        height: 45,
        width: 45,
        marginLeft: 10,
    },

    textitem: {
        fontSize: 30,
        color: '#382BF1',
        marginLeft: 7,
        alignContent: 'center',
    },
});
