import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { authApi } from 'src/api/auth'
import { starWarsApi } from 'src/api/starWars'
import { authReducer } from 'src/stores/slices/authSlice'

import { RESET_STATE_ACTION_TYPE } from './actions'
import { unauthenticatedMiddleware } from './middlewares/unauthenticatedMiddleware'

const reducers = {
	'authSlice': authReducer,
	[starWarsApi.reducerPath]: starWarsApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
}
  
const combinedReducer = combineReducers<typeof reducers>(reducers)

export const rootReducer: Reducer<RootState> = (state, action) => {
	if(action.type === RESET_STATE_ACTION_TYPE) {
	  state = {} as RootState
	}
	return combinedReducer(state, action)
}

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: {
		  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	  }).concat([
		unauthenticatedMiddleware,
		starWarsApi.middleware,
		authApi.middleware
	]),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
