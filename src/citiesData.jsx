import { light } from "@mui/material/styles/createPalette";
import { useEffect, useState } from "react";
import "./citiesData.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';



export default function CitiesData({data}){
    let idx=0;
    let url="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="e79ec94428a934b8f516c8199da48efe"

    const navigate=useNavigate();


    let[info,setData]=useState([]);
    let [weatherData,setweather]=useState({})

    useEffect(()=>{
        async function handle(){
          setData(data);  
        }
      handle();
    })

    
    async function clickHandle(event){
        // console.log(event.target.innerText);
       async function fetching(){
        let res=await fetch(`${url}?q=${event.target.innerText}&appid=${API_KEY}&units=metric`);
        let jsonres=await res.json();
        let result={
            city:event.target.innerText,
            feels: jsonres.main.feels_like,
            humidity: jsonres.main.humidity,
            pressure: jsonres.main.pressure,
            temp: jsonres.main.temp,
            temp_max: jsonres.main.temp_max,
            temp_min: jsonres.main.temp_min,
            description: jsonres.weather[0].description,
        }
        return await result;
        
    }
    let info= await fetching();
    navigate("weatherPage",{state:info});
     
    }

    return(
        <>
        <h3 className="tabhead">other Cities</h3>
        <table>
        
         <thead>
                    <tr>
                        <td><b>City Name</b></td>
                        <td><b>Country Name</b></td>
                        <td><b>Timezone</b></td>
                    </tr>
                </thead>
                <tbody>
        {info.map((data)=>
            
                    <tr key={uuidv4()}>
                        <td key={uuidv4()} onClick={clickHandle} className="td1">{data.name}</td>
                        <td key={uuidv4()} className="td2">{data.cou_name_en}</td>
                        <td key={uuidv4()} className="td3">{data.timezone}</td>
                    </tr>
                 )}
        </tbody>
        </table>
        </>
    )
        }
