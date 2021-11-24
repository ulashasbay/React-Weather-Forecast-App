import React from 'react';
import ChooseCity from './ChooseCity';
import ForecastApp from './ForecastApp';
import { WeatherCityContextProvider } from '../context/WeatherCityContext';

function Container() {
    
    return (
        <>
        <div className="container">
            <div className="row justify-content-center mt-5 p-1  "> 
            <WeatherCityContextProvider>
                <ChooseCity />
                <ForecastApp />
            </WeatherCityContextProvider>
            </div>
            <footer className="footer">Created By Ulaş Hasbay</footer>  
        </div>
        </>
    )
}

export default Container
