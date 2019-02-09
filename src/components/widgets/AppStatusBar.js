import React from 'react';
import { StatusBar } from 'react-native';
import { app_status_bar_color } from '../../styles';


export default AppStatusBar = () => {
    return (
        <StatusBar backgroundColor={app_status_bar_color} />
    );
}