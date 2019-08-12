import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from "react-native";

class AppDrawerNavigation extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                    <Text>Open Drawer</Text>
                </TouchableOpacity>
                <Text>AppDrawer</Text>
            </View>
        )
    }
}
export default AppDrawerNavigation