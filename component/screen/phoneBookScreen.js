// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Button, ScrollView} from 'react-native';
import data from '../../data/datauser';
import GetDataUser from '../getDataUser';

class PhoneBookScreen extends Component {
    static navigationOptions = {title: 'Phone Book'}

    constructor(props) {
        super(props);
        this.state = {
            item: {},
            data: null,
        };
    }

    separator = () => {
        return (
            <View style={mstyle.separator}/>
        );
    }

    componentDidMount(): void {
        this.setState({data});
    }

    navigateDetail = (item) => {
        this.props.navigation.navigate('Detail', {item});
    }

    getDataWhenGoBack = (key, fulname, phonenumber, email) => {
        console.log('data', data);
        let add = this.state.data.concat([{"key":"11", fulname, phonenumber, email, "avatarURL": "data:image/jpeg;base64,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"}]);
        this.setState({data: add});
    }

    render() {
        console.log(this.state.data);
        return (
            <View>
                <Button
                    style={mstyle.button}
                    title='Add Contact'
                    onPress={() => {
                        //this.props.navigation.navigate('Add Contact', {onGoBack: this.getDataWhenGoBack});
                        let add = this.state.data.concat([{"key":"11", "fulname":"Leo", "phonenumber":"0235", "email":"1234@gmail.com", "avatarURL": "data:image/jpeg;base64,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"}]);
                        this.setState({data: add});
                    }}
                />
                <ScrollView style={mstyle.scroll}>
                    <View style={mstyle.container}>
                        <FlatList
                            style={{flex: 1}}
                            data={this.state.data}
                            renderItem={({item}) =>
                                (<GetDataUser
                                    item={item}
                                    getDataToPhoneBook={this.navigateDetail}
                                />)
                            }
                            keyExtractor={(item) => item.name}
                            ItemSeparatorComponent={this.separator}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default PhoneBookScreen;

const mstyle = StyleSheet.create({
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

    button: {
        height: 30,
        width: 30,
    },
    scroll: {
        height: '93%',
        width: '100%',
    },
});