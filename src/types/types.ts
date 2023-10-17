export interface IResponse {
	current: {
		temp_c: number,
		is_day: boolean,
		temp_f: number,
		condition: ICondition,
		wind_kph: number,
		wind_dir: string,
		humidity: number,
		vis_km: number,
		pressure_mn: number,
	},
	forecast: IForecast,
	location: {
		name: string,
		country: string,
		localtime: string,
	}
}

export interface IForecast {
	forecastday: Array<IForecastDay>
}

export interface IForecastDay {
	date: Date,
	day: IDayWeather,
	astro: IAstro,
	hour: Array<IHourWeather>,
}


export interface IDayWeather {
	maxtemp_c: number,
	mintemp_c: number,
	avgtemp_c: number,
	avgvis_km: number,
	avghumidity: number,
	maxwind_kph: number,
	condition: ICondition,
}

export interface IAstro {
	sunrise: string,
	sunset: string,
}

export interface IHourWeather {
	time: string,
	temp_c: number,
	is_day: boolean,
	condition: ICondition,
}

export interface ICondition {
	text: string,
	icon: string,
}