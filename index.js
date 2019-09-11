/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Revenue from './src/components/Revenue'
import ListProducts from './src/components/ListProducts'

AppRegistry.registerComponent(appName, () => Revenue);
