

import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';

import {
    Button,
    Input,
    Text,
    Icon
} from 'react-native-ui-kitten';
import { colors } from '../common/theme/colors';


class ProfileComponent extends React.Component {
    state = {
        emailId: '',
        password: ''
    }
    render = () => {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 20 }}>

                <Image style={{ height: 100, width: 100, marginBottom: 20 }} source={{ uri: "https://img5.androidappsapk.co/cSKWiFhmpUL8Hl-7Kgb_GHiqhnFhuGgP6hRyVCPUpq3GseYlgDfjQAQl1T8y77G0m8JU=s300" }} />


                <Text category='h1'>Profile</Text>


                <View style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text category='h6'>Name:</Text>
                    <Text category='h6'>Sangamesh Somawar</Text>
                </View>
                <View style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text category='h6'>Phone Number:</Text>
                    <Text category='h6'>9145555755</Text>
                </View>

                <View style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text category='h6'>Aadhar Id:</Text>
                    <Text category='h6'>72874792387652</Text>
                </View>


                <Button style={{ margin: 10,backgroundColor:colors.GREEN }} onPress={() => {
                    this.props.navigation.navigate("LoginNavigator");
                }} status='success'>Logout </Button>

                <Text style={{ paddingTop: 10 }} category='h6'> Developed by Team Arcana </Text>

            </View>
        )
    }
}

export const Profile = ProfileComponent