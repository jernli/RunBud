import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import { styles } from './styles'

export default class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    render(){
        return (
            <ViewContainer>
                <StatusbarBackground />

                <View style={styles.logo}>
                    <Image source={require('../../resources/Logo.png')}/>
                </View>

                <View style={styles.inputButtons} >
                    <TextInput style={styles.textInput} 
                        onChangeText={(text) => this.setState({email: text})}
                        autoCapitalize="none"
                        value={this.state.email}
                        placeholder="EMAIL"
                        placeholderTextColor="black"
                        autoCorrect={false}
                        returnKeyType="next"
                        keyboardAppearance="dark"
                    />

                    <TextInput style={styles.textInput} 
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                        placeholder="PASSWORD"
                        secureTextEntry={true}
                        placeholderTextColor="black"
                        autoCorrect={false}
                        returnKeyType="go"
                        keyboardAppearance="dark"
                    />
                </View>
                <View style={styles.login}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.register}>
                    <TouchableOpacity style={styles.registerButton}>
                        <Text style={styles.registerButtonText}>Create Account</Text>
                    </TouchableOpacity>

                </View>
            </ViewContainer>
    )
  }
}
// login page design in styles