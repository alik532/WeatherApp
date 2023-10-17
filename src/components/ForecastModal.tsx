import {FC} from 'react'
import { IForecast } from '../types/types'
import classes from '../styles/ForecastModal.module.css'
import { Humidity, Vision } from '../assets'

interface IForecastModal {
  isOpen: boolean,
  setIsOpen: (v: boolean)=>void,
  forecast: IForecast,
}

const ForecastModal:FC<IForecastModal> = ({isOpen, setIsOpen, forecast}) => {
  const months:Array<string> = ['Jan', 'Feb', 'Apr', 'May', "Mar", 'June', "July", 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  console.log(isOpen)
  return (
    <div className={classes.modal} onClick={() => setIsOpen(false)} style={{display: isOpen ? 'flex' : "none"}}>
      <div className={classes.exit}>X</div>
      <div className={classes.content}>
        {forecast.forecastday.map((day, indx) => 
          (<div key={day.date.toString()} className={classes.day}>
            <h2 className={classes.dayHeader}>{['Today', 'Tomorrow', "After Tomorrow"][indx]}</h2>
            <div className={classes.dayContent}>
              <div className={classes.mainInfo}>
                <img src={day.day.condition.icon} className={classes.icon} alt="" />
                <h3 className={classes.temp}>{day.day.maxtemp_c.toFixed(0) + ' / ' + day.day.mintemp_c.toFixed(0)}&#176;</h3>
                <h4 className={classes.condition }>{day.day.condition.text}</h4>
              </div>
              <div className={classes.additionalInfo}>
                <h2 className={classes.date}>{new Date(day.date).getDate() + " " + months[new Date(day.date).getMonth()]}</h2>
                <div className={classes.avgInfo}>
                  <Humidity/>
                  <h3 className={classes.avgTxt}>{day.day.avghumidity+" "}%</h3>
                </div>
                <div className={classes.avgInfo}>
                  <Vision/>
                  <h3 className={classes.avgTxt}>{day.day.avgvis_km+" "}km</h3>
                </div>
              </div>
            </div>
          </div>)  
        )}
      </div>
    </div>
  )
}

export default ForecastModal