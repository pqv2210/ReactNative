// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

class AddContact extends Component {
    static navigationOptions = {title: 'Add Contact'}

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            fulname: '',
            phonenumber: '',
            email: '',
        };
    }

    handleFulname = (text) => {
        this.setState({fulname: text});
    }

    handlePhonenumber = (text) => {
        this.setState({phonenumber: text});
    }

    handleEmail = (text) => {
        this.setState({email: text});
    }

    popDataToPhoneBook = () => {
        const {key, fulname, phonenumber, email} = this.state;
        this.props.navigation.state.params.onGoBack(key, fulname, phonenumber, email);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={mstyle.container}>
                <View style={mstyle.browseImage}/>
                <View style={mstyle.haflcontainer}>
                    <Text style={mstyle.text}>Name:</Text>
                    <TextInput
                        style={mstyle.textinput}
                        onChangeText={this.handleFulname}
                    />
                    <Text style={mstyle.text}>Phone:</Text>
                    <TextInput
                        style={mstyle.textinput}
                        onChangeText={this.handlePhonenumber}
                    />
                    <Text style={mstyle.text}>Gmail:</Text>
                    <TextInput
                        style={mstyle.textinput}
                        onChangeText={this.handleEmail}
                    />
                </View>
                <View style={mstyle.button}>
                    <TouchableOpacity
                        style={mstyle.touchOK}
                        onPress={this.popDataToPhoneBook}
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
    scroll: {
        height: '100%',
        width: '100%',
    },

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