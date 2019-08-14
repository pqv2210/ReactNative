// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

const item = [{
    fulname: '',
    phonenumber: '',
    email: '',
}];

class AddContact extends Component {
    static navigationOptions = {title: 'Add Contact'}

    constructor(props) {
        super(props);
        this.state = {
            item,
        };
    }

    touchOK = () => {
        console.log(item);
    }

    render() {
        return (
            <View style={mstyle.container}>
                <View style={mstyle.browseImage}/>
                <View style={mstyle.haflcontainer}>
                    <Text style={mstyle.text} >Name:</Text>
                    <TextInput
                        style={mstyle.textinput}
                        ref='fulname'
                        onChangeText={(fulname) => this.setState({fulname})}
                        value={this.state.fulname}
                    />
                    <Text style={mstyle.text} >Phone:</Text>
                    <TextInput
                        style={mstyle.textinput}
                        ref='phonenumber'
                        onChangeText={(phonenumber) => this.setState({phonenumber})}
                        value={this.state.phonenumber}
                    />
                    <Text style={mstyle.text} >Gmail:</Text>
                    <TextInput
                        style={mstyle.textinput}
                        ref='email'
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                </View>
                <View style={mstyle.button}>
                    <TouchableOpacity
                        style={mstyle.touchOK}
                        onPress={this.touchOK}
                    >
                        <Text style={mstyle.textOK}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default AddContact;

const mstyle = StyleSheet.create({
    container: {
        backgroundColor: '#f3e9f5',
        width: '80%',
        height: '85%',
        marginTop: '10%',
        marginLeft: '10%',
    },
    browseImage: {
        height: '35%',
        width: '100%',
    },
    haflcontainer: {
        height: '50%',
        width: '100%',
        flexDirection: 'column',
    },
    text: {
        fontSize: 20,
        marginLeft: '10%',
    },
    textinput: {
        height: 40,
        width: '80%',
        marginLeft: '10%',
        fontSize: 18,
        borderWidth: 1,
    },
    button: {
        height: '15%',
        width: '100%',
    },
    touchOK: {
        height: 40,
        width: 70,
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#93f5e4',
        marginLeft: 110,
    },
    textOK: {
        alignItems: 'center',
        fontSize: 20,
    },
});