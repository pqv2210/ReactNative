import React, { Component } from 'react';
import {Text, Image, StyleSheet, View} from "react-native";
import PropTypes from 'prop-types';

class GetDataUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fulname: '',
            phonenumber: '',
            avatarURL: '',
        };
    }

    render() {
        return (
            <View style={mstyle.containersmall}>
                <Text style={mstyle.itemname}>{this.props.fulname}</Text>
                <Text style={mstyle.itemphone}>{this.props.phonenumber}</Text>
                <Image source={{uri: this.props.avatarURL}} style={mstyle.itemavatar}/>
            </View>
        );
    }
}

GetDataUser.propTypes = {
    fulname: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
};

export default GetDataUser;

const mstyle = StyleSheet.create({
    containersmall: {
        marginLeft: 80,
        width: '100%',
        height: 40,
        flexDirection: 'column',
    },

    itemname: {
        fontSize: 20,
        color: '#79378B',
        marginTop: 20,
    },

    itemphone: {
        fontSize: 18,
        color: '#382BF1',
    },

    itemavatar: {
        height: 50,
        width: 50,
        marginLeft: -65,
        marginTop: -50,
    },
});
