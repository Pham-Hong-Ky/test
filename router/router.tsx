import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Login from "../pages/login";
import Register from "../pages/register";
import productdetails from "../pages/productdetails";
import Payment from "../pages/payment";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (

      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ProductDetails" component={productdetails} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>

  );
}
