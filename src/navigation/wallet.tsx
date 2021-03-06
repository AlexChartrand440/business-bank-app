import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WalletScreen from '../screens/Wallet'

const Stack = createStackNavigator()

const Wallet = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Wallet" component={WalletScreen} />
    </Stack.Navigator>
  )
}

export default Wallet
