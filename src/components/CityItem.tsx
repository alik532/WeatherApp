import {FC} from 'react'
import classes from '../styles/CityItem.module.css'

interface ICityItem {
	name: string,
	status: string,
	icon: string,
	temprature: number,
	isPicked: boolean,
}

const CityItem:FC<ICityItem> = ({name, status, icon, temprature, isPicked}) => {
  return (
	<div className={classes.item} style={isPicked ? {border: "2px yellow solid", color: "yellow"}: {}}>
		<img className={classes.icon} src={icon} alt="" />
		<div className={classes.data}>
			<h2 className={classes.city}>{name}</h2>
			<h3 className={classes.status}>{status}</h3>
		</div>
		<h4 className={classes.temprature}>{temprature.toFixed(0)}&#176;</h4>
	</div>
  )
}

export default CityItem