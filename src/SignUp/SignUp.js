

import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';

import {
    Button,
    Input,
    Text
} from 'react-native-ui-kitten';
import { colors } from '../common/theme/colors';



class SignUpComponent extends React.Component {
    state = {
        emailId: '',
        password: ''
    }
    render = () => {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:"black"}}>

                <Image
                    style={{ flex:1, position:"absolute",height: "100%",opacity:0.1, width: "100%" }}
                    source={{ uri: "https://dohanews.co/wp-content/uploads/2018/02/Australian-food.jpg" }}
                />
                <Image
                    style={{ height: 150, width: 150, marginBottom: 20 }}
                    source={{ uri: "https://img5.androidappsapk.co/cSKWiFhmpUL8Hl-7Kgb_GHiqhnFhuGgP6hRyVCPUpq3GseYlgDfjQAQl1T8y77G0m8JU=s300" }}
                />

<View style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text  style={{color:"white"}} category='h6'>Delivering Happy Home Meals!</Text>
                </View>

                <Input
                    style={{ marginBottom: 10, marginHorizontal: 30  }}
                    value={this.state.firstName}
                    size='small'
                    onChangeText={(firstName) => {
                        this.setState({ firstName })
                    }}
                    placeholder='First Name'
                />
                <Input
                    style={{ marginBottom: 10 , marginHorizontal: 30  }}
                    value={this.state.lastName}
                    size='small'
                    onChangeText={(lastName) => {
                        this.setState({ lastName })
                    }}
                    placeholder='Last Name'
                />
                <Input
                    style={{ marginBottom: 10  , marginHorizontal: 30  }}
                    value={this.state.emailId}
                    size='small'
                    onChangeText={(emailId) => {
                        this.setState({ emailId })
                    }}
                    placeholder='Email Id'
                />
                <Input
                    style={{ marginBottom: 10  , marginHorizontal: 30  }}
                    value={this.state.phoneNumber}
                    size='small'
                    onChangeText={(phoneNumber) => {
                        this.setState({ phoneNumber })
                    }}
                    placeholder='Phone Number'
                />
                <Input
                    style={{ marginBottom: 10  , marginHorizontal: 30  }}
                    value={this.state.aadharId}
                    size='small'
                    onChangeText={(aadharId) => {
                        this.setState({ aadharId })
                    }}
                    placeholder='Aadhar Id'
                />
                <Input
                    style={{ marginBottom: 10  , marginHorizontal: 30  }}
                    value={this.state.password}
                    size='small'
                    onChangeText={(password) => {
                        this.setState({ password })
                    }}
                    placeholder='Password'
                />

                {/* <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}> */}

                <Button style={{ margin: 10,backgroundColor:colors.GREEN}} onPress={() => {
                    this.props.navigation.navigate("UserNavigator");
                }} status='success'>Register</Button>

                {/* </View> */}

                <Text style={{ paddingTop: 5, color:"white" }} category='h6'> Developed by Team Arcana </Text>

            </View>
        )
    }
}

export const SignUp = SignUpComponent