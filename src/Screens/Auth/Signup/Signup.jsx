import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, ScrollView, TouchableOpacity, TouchableOpacityBase, Touchable, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import goBack from "../../../assets/Images/goBack.png"
// import { FIREBASE_AUTH } from '../../../config/firebase';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setSetConfirPassword] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    // const auth = FIREBASE_AUTH;

    const Signup = async () => {
        setLoading(true);
        try {

        } catch (error) {

        }
    }

    return (

        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container_2} >

                <View>
                    <Image style={styles.img} source={goBack} />
                    <View style={styles.container_1}>
                        <Text style={styles.text_1}>Sign up with Email</Text>

                        <Text style={styles.text_2} >Get chatting with friends and family today by signing up for our chat app!</Text>

                    </View>

                   
                    <Text style={styles.label}>Your name</Text>
                    <TextInput value={name} style={styles.input} autoCapitalize='none' keyboardType="name-phone-pad" onChangeText={(text) => setName(text)} />
                    <Text style={styles.label}>Your email</Text>
                    <TextInput value={email} style={styles.input} autoCapitalize='none' keyboardType="email-address" onChangeText={(text) => setEmail(text)} />
                    <Text style={styles.label}>Password</Text>
                    <TextInput value={password} style={styles.input_pass} autoCapitalize='none' onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput value={confirmPassword} style={styles.input_pass} autoCapitalize='none' onChangeText={(text) => setSetConfirPassword(text)} secureTextEntry={true} />
                </View>
                <View>
                    <TouchableOpacity style={styles.touch}>
                        <LinearGradient style={styles.btn}
                            colors={['#000', '#43116A']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}>

                            <Text style={styles.text} >Create an account</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                
                </View>




            </ScrollView>
        </View>
    );
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        flex: 1,
        
    },
    container_2: {
        flex: 1,
    },
    input: {
        height: 38,
        borderBottomWidth: 1,
        borderBottomColor: "#CDD1D0",
        padding: 10,
    },
    input_pass: {
        height: 38,
        borderBottomWidth: 1,
        borderBottomColor: "#CDD1D0",
        padding: 10,
    },
    btn: {
        marginTop: 10,
        alignItems: "center",
        borderRadius: 12,
        fontFamily:"Poppins-Regular"
    },
    text: {
        color: "white",
        paddingVertical: 10,
        fontFamily:"Poppins-SemiBold",
    },
    img: {
        marginTop: 17,
        width: 18,
        height: 13,
    },
    text_1: {
        color: "#3D4A7A",
        marginTop: 60,
        fontSize: 18,
        fontFamily:"Poppins-Bold",
    },
    text_2: {
        color: "#797C7B",
        marginTop: 19,
        marginBottom: 20,
        width: 293,
        textAlign: "center",
        fontFamily:"Poppins-Regular"
    },
    container_1: {
        alignItems: "center"
    },
    border_1: {
        borderBottomWidth: 1,
        borderBottomColor: "#CDD1D0",
        width: 132,
        marginBottom: 9,
    },
    container_3: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center"
    },
    text_3: {
        color: "#797C7B",
        marginHorizontal: 12,
        fontWeight: "900",
    },
    imgContainer: {
        alignSelf: "center",
        justifyContent: 'center',
        width: 48,
        height: 48,
        backgroundColor: "rgba(255, 255, 255, 0.19)",
        borderRadius: 45,
    },
    img_1: {
        width: 32,
        height: 32,
        alignSelf: "center",
    },
    text_4: {
        color: "#3D4A7A",
        fontWeight: "500",
        marginTop: 16,
        marginBottom: 40,
        textAlign: "center",
    },
    container_4:{
        flex:1,
    },
    scrollContent: {
        justifyContent: 'space-between',
        flexGrow: 1,
     },
  label:{
    color:"#3D4A7A",
   height:12.5,
   fontSize:10,
    marginTop:40,
    fontFamily:"Poppins-SemiBold"
  },
  touch:{
    marginBottom:40,
    fontFamily:"Poppins-Regular"
  }

})