import React, {useState} from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from "react-native";

import appFirebase from "../firebase"
import {getAuth, signInWithEmailAndPassword, } from 'firebase/auth'

const auth = getAuth(appFirebase)
const LoginScreen = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const loginUserWithEmailAndPassword = async() =>{
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Initial login', 'success')
      props.navigation.navigate('Home')
    } catch (error) {
      Alert.alert(error);
    }
  }
  return (

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/nativescript.png")}
          style={styles.logoLogin}
        />
        <Text style={styles.titleLogin}>Welcome back.</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputLogin}
        />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.inputLogin}
          secureTextEntry
        />
        <TouchableOpacity onPress={() => {loginUserWithEmailAndPassword}} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={""}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>


  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    width: "100%",
    height: "100%",
    
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoLogin: {
    width: 200,
    height: 200,
  },
  titleLogin: {
    color: "#000",
    fontSize: 30,
    fontWeight: "700",
    justifyContent: "center",
  },
  inputLogin:{
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10, 
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    
  },
  button: {
    backgroundColor: "#3498db",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
    color: "#000",
  
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#3498db",
    borderWidth: 2,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#3498db",
    fontWeight: "700",
    fontSize: 16,
  },
});
