import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import GoogleLogo from "../../../assets/Images/googleLogo.png";
const AuthScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={['#000', '#43116A']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>

      <View>

        <Text style={styles.heading}>Connect friends easily & quickly</Text>
        <Text style={styles.text}>Our chat app is the perfect way to stay connected with friends and family.</Text>

        <View style={styles.imgContainer}>
          <Image style={styles.img} source={GoogleLogo} />
        </View>

        <View style={styles.container_2}>
          <View style={styles.border_1}></View>
          <Text style={styles.text_2}>OR</Text>
          <View style={styles.border_1}></View>
        </View>

        <TouchableOpacity style={styles.toch}>
          <Text style={styles.text_3} >Sign up with mail</Text>
        </TouchableOpacity>
<View style={styles.container_3}>
  <Text style={styles.text_4}>Existing accouct?</Text>
  <Text style={styles.text_5}>Log in</Text>
</View>

      </View>

    </LinearGradient>


  )
}

export default AuthScreen

const styles = StyleSheet.create({
  gradient: {

  },
  heading: {
    fontSize: 68, color: 'white',
    paddingStart: 26,
    fontFamily:"Poppins-Regular"
  },
  container: {
    color: 'white',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    paddingStart: 26,
    marginTop: 39,
    color: "rgba(255, 255, 255, 0.50)",
    lineHeight: 26,
    fontFamily:"Poppins-Regular"
  },
  text_2: {
    color: "white",
    marginHorizontal: 12,
    fontFamily:"Poppins-ExtraBold"
  },
  text_3: {
    color: "white",
    alignSelf:"center",
    marginVertical:11,
    fontFamily:"Poppins-Regular"
  },
  
  img: {
    width: 32,
    height: 32,
    alignSelf: "center",
  },
  imgContainer: {
    alignSelf: "center",
    justifyContent: 'center',
    width: 48,
    height: 48,
    marginTop: 44,
    backgroundColor: "rgba(255, 255, 255, 0.19)",
    borderRadius: 45,
  },

  border_1: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    opacity: 0.2,
    width: 132,
    marginBottom: 14,
  },

  container_2: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center"
  },
  toch:{
    backgroundColor:"rgba(255, 255, 255, 0.50)",
    marginTop:30,
    width:320,
    alignSelf:"center",
    borderRadius:18
    
  },
  container_3: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center"
  },
  text_4: {
    color: "white",
    alignSelf:"center",
    fontFamily:"Poppins-Regular"
  },
  text_5: {
    color: "white",
    marginStart:4,
    fontFamily:"Poppins-SemiBold",
    alignSelf:"center",
  },


})