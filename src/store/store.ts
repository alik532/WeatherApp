import { configureStore } from "@reduxjs/toolkit";
import userPreferences from "../reducers/userPreferences";
import cities from "../reducers/citiesReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({ 
	reducer: {
		userPreferences: userPreferences,
		cities: cities,
	},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch