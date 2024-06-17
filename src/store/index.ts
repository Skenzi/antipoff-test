import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import usersReducer from './slices/usersSlice'

const store = configureStore({
    reducer: {
        userState: userReducer,
        usersState: usersReducer
    }
})

export default store;

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>