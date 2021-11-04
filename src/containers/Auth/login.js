import React, { Component } from 'react';
import {
    StatusBar,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

import { styles } from './styles'


export default class LoginView extends Component {

    constructor(props) {
        super(props);
        state = {
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/eoffice.png')} style = {styles.logo} />
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Dashboard')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('LupaPassword')}>
                    <Text style={{color:'#49BAEE'}}>Lupa password</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

