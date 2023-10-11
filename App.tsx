import React from 'react'
import { SafeAreaView } from 'react-native'
import { LoginScreen } from './Src/screens/LoginScreen'
import { RegisterScreen } from './Src/screens/RegisterScreen'

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginScreen/>
      {/* <RegisterScreen/> */}


    </SafeAreaView>
  )
}

