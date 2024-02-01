import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
// import Login from './src/Screens/Auth/Login/Login'
import AuthScreen from './src/Screens/Auth/authScreen/AuthScreen'
// import Signup from './src/Screens/Auth/Signup/Signup'
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// const Stack = createStackNavigator();
function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Screen/>
    // </NavigationContainer>
    <View style={styles.container}>
      {/* <Login/> */}
      {/* <Signup/> */}
      <AuthScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontFamily:"Poppins-Regular"
    
  },
})