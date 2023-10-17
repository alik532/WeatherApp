import classes from '../styles/HourForecast.module.css'
import { IHourWeather } from '../types/types'
import {FC} from 'react'

const HourForecast:FC<IHourWeather> = ({temp_c, condition, time}) => {
  return (
    <div className={classes.item}>
      <h3 className={classes.time}>{time.substring(11, time.length)}</h3>
      <img src={condition.icon} className={classes.icon} alt="" />
      <h2 className={classes.temp}>{temp_c.toFixed(0)}&#176;</h2>
    </div>
  )
}

export default HourForecast