import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import goBack from "../../../assets/Images/goBack.png"
import GoogleLogo from "../../../assets/Images/googleLogo.png";
// import { FIREBASE_AUTH } from '../../../config/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    // const auth = FIREBASE_AUTH;

    const Login = async () => {
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
                        <Text style={styles.text_1}>Log in to Chatbox</Text>

                        <Text style={styles.text_2} >Welcome back! Sign in using your social account or email to continue us</Text>

                    </View>

                    <View style={styles.imgContainer}>
                        <Image style={styles.img_1} source={GoogleLogo} />
                    </View>

                    <View style={styles.container_3}>
                        <View style={styles.border_1}></View>
                        <Text style={styles.text_3}>OR</Text>
                        <View style={styles.border_1}></View>
                    </View>
                    <Text style={styles.label}>Your email</Text>
                    <TextInput value={email} style={styles.input} autoCapitalize='none' keyboardType="email-address" onChangeText={(text) => setEmail(text)} />
                    <Text style={styles.label}>Password</Text>
                    <TextInput value={password} style={styles.input_pass} autoCapitalize='none' onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
                </View>
                <View>
                    <TouchableOpacity style={styles.toch}>
                        <LinearGradient style={styles.btn}
                            colors={['#000', '#43116A']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}>

                            <Text style={styles.text} >Log in</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                <Text style={styles.text_4} >Forgot password?</Text>
                </View>
   




            </ScrollView>
        </View>
    );
}

export default Login;

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
        borderRadius: 12
    },
    text: {
        color: "white",
        paddingVertical: 10,
        fontFamily:"Poppins-Bold"
    },
    img: {
        marginTop: 17,
        width: 18,
        height: 13,
    },
    text_1: {
        fontFamily:"Poppins-SemiBold",
        color: "#3D4A7A",
        marginTop: 60,
        fontSize: 18,
    },
    text_2: {
        color: "#797C7B",
        marginTop: 19,
        marginBottom: 32,
        width: 293,
        textAlign: "center",
        fontFamily:"Poppins-Light"
    },
    container_1: {
        alignItems: "center"
    },
    border_1: {
        borderBottomWidth: 1,
        borderBottomColor: "#CDD1D0",
        width: 132,
        marginBottom: 14,
    },
    container_3: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center"
    },
    text_3: {
        color: "#797C7B",
        marginHorizontal: 12,
        fontFamily:"Poppins-ExtraBold"
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
    toch: {
    },
    text_4: {
        color: "#3D4A7A",
        fontSize:13,
        fontFamily:"Poppins-SemiBold",
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
   height:12,
   fontSize:10,
    marginTop:12,
    fontFamily:"Poppins-SemiBold"
  }

})