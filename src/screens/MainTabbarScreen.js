import React from 'react';
import { Image, Dimensions } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Feed from './Feed';
import Calendar from './Calendar';
import News from './News';
import User from './User';

import * as ICONS from '../resources'
import * as COLOR from '../constants/colors'

const { height } = Dimensions.get('window');

const MainTabbarScreen = createBottomTabNavigator({
    User: User,
    Feed: Feed,
    News: News,
    Calendar: Calendar,
},
    {
        swipeEnabled: false,
        animationEnabled: true,
        gesturesEnabled: false,
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let icon = null
                if (routeName === 'Feed') {
                    icon = focused ? ICONS.TB_IC_FEED_SELECTED : ICONS.TB_IC_FEED
                } else if (routeName === 'User') {
                    icon = focused ? ICONS.TB_IC_USER_SELECTED : ICONS.TB_IC_USER
                } else if (routeName === 'News') {
                    icon = focused ? ICONS.TB_IC_NEWS_SELECTED : ICONS.TB_IC_NEWS
                } else if (routeName === 'Calendar') {
                    icon = focused ? ICONS.TB_IC_CAL_SELECTED : ICONS.TB_IC_CAL
                }
                return <Image
                    style={{ height: 20, width: 20 }}
                    source={icon}
                    resizeMode={'contain'}
                />;
            },
        }),
        tabBarOptions: {
            activeTintColor: COLOR.TAB_SELECTED,
            inactiveTintColor: COLOR.TAB_NORMAL,
        },
    });

export default createAppContainer(MainTabbarScreen);


