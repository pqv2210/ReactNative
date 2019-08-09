// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react';
import PhoneBookScreen from "./component/screen/phoneBookScreen";
import DetailsScreen from "./component/screen/detailScreen";
import {createAppContainer, createStackNavigator} from "react-navigation";

const MainNavigator = createStackNavigator({
    PhoneBook: PhoneBookScreen,
    Detail: DetailsScreen,
});

const Application = createAppContainer(MainNavigator);

export default Application;
