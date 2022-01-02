import React from 'react'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'src/stores'

import Navigation from './pages'

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Navigation />
			</PersistGate>
		</Provider>
	)
}

export default App
