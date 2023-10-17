import './App.css'
import { Location, WindSpeed, Vision, Humidity, Arrow } from './assets'
import { useEffect, useState } from 'react'
import { useAppSelector } from './hooks';
import formatDateString from './helpers/formatDateString';
import HourForecast from './components/HourForecast';
import { fetchForecast } from './reducers/citiesReducer';
import { useAppDispatch } from './store/store';
import CityItem from './components/CityItem';
import CitiesModal from './components/CitiesModal';
import { Cities } from './constants/cities';
import ForecastModal from './components/ForecastModal';

function App() {

  const currentCity = useAppSelector(state => state.cities.currentCity)
  const forecastCities = useAppSelector(state => state.cities.cities)
  const forecastStatus = useAppSelector(state => state.cities.status)
  const dispatch = useAppDispatch()

  const [isCitiesModalOpen, setIsCitiesModalOpen] = useState(false)
  const [isForecastModalOpen, setIsForecastModalOpen] = useState(false)

  useEffect(() => {
    if (forecastStatus == 'idle') {
      dispatch(fetchForecast(currentCity))
    }
    if (forecastStatus == 'succeeded') {
      setCurrentCityForecast(forecastCities.find(city => city.location.name == currentCity))
    }
  }, [forecastStatus, currentCity, dispatch, forecastCities])
  
  const [currentCityForecast, setCurrentCityForecast] = useState(forecastCities.find(city => city.location.name == currentCity))
  console.log(currentCityForecast, forecastCities)

  if (forecastStatus == 'loading')
    {return <div>Loading...</div>}
  else if (forecastStatus == 'succeeded' && currentCityForecast) {
    return (
      <div className='App'>
        <div className='background_gradient'>
          <div className='container main'>
            <div className="location">
              <h1 className='city_name'><img src={Location} className='locationIcon' alt="" />{currentCityForecast.location.name}</h1>
              <h2 className='date'>{formatDateString(currentCityForecast.location.localtime)}</h2>
            </div>
            <div className='main_panel'>
              <h1 className='temp'>{currentCityForecast.current.temp_c.toFixed(0)}&#176;</h1>
              <div className='condition'>
                <img src={currentCityForecast.current.condition.icon} className='main_icon' alt="" />
                <h2 className='condition_text'>{currentCityForecast.current.condition.text}</h2>
              </div>
            </div>
            <div className='info_panel'>
              <div className='metric'>
                <img src={WindSpeed} alt="" className='metric_icon' />
                <h2 className='metric_value'>{currentCityForecast.current.wind_kph+" km/h"}</h2>
                <h4 className='metric_name'>Wind speed</h4>
              </div>
              <div className='metric'>
                <Humidity size={60}/>
                <h2 className='metric_value'>{currentCityForecast.current.humidity+" %"}</h2>
                <h4 className='metric_name'>Humidity</h4>
              </div>
              <div className='metric'>
                <Vision size={60}/>
                <h2 className='metric_value'>{currentCityForecast.current.vis_km+" km"}</h2>
                <h4 className='metric_name'>Vision</h4>
              </div>
            </div>
            <div className='today'>
              <div className="today_heading">
                <h2 className='today_txt'>Today</h2>
                <button className='forecast_link' onClick={() => setIsForecastModalOpen(true)}><h2>3-Day Forecast</h2><img src={Arrow} alt="" /></button>
              </div>            
            </div>
          </div>
          <div className="list">
            {currentCityForecast.forecast.forecastday[0].hour.map(hour => 
              <HourForecast key={hour.time} time={hour.time} temp_c={hour.temp_c} condition={hour.condition} is_day={hour.is_day}/>
            )}
          </div>
          <div className='container'>
            <div className='today'>
                <div className="today_heading">
                  <h2 className='today_txt'>Other cities</h2>
                  <button className='forecast_link' onClick={() => setIsCitiesModalOpen(true)}><h2>Add a city +</h2></button>
                </div>            
              </div>
          </div>
          <div className='cities'>
            {forecastCities.slice(1).map(city => 
              <div className='cityItem' onClick={() => setCurrentCityForecast(city)} key={city.location.name}>
                <CityItem isPicked={currentCityForecast == city} name={city.location.name} status={city.current.condition.text} icon={city.current.condition.icon} temprature={city.current.temp_c}/> 
              </div> 
            )}
          </div>
        </div>
        <CitiesModal isOpen={isCitiesModalOpen} setIsOpen={setIsCitiesModalOpen} cities={Object.values(Cities)}/>
        <ForecastModal isOpen={isForecastModalOpen} setIsOpen={setIsForecastModalOpen} forecast={currentCityForecast.forecast}/>
      </div>
    )
  }
  else {
    return (<div>Error</div>)
  }
}

export default App
