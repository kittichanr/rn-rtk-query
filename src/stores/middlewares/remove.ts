import AsyncStorage from '@react-native-async-storage/async-storage'

export const remove = async() => {
	await AsyncStorage.removeItem('persist:token')
}
