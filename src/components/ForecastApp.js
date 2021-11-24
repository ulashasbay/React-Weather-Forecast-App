import { useContext } from 'react'
import WeatherCityContext from '../context/WeatherCityContext'

function ForecastApp() {
    const { forecast, today } = useContext(WeatherCityContext)

    const weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]  
    const borderClass = "col-lg-1 col-sm-3 col-md-3 mt-2 border border-warning activebg weatherFont p-1"
    const nonBorderClass = "col-lg-1 col-sm-3 col-md-3 mt-2 bg-light weatherFont p-1"
    return (
        <>
                {
                forecast.map((item,index) => {
                    const d = new Date(item.dt*1000)
                    
                    return (
                    <div key={index}
                     className={d.getDate()===today.getDate() ? borderClass : nonBorderClass}>
                        <h6>{weekDays[d.getDay()]}</h6>
                        <div className="datefont">{d.getDate().toString() + "/" + (d.getMonth() + 1).toString() + "/" + d.getFullYear().toString()}</div>
                        <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="" />
                        <br />
                        <span className="weatherFont warmest">{parseInt(item.temp.max)}°C</span>
                        <br />
                        <span className="weatherfont coldest">{parseInt(item.temp.min)}°C</span>
                    </div>)
                    })
                } 

        </>
    )
}

export default ForecastApp
