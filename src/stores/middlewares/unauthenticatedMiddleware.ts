import AsyncStorage from '@react-native-async-storage/async-storage'
import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit'

import { resetStateAction } from '../actions'

import { remove } from './remove'

export const unauthenticatedMiddleware: Middleware = ({ dispatch }) => next => action => {
	// if(action?.payload?.name === 'R2-D2') {
	// 	remove()
	// 	dispatch(resetStateAction())
	// }
	if(isRejectedWithValue(action) && action?.payload?.status === 401) {
		remove()
		dispatch(resetStateAction())
	}

	return next(action)
}
