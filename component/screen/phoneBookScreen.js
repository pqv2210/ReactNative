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

    render() {
        //console.log('data', data);
        return (
            <View style={mstyle.title}>
                <View style={mstyle.container}>
                    <FlatList
                        style={{flex: 1}}
                        data={data}
                        renderItem={({item}) =>
                            (<View>
                                <GetDataUser
                                    fulname = {item.fulname}
                                    phonenumber = {item.phonenumber}
                                    avatarURL = {item.avatarURL}
                                />
                                <Text onPress={() => this.props.navigation.navigate('Detail')} />
                            </View>)
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
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    container: {
        height: 550,
        width: '100%',
        marginTop: 10,
    },

    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#22182c',
        marginTop: 50,
    },
});