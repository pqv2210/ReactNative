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
    'Phone Book Tab': PhoneBookScreen,
    'Add Contact Tab': AddContactScreen,
});

const StackNavigation = createStackNavigator({
    'Phone Book': PhoneBookNavigation,
    'Detail': DetailsScreen,
});

const DrawerNavigation = createDrawerNavigator({
    'Phone Book Drawer': StackNavigation,
});

const Application = createAppContainer(DrawerNavigation);

export default Application;
