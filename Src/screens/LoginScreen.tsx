import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export const LoginScreen = () => {


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.login}>Login</Text>
        <View style={styles.image}>
          <Image
            style={styles.tinyLogo}
            source={require('../images/logo.png')}
          />
        </View>
        <View style={styles.icos}>
          <Image
            style={styles.userIco}
            source={require('../images/user.png')}
          />
          <TextInput
            style={styles.username}
            placeholder="Username"
            placeholderTextColor="#000"
          />
          <Image
            style={styles.passwordIco}
            source={require('../images/password.png')}
          />
          <TextInput 
          style={styles.password} 
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#000"
          />
               <TouchableOpacity style={styles.registerB} activeOpacity={0.75}>
          <Text style={styles.register}>don't have acount? touch here.</Text>
        </TouchableOpacity>
        </View>
        
        
        <TouchableOpacity style={styles.fab} activeOpacity={0.75}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.remeber}>Remember</Text>
        <Text style={styles.forgot}>forgot your password?</Text>
      </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
   
  },
  image: {
    alignItems: 'center',
    marginTop: 25,
  },
  tinyLogo: {
    width: 90,
    height: 90,
  },
  username: {
    width: '80%',
    height: 36,
    color: '#000',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#eeeeeeee',
    paddingLeft: 30
  },
  password: {
    width: '80%',
    height: 36,
    color: '#000',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#eeeeee',
    paddingLeft: 30
  },
  icos: {
    width: '90%',
    marginLeft: 80,
  },
  userIco: {
    width: 15,
    height: 15,
    position: 'absolute',
    marginTop: 28,
    marginLeft: 9,
    zIndex: 1
  },
  passwordIco: {
    width: 15,
    height: 15,
    position: 'absolute',
    marginTop: 78.5,
    marginLeft: 8,
    zIndex: 1,
  },
  registerB:{    
  backgroundColor: '#fff',
  width: '100%',
  height: 30,
  borderRadius: 100,
  marginTop: 2,
  alignItems: 'flex-start',
  justifyContent: 'center',},

  register:{
    color: '#000',
    fontSize: 15
  },
  fab: {
    backgroundColor: '#000',
    width: 200,
    height: 40,
    borderRadius: 100,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#fff',
  },
  forgotRemember:{
    flex: 1
   
  },
  forgot: {
    fontSize: 13,
    color: '#000',
    marginTop: 10,
    marginLeft: 20,
  },
  remeber: {
    fontSize: 13,
    color: '#000',
    marginTop: 10,
    marginLeft: 10,
  },
})
