
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import Main from '../../pages/main'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

const Stack = createStackNavigator()

export const Routes = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen component={Main} name='Main'></Stack.Screen>
            <Stack.Screen component={Login} name='Login'></Stack.Screen>
            <Stack.Screen component={Register} name='Register'></Stack.Screen>
        </Stack.Navigator>


    )
}

export default Routes;
