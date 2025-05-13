import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Login from '../pages/login';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (

      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" options={{tabBarStyle: { display: 'none' }, title: "LogOut", tabBarIcon: () => {return (<Text>Lộc</Text>)} }}  component={Login} />
      </Tab.Navigator>
  );
}