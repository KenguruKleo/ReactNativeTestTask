import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Router, Scene} from 'react-native-router-flux';
import { Provider} from 'react-redux';
import configureStore from './reducers/configureStore';
import Login from './containers/login';

import pack from '../package';
const VERSION = pack.version;

const store = configureStore();

class ReactNativeTestTask extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router sceneStyle={{ backgroundColor: 'white' }}>
                    <Scene key='root' hideNavBar>
                        <Scene key='login'
                               component={Login}
                               title="Login"
                               initial />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}


export default function native (platform) {
    AppRegistry.registerComponent('ReactNativeTestTask', () => ReactNativeTestTask);
}
