import counterReducer from './counterSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
}
const persistReducers = persistReducer(
	persistConfig,
	combineReducers({
		counter: counterReducer,
	}),
)

const store = configureStore({
	reducer: persistReducers,
	// {
	// 	counter: counterReducer,
	// 	...persistReducers,
	// },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
export const persistor = persistStore(store)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
