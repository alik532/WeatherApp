import {FC} from 'react'

const Humidity:FC<{size?: number}> = ({size}) => {
	size = size ? size : 25
  return (
	<svg width={size} height={size + 5} viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13.5665 2.273C13.0999 1.909 12.4517 1.909 11.9851 2.273C9.52213 4.158 2.24996 10.307 2.28885 17.47C2.28885 23.268 6.99436 28 12.7888 28C18.5832 28 23.2887 23.281 23.2887 17.483C23.3016 10.424 16.0165 4.171 13.5665 2.273Z" stroke-width="3" stroke-miterlimit="10"/>
	</svg>
  )
}

export default Humidity