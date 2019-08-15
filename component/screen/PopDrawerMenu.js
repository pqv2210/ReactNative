import React,{Component} from 'react';
import { Icon } from "react-native-elements";

const PopDrawerMenu = props => {
    return (
        <Icon
            color="#fff"
            name="menu"
            onPress={() => props.navigation.toggleDrawer()}
        />
    );
};

export default PopDrawerMenu;