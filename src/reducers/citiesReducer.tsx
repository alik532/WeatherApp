import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Cities } from '../constants/cities'
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit'
import axios from 'axios'
import { IResponse } from '../types/types'

export const fetchForecast = createAsyncThunk('cities/fetchForecast', async (city: Cities) => {
	const options = {
		method: 'GET',
		url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
		params: {
		q: city,
		days: '3'
		},
		headers: {
		'X-RapidAPI-Key': '21984204b7msh3267a67b6624b0ep1c87b2jsn6053aef7f9e6',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};
	console.log(city)
  
	try {
		const response = await axios.request(options);
		console.log(response.data)
		return response.data
	} catch (error) {
		console.error(error);
	}
}) 

interface ICities {
	currentCity: Cities
	cities: Array<IResponse>
	status: string, 
	error: null | SerializedError
}

const initialState:ICities = {
	currentCity: Cities.Almaty,
	cities: [],
	status: 'idle',
	error: null
}

export const cities = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		addCity: (state, action: PayloadAction<Cities>) => {
			if (state.cities.find(city => city.location.name == action.payload) == undefined) {
				state.currentCity = action.payload
				state.status = 'idle'
			}
		}
	},
	extraReducers: function(builder) {
		builder
			.addCase(fetchForecast.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchForecast.fulfilled, (state, action:PayloadAction<IResponse>) => {
				state.status = 'succeeded'
				console.log('request')
				state.cities.push(action.payload)
			})
			.addCase(fetchForecast.rejected, (state, action) => {
				state.status = 'error'
				state.error = action.error
			})
		}
})



export const { addCity } = cities.actions 

export const selectCurrentCity = ( state: ICities ) => state.currentCity
export const selectCities = (state: ICities) => state.cities
export const selectCitiesStatus = (state: ICities) => state.status
export const selectCitiesError = (state: ICities) => state.error

export default cities.reducer