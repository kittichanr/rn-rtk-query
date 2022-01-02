import React, { useState } from 'react'

import { View, Text, Button } from 'react-native'

import { useNavigation, StackActions } from '@react-navigation/native'
import { useLogoutMutation } from 'src/api/auth'
import { useGetPeopleQuery } from 'src/api/starWars'
import { useAppDispatch, useAppSelector } from 'src/stores'
import { resetStateAction } from 'src/stores/actions'
import { remove } from 'src/stores/middlewares/remove'

const Home = () => {
	const navigation = useNavigation()
	const dispatch = useAppDispatch()
	const [count, setCount] = useState(1)
	const { data } = useGetPeopleQuery(count, { skip: !count })

	const [logout, { }] = useLogoutMutation()

	const { refreshToken } = useAppSelector(state => state.authSlice)

	const onLogout = async () => {
		try {
			const data = await logout({
				refreshToken
			})
			if(data) {
				remove()
				dispatch(resetStateAction())
			}
		} catch(err) {
			console.log(err)
		}
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>{data?.name}</Text>
			<Button title="click" onPress={() => setCount(count + 1)} />
			<Button title="logout" onPress={onLogout} />
		</View>
	)
}

export default Home
