// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react';
import PhoneBookScreen from "./component/screen/phoneBookScreen";
import DetailsScreen from "./component/screen/detailScreen";
import AppDrawerNavigation from "./component/screen/AppDrawerNavigation";
import {
    createDrawerNavigator,
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation";
import { StatusBar } from 'react-native';

StatusBar.setHidden(true);

const PhoneBookNavigation = createBottomTabNavigator({
    PhoneBookTab: PhoneBookScreen,
});

const StackNavigation = createStackNavigator({
    PhoneBook: PhoneBookNavigation,
    Detail: DetailsScreen,
});

const DrawerNavigation = createDrawerNavigator({
    PhoneBookDrawer: StackNavigation,
    AppDrawer: AppDrawerNavigation,
});

const Application = createAppContainer(DrawerNavigation);

export default Application;
