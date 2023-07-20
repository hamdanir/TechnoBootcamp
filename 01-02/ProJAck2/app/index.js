import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './services/router';

export default function IndexLayout() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>


    )
}