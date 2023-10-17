import { createSlice } from '@reduxjs/toolkit'

interface IUserPreferences {
    isDarkMode: boolean,
	language: string,
}

const initialState:IUserPreferences = {
	isDarkMode: false,
	language: 'asd'
}

export const userPreferences = createSlice({
	name: 'userPreferences',
	initialState,
	reducers: {
		switchMode: (state) => {
			state.isDarkMode = !state.isDarkMode
		}
	}
})

export const {switchMode} = userPreferences.actions

export const selectIsDarkMode = ( state: IUserPreferences ) => state.isDarkMode

export default userPreferences.reducer