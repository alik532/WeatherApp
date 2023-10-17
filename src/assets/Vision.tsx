import {FC} from 'react'

const Vision:FC<{size?: number}> = ({size}) => {
	size = size ? size : 30
  return (
	<svg width={size+4} height={size} viewBox="0 0 34 30" fill='none' xmlns="http://www.w3.org/2000/svg">
	<path d="M22.9964 15.0079C22.9964 18.1184 20.4828 20.632 17.3723 20.632C14.2617 20.632 11.7482 18.1184 11.7482 15.0079C11.7482 11.8973 14.2617 9.38378 17.3723 9.38378C20.4828 9.38378 22.9964 11.8973 22.9964 15.0079Z" stroke-width="2.39664" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M17.3722 28C22.9178 28 28.0864 24.7323 31.684 19.0768C33.0979 16.8617 33.0979 13.1384 31.684 10.9232C28.0864 5.26767 22.9178 2 17.3722 2C11.8266 2 6.658 5.26767 3.06042 10.9232C1.64653 13.1384 1.64653 16.8617 3.06042 19.0768C6.658 24.7323 11.8266 28 17.3722 28Z" stroke-width="2.39664" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
  )
}

export default Vision