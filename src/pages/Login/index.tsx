import React, { useState } from 'react'

import { View, Text, Button, TextInput } from 'react-native'

import { useLoginMutation } from 'src/api/auth'
import { useAppDispatch } from 'src/stores'

import { setCredentials } from '../../stores/slices/authSlice'

const Login = () => {
	const dispatch = useAppDispatch()

	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')

	const [login, { }] = useLoginMutation()

	const onLogin = async () => {
		try {
			const data = await login({
				email: userName,
				password: password,
			}) as any

			dispatch(setCredentials({
				accessToken: data?.data?.accessToken,
				refreshToken: data?.data?.refreshToken,
				expiresAt: data?.data?.expiresIn,
			}))
		} catch(err) {
			console.log(err)
		}
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Login</Text>
			<TextInput
				style={{ width: '100%', borderWidth: 1, borderColor: 'black' }}
				value={userName}
				onChangeText={text => setUserName(text)}
			/>
			<TextInput
				style={{ width: '100%', borderWidth: 1, borderColor: 'black' }}
				value={password}
				onChangeText={text => setPassword(text)}
			/>
			<Button title="login" onPress={onLogin} />
		</View>
	)
}

export default Login
