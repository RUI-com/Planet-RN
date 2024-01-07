import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesome5} from '@expo/vector-icons'
//import screen Page..
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Favourite from '../screens/Favourite';
import Profile from '../screens/Profile';
import Qrcode from '../screens/Qrcode';
import {Image} from 'react-native'



// Var navigation

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return(
        <Tab.Navigator
       
        screenOptions={{headerShown: false,tabBarStyle:{
            position:'absolute',
            backgroundColor:'#39B349',
            bottom:10,
            borderRadius:18,
            height:50,
            marginHorizontal:20
        }}}
        
        
        
            
        
        >
        <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:'',
                   
                    tabBarIcon:({focused}) => (
                        <Image
                        source={require('../../assets/iconpage/homeicon.svg')}
                        

                        
                        style={{tintColor:focused ? '#fff':'#006400',width:20,height:20}}
                        />

                        
                    )
                }}
            />

            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel:'',
                  
                    tabBarIcon:({focused}) => (
                        <Image
                        source={require('../../assets/iconpage/personalicon.svg')}
                        

                        
                        style={{tintColor:focused ? '#fff':'#006400',width:20,height:20}}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({focused}) => (
                        <Image
                        source={require('../../assets/iconpage/shopeicon.svg')}
                        

                        
                        style={{tintColor:focused ? '#fff':'#006400',width:20,height:20}}
                        />
                    )
                }}
            />
              <Tab.Screen
                name="Qrcode"
                component={Qrcode}
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({focused}) => (
                        <Image
                        source={require('../../assets/iconpage/Barcodeicon.svg')}
                        

                        
                        style={{tintColor:focused ? '#fff':'#006400',width:20,height:20}}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Home" component={BottomTabNavigation}   />
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
};
export default HomeStackNavigator;
