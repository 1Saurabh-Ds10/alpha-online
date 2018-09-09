import './src/config/ReactronConfig';

import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';

import {name as appName} from './app.json';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.ignoredYellowBox = ['Remote debugger'];



AppRegistry.registerComponent(appName, () => App);