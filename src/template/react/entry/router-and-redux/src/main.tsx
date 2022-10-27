
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistor } from '@/stores'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import './assets/css/reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<HashRouter>
					<App />
				</HashRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
)
