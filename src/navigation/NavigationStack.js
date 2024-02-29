//Components
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import SignUpScreen from "../screens/SignUpScreen";

const NavigationStack = (props) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, animationEnabled: true }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, animationEnabled: true }}
      />
      <Stack.Screen
        name="Register"
        component={SignUpScreen}
        options={{ headerShown: true, animationEnabled: true }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
