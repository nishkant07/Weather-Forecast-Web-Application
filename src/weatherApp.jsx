import { useEffect, useState } from "react";
import SearchBox from "./searchBox"
import CitiesData from "./citiesData"
import "./weatherApp.css";
import WeatherPage from "./weatherPage";
import{BrowserRouter,Routes,Route,} from 'react-router-dom';


export default function WeatherApp(){
    let[info,setinfo]=useState({
        city: "delhi",
        description: "mist",
        feels: 17.92,
        humidity: 77,
        pressure: 1017,
        temp: 18.05,
        temp_max: 18.05,
        temp_min: 16.73
    });


    return(
        <>
        
    <BrowserRouter>
    <Routes>
      <Route index element={<><SearchBox/></>}/>
      <Route path='/weatherPage' element={<WeatherPage />}/>
    </Routes>
    </BrowserRouter>
        </>
    )
}