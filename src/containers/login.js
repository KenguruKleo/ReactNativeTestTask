import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import { sendAuthRequest, clearAuthError } from '../reducers/auth';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
    onPressLogin(){
        this.props.sendAuthRequest(this.state.login, this.state.pass);
    }

    constructor(props) {
        super(props);
        this.state = {login: '', pass: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Login
                </Text>
                <TextInput
                    style={{width: '50%', borderColor: 'gray', borderWidth: 1}}
                    placeholder={'Your login'}
                    onChangeText={login => {this.setState({login}); this.props.error && this.props.clearAuthError()}}
                />
                <TextInput
                    style={{width: '50%', borderColor: 'gray', borderWidth: 1}}
                    placeholder={'Your password'}
                    secureTextEntry={true}
                    onChangeText={pass => {this.setState({pass}); this.props.error && this.props.clearAuthError()}}
                />
                <Button
                    onPress={this.onPressLogin.bind(this)}
                    title="Login"
                    style={{width: '50%', color: 'gray', borderWidth: 1}}
                    accessibilityLabel="Learn more about this purple button"
                />
                {
                    this.props.error ? <Text style={{color: 'red'}}> {this.props.error}</Text> : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    }
});

export default connect(
    state => ({error: state.auth.error}), { sendAuthRequest, clearAuthError }
)(Login);
