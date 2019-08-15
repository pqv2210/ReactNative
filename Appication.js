// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react';
import PhoneBookScreen from './component/screen/phoneBookScreen';
import DetailsScreen from './component/screen/detailScreen';
import AddContactScreen from './component/screen/addContactScreen';
import AddContact from './component/screen/addContact';
import DrawerMenu from './component/screen/DrawerMenu';
import {
    createDrawerNavigator,
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

const AppNavigation = createBottomTabNavigator({
    PhoneBookTab: {
        screen: PhoneBookScreen,
        navigationOptions: {
            title: 'Phone Book',
        },
    },
    AddContactTab: AddContactScreen,
});

const StackNavigation = createStackNavigator({
    PhoneBookTab: {
        screen: AppNavigation,
        navigationOptions: {
            title: 'Phone Book',
            header: null,
        },
    },
    DetailStack: DetailsScreen,
    AddContactStack: AddContact,
});

const DrawerNavigation = createDrawerNavigator({
    PhoneBookDrawer: {
        screen: StackNavigation,
    },
},
{
    contentComponent: DrawerMenu,
});

const Application = createAppContainer(DrawerNavigation);

export default Application;
