import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'

import { RootState } from '..'

export interface TokenState {
	token?: string
	accessToken?: string
	refreshToken?: string
	expiresAt?: number
}

const initialState: TokenState = {
	token: undefined,
	accessToken: undefined,
	refreshToken: undefined,
	expiresAt: 0,
}

const authSlice = createSlice({
	name: 'authSlice',
	initialState: initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<TokenState>) => {
			return action.payload
		},
		removeCredentials: () => {
			return initialState
		},
	},
	extraReducers: builder => null
})

export const { setCredentials, removeCredentials } = authSlice.actions

export const authReducer = persistReducer({
	key: 'token',
	storage: AsyncStorage,
	whitelist: ['accessToken']
}, authSlice.reducer)

export const selectCurrentUser = (state:RootState) => state.auth.user
