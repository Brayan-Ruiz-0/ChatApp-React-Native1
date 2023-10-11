import React from 'react'   
import {ScrollView, View, Text, StyleSheet, TextInput} from 'react-native'

export const RegisterScreen = () => {
  return (
   <ScrollView>
  <View style={styles.container}>
        <Text style={styles.login}>Create a new Acount</Text>
      <View style={styles.card}>
      <TextInput
            // style={styles.username}
            placeholder="Username"
            placeholderTextColor="#000"
          />
          <TextInput
            // style={styles.username}
            placeholder="Email"
            placeholderTextColor="#000"
          />
          <TextInput
            // style={styles.username}
            placeholder="Password"
            placeholderTextColor="#000"
          />
          <TextInput
            // style={styles.username}
            placeholder="Username"
            placeholderTextColor="#000"
          />
      </View>
    </View>    
   </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {  flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(250, 250, 250)',
      },
      login: {
        fontSize: 40,
        color: '#000',
        marginBottom: 0,
      },
      card: {
        flex: 1,
        justifyContent: 'center',
        width: '90%',
        height: 500,
        backgroundColor: 'rgba(250, 250, 250, .5)',
        opacity: 1,
        borderRadius: 40,
        alignItems: 'center',
      }    
});