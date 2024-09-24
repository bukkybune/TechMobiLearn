import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from "../Shared/Colors"
import Fontisto from '@expo/vector-icons/Fontisto';



export default function Login() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./../Assests/Image/pics.png')}
        style={styles.image}/>
      <View style ={styles.container}> 
          <Text style = {styles.welcomeText}>Welcome to TechMobiLearn</Text>
        <Text style={{textAlign:"center",
      marginTop:80,fontSize:25}}>Login/Signup</Text>
        <View style={styles.button }>
          <Fontisto name="google" size={24} 
           color="Black" style={{marginRight:10}} />
          <Text style={{color:Colors.black}}>Sign In With Google</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 1,
    marginTop: -30,
    backgroundColor: "#fff",
    boarderTopRightRadius: 20,
    boarderTopLeftRadius: 20,
    flex:1
  },
  image:{
    width: "100%",
    height: 300,
    resizeMode: "cover"
  }, 

  welcomeText:{
    fontSize:35,
    textAlign:"center",
    fontWeight:"bold",  
  },
  button:{
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  }
})