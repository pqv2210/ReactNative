// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, { Component } from 'react';
import {FlatList, Text, View,StyleSheet} from "react-native";
import data from '../../data/datauser';
import GetDataUser from '../getDataUser';

class PhoneBookScreen extends Component {
    separator = () => {
        return(
            <View style={mstyle.separator}></View>
        );
    }

    navigateDetail = (item) => {
        this.props.navigation.navigate('Detail', {item});
    }

    render() {
        return (
            <View style={mstyle.title}>
                <View style={mstyle.container}>
                    <FlatList
                        style={{flex: 1}}
                        data={data}
                        renderItem={({item}) =>
                            (<GetDataUser
                                item={item}
                                getDataToPhoneBook = {this.navigateDetail}
                            />)
                        }
                        keyExtractor={(item) => item.key}
                        ItemSeparatorComponent={this.separator}
                    />
                </View>
            </View>
        );
    }
}
export default PhoneBookScreen;

const mstyle = StyleSheet.create({
    title: {
        flex: 1,
    },

    container: {
        height: 490,
        width: '100%',
        marginTop: 12,
    },

    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#22182c',
        marginTop: 4,
    },
});