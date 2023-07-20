import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../home';
import Profile from '../Profile';
import Performance from '../permfomance';
import { HomeIcon, ProfileIcon, TaskIcon, PerformaIcon, BgPlus, Add } from '../../assets/svg';
import Task from '../Task';
import Plus from '../plus';
import { Fonts } from '../../assets/styles';

const Tab = createBottomTabNavigator();

const customTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',

    }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

export default function Main({ navigation, router }) {
    return (
        <View style={{ flex: 1, }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: "#04325F",
                    tabBarInactiveTintColor: "#CED1D4",
                    tabBarIcon: ({ focused, color, size }) => {
                        let tabsIcon = {
                            Home: <HomeIcon fill={color} width={size} height={size} />,
                            Profile: <ProfileIcon fill={color} width={size} height={size} />,
                            // Plus: <Add fill={color} width={size} height={size} />,
                            Task: <TaskIcon fill={color} width={size} height={size} />,
                            Performance: <PerformaIcon fill={color} width={size} height={size} />,
                        };
                        return <View>{tabsIcon[route.name]}</View>
                    },
                    tabBarLabel: ({ focused, color }) => (
                        <Text bold={focused} fontSize={10} color={focused ? '#04325F' : '#CED1D4'}>{route.name}</Text>

                    ),
                    tabBarStyle: {
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingBottom: 12,
                        paddingTop: 12,
                        height: 70
                    }
                })

                }


            // screenOptions={{
            //     headerShown: false,
            //     tabBarStyle: {
            //         height: 65,
            //         paddingRight: 16,
            //         paddingLeft: 16,
            //         paddingBottom: 11,
            //         paddingTop: 12
            //     },
            //     tabBarActiveTintColor: '#04325F',
            //     tabBarLabelStyle: {
            //         fontSize: 10,
            //         lineHeight: 17,
            //         fontWeight: 700,
            //         fontFamily: Fonts.Nunito.Regular,
            //     },
            // }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Task" component={Task} />
                <Tab.Screen
                    name=' '
                    component={Plus}
                    options={{
                        tabBarIcon: () => (
                            <View style={{ alignItems: 'center', position: 'relative', justifyContent: 'center', marginBottom: 20 }}>
                                <BgPlus style={{ position: 'absolute', zIndex: 1, justifyContent: 'center', alignItems: 'center' }} />
                                <View style={{ position: 'absolute', zIndex: 2, transform: [{ translateX: 0 }, { translateY: -4 }] }}>
                                    <Add fill={'white'} />
                                </View>
                            </View>


                        )

                    }}
                />
                <Tab.Screen name="Performance" component={Performance} />
                <Tab.Screen name="Profile" component={Profile} />
                {/* <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            (<HomeIcon fill={focused ? '#04325F' : '#CED1D4'} />)
                    }}
                />
                <Tab.Screen
                    name='Task'
                    component={Task}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            (<TaskIcon fill={focused ? '#04325F' : '#CED1D4'} />)

                    }}
                />
                <Tab.Screen
                    name=' '
                    component={Plus}
                    options={{
                        tabBarIcon: () => (
                            <View style={{ alignItems: 'center', position: 'relative', justifyContent: 'center', marginBottom: 20 }}>
                                <BgPlus style={{ position: 'absolute', zIndex: 1, justifyContent: 'center', alignItems: 'center' }} />
                                <View style={{ position: 'absolute', zIndex: 2, transform: [{ translateX: 0 }, { translateY: -4 }] }}>
                                    <Add fill={'white'} />
                                </View>
                            </View>


                        )

                    }}
                />
                <Tab.Screen
                    name='Performance'
                    component={Performance}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <PerformIcon fill={focused ? '#04325F' : '#CED1D4'} />
                        )
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <ProfileIcon fill={focused ? '#04325F' : '#CED1D4'} />
                        )
                    }}
                /> */}
            </Tab.Navigator>
        </View>
    )
}