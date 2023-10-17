import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from 'react-redux'
import { useMemo } from 'react'
import { switchMode } from "./reducers/userPreferences";
import { addCity } from './reducers/citiesReducer'
import { useDispatch } from "react-redux/es/exports";
import { RootState } from "./store/store";
import { bindActionCreators } from '@reduxjs/toolkit' 

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const rootAction = {
	switchMode,
	addCity,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}