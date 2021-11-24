import { useContext} from 'react'
import WeatherCityContext from '../context/WeatherCityContext';

function ChooseCity() {
    const { city, setCity, cityList, today } = useContext(WeatherCityContext)
    const changeCity = (e) => {
        cityList.map((item) => {
            if (item.name === e.target.value) {
                setCity(item);
            };
            return false;
        })
    }

    return (
        <>
            <div className="row justify-content-center mt-5 p-1  ">
                <div className="weatherFont">
                    <h1>Weather Forecasts</h1>
                    
                    <h2 style={{color:"#ff3300"}}>{city.name}</h2>
                    <h4>{today.getDate().toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getFullYear().toString()} </h4>
                </div>
                <div className="col-12 mb-1 mt-5">
                    <select  defaultValue="Ankara" className="weatherFont dropdown" onChange={(e) => changeCity(e) } >
                        
                       { cityList.map((item) => {   
                           return (<option key={item.id} name={item.name} value={item.name}>{item.name}</option>)
                       }) }                              
                    </select>
                </div> 
            </div>
        </>
    )
}

export default ChooseCity
