/**
 * Created by zhuhuiping on 2017/7/5.
 */
import React, { Component } from 'react';
import {Platform} from 'react-native';
import { Navigation } from  'react-native-navigation';
import { registerScreens } from './screens';
registerScreens();

const tabs = [
    {
        label: 'market',
        screen: 'RNDemo.MarketTabScreen',
        icon: require('../image/ibd-market-icon.png'),
        selectedIcon: require('../image/ibd-market-icon-selected.png'),
        title: 'Screen One',
    },
    {
        label: 'news',
        screen: 'RNDemo.NewsTabScreen',
        icon: require('../image/ibd-news-icon.png'),
        selectedIcon: require('../image/ibd-news-icon-selected.png'),
        title: 'Screen Two',
    },
    {
        label: 'more',
        screen: 'RNDemo.MoreTabScreen',
        icon: require('../image/ibd-more-icon.png'),
        selectedIcon: require('../image/ibd-more-icon-selected.png'),
        title: 'Screen Three',
    }
];
Navigation.startTabBasedApp(
    {
        tabs,
        animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade'
    }
);

//AppRegistry.registerComponent('RNDemo', () => RNDemo);