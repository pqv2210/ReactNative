// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react';
import PhoneBookScreen from './component/screen/phoneBookScreen';
import DetailsScreen from './component/screen/detailScreen';
import AddContactScreen from './component/screen/AddContactScreen';
import {
    createDrawerNavigator,
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

const PhoneBookNavigation = createBottomTabNavigator({
    PhoneBookTab: PhoneBookScreen,
    AddContacTab: AddContactScreen,
});

const StackNavigation = createStackNavigator({
    PhoneBook: PhoneBookNavigation,
    Detail: DetailsScreen,
});

const DrawerNavigation = createDrawerNavigator({
    PhoneBookDrawer: StackNavigation,
});

const Application = createAppContainer(DrawerNavigation);

export default Application;
