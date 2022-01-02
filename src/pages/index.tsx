import * as React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAppSelector } from 'src/stores'

import Home from './Home'
import Login from './Login'

const Stack = createNativeStackNavigator()

function Navigation() {
	const { accessToken } = useAppSelector(state => state.authSlice)
	console.log('accessToken', accessToken)

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{!accessToken
					? <Stack.Screen name="Login" component={Login} />
					: <Stack.Screen name="Home" component={Home} />}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
