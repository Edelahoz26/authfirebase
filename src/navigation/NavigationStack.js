//Components
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';

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
        options={{
          title: "",
          headerShown: true,
          animationEnabled: true,
          headerStyle: {
            backgroundColor: "#f2f2f2",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
