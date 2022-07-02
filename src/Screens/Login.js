import React, { useState }  from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import CheckBox from 'expo-checkbox';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const Login = () => {

    const [agree, setAgree] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    console.log(userName);

    const getlogin = () => {
        Alert.alert(userName)
    }

      return (
         <View style = {styles.mainContainer}>
            <View style = {styles.inputText}>
                <Text>
                    Enter Your name 
                </Text>
                <TextInput 
                 style = {styles.input} 
                 autoCapitalize = "none"
                 autoCorrect = {false}
                 value={userName} 
                 onChangeText={ (actualData) => setUserName(actualData)}
                />
            </View>
            <View style = {styles.inputText}>
                <Text>
                    Enter Your password
                </Text>
                <TextInput style = {styles.input}
                 autoCapitalize = "none"
                 autoCorrect = {false}
                 secureTextEntry = {true}
                 value={password} 
                 onChangeText={ (actualData) => setPassword(actualData)}
                />
            </View>
            
            <View style = {[ styles.wrapper , styles.inputText ]}  >
            <CheckBox
               value = { agree }
                onValueChange = { () => { setAgree(!agree) }}
                color = {agree ? "#4630EB" : undefined}
            />
            <Text> I have read the terms and conditons</Text>
            </View>

            <TouchableOpacity 
                style = {[ styles.log, { backgroundColor  : agree ? "#4630EB" : "grey" } , ]}  
                disabled = {!agree}
                onPress = { () => getlogin() } >
                <Text style = {styles.login} >Login</Text>
            </TouchableOpacity>
         </View>
      )
}

export default Login

const styles = StyleSheet.create({
   mainContainer : {
        paddingTop : 100
   },
   inputText: {
    marginHorizontal : 50,
 },
    input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      marginBottom: 20
   } ,
   wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
   },
   login : {
    color: "white",
    textAlign : "center"
  },
  log : {
    margin : 50
  }
})