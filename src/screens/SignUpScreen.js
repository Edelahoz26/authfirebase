import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUpScreen = () => {
  return (
    <View style={styles.containerLogin}>
      <Text>SignUpScreen</Text>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})