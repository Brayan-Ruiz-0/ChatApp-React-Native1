import React from 'react'   
import {ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export const RegisterScreen = () => {
  return (
   <ScrollView>
  <View style={styles.container}>
        <Text style={styles.login}>Create a new Acount</Text>
      <View style={styles.card}>

      <TextInput
            style={styles.username}
            placeholder="Username"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.email}
            placeholder="Email"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.password}
            placeholder="Password"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.password}
            placeholder="Password Again"
            placeholderTextColor="#000"
          />
      </View>
      <TouchableOpacity style={styles.fab} activeOpacity={0.75}>
          <Text style={styles.button}>Register</Text>
        </TouchableOpacity>
    </View>    
   </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {  flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(250, 250, 250)',
        marginTop: 80
      },
      login: {
        fontSize: 40,
        color: '#000',
        marginBottom: 80,
      },
      card: {
        flex: 1,
        justifyContent: 'space-evenly',
        width: '90%',
        height: 410,
        backgroundColor: '#fff',
        opacity: 1,
        borderRadius: 10,
        alignItems: 'center',
      },
      username:{
        fontSize: 20,
        fontWeight: 'bold',
        width: '80%',
        height: 46,
        color: '#000',
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 20,
        backgroundColor: '#eeeeeeee',
        paddingLeft: 30
      },   
      email:{
        
          fontSize: 20,
          fontWeight: 'bold',
          width: '80%',
          height: 46,
          color: '#000',
          borderWidth: 1,
          borderColor: '#000',
          marginTop: 20,
          backgroundColor: '#eeeeeeee',
          paddingLeft: 30
        ,   
      },
      password:{
       
          fontSize: 20,
          fontWeight: 'bold',
          width: '80%',
          height: 46,
          color: '#000',
          borderWidth: 1,
          borderColor: '#000',
          marginTop: 20,
          backgroundColor: '#eeeeeeee',
          paddingLeft: 30
        
      },
      fab: {
        backgroundColor: '#000',
        width: 250,
        height: 50,
        borderRadius: 100,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        color: '#fff',
      },
      
});