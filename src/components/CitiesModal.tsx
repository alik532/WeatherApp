import {FC} from 'react'
import classes from '../styles/CitiesModal.module.css'
import { Cities } from '../constants/cities'
import { useAppSelector } from '../hooks'
import { useActions } from '../hooks'

interface IForecastModal {
  isOpen: boolean,
  setIsOpen: (v: boolean)=>void,
  cities: Array<Cities>,
}

const CitiesModal:FC<IForecastModal> = ({isOpen, setIsOpen, cities}) => {

	const currentCity = useAppSelector(state => state.cities.currentCity)
  const { addCity } = useActions()

  return (
    <div className={classes.modal} onClick={(e) => {setIsOpen(false);e.preventDefault()}} style={{display: isOpen ? 'flex' : "none"}}>
      <div className={classes.content}>
        {cities.filter(city => city !== currentCity.toString()).map(city => 
            <div key={city} className={classes.city} onClick={() => addCity(city)}>{city}</div>	
        )}
      </div>
    </div>
  )
}

export default CitiesModal