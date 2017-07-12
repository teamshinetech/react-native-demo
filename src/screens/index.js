import { Navigation } from 'react-native-navigation';
import marketTabScreen from './MarketTabScreen';
import newsTabScreen from './NewsTabScreen';
import moreTabScreen from './MoreTabScreen';

export  function registerScreens() {
    Navigation.registerComponent('RNDemo.MarketTabScreen', () => marketTabScreen);
    Navigation.registerComponent('RNDemo.NewsTabScreen', () => newsTabScreen);
    Navigation.registerComponent('RNDemo.MoreTabScreen', () => moreTabScreen);
}