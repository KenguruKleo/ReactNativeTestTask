import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Router, Scene} from 'react-native-router-flux';
import { Provider} from 'react-redux';
import configureStore from './reducers/configureStore';
import Login from './containers/login';
import Feed from './containers/feed';

import pack from '../package';
const VERSION = pack.version;

const store = configureStore();

const TabIcon = ({ selected, title}) => {
    return (
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
}

class ReactNativeTestTask extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router sceneStyle={{ backgroundColor: 'white' }}>
                    <Scene key='root' hideNavBar>

                        <Scene
                            key="rootTabBar"
                            tabs={true}
                            tabBarStyle={{backgroundColor: '#ffffff'}}>
                            <Scene key="login" component={Login} title="Login" icon={TabIcon} initial />
                            <Scene key="feed" component={Feed} title="Feed" icon={TabIcon} />
                        </Scene>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}


export default function native (platform) {
    AppRegistry.registerComponent('ReactNativeTestTask', () => ReactNativeTestTask);
}
