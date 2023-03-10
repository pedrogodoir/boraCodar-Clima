import './App.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'

type climate = {
    dt: number;
    main: {
      temp: number;
    }
}

export default function app() {
  const [weather, setWeather] = useState<climate[]>([])
  
  useEffect(() => {
    Axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d769b239946b64ea834ee264bf4c3ccb')
    .then(response => {
      setWeather(response.data.list)
      console.log(response.data.list)
    })
  }, [])
  

  return (
    <main className='main'>
      <div>
        <input type="text" placeholder='De onde você é?' />
        {weather.map((clim) => {
          return(
            <h1 key={clim.main.temp}>{((clim.main.temp) - 273).toFixed(0)}</h1>
          )
        })}
        <p>c°</p>
      </div>
    </main>
  )
}
