import "./weatherPage.css";
import CloudIcon from '@mui/icons-material/Cloud';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CompressIcon from '@mui/icons-material/Compress';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

export default function WeatherPage(){
    const location=useLocation();
    let info=location.state;

    let rainy="https://images.unsplash.com/photo-1599806112354-67f8b5425a06?q=80&w=3385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let clean="https://images.unsplash.com/photo-1586783965334-e29d38a767b6?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let fog="https://plus.unsplash.com/premium_photo-1706625699202-b559d88f579f?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    document.body.style.backgroundImage=`url(${info.humidity>80||info.temp<5?fog:info.temp>5&&info.humidity>80?rainy:clean})`;
    

    return(
    
      <>   
      <div className="bodyDiv">
        <div>
    
     <h1 className="city">{info.city.toUpperCase()}&nbsp;<LocationOnIcon/></h1>
    <div className="weatherhead">
       
        <h2 className="mainIcon"><CloudQueueIcon/></h2>
        <h2 className="temp">{info.temp}&#8451;</h2><br />
          
    </div>
    <h4 className="des">{info.description}</h4> 

    </div>

    <div>
    <div className="mainBox">
        <div className="innerdiv">
             <h3>Tempreature</h3>
            <h1>{info.temp}&#8451;</h1>
        </div>
        <div>
            <h3><span><WaterDropIcon/></span>Humidity</h3>
            <h1>{info.humidity}%</h1>
           
        </div>
        <div>
            <h3><ArrowUpwardIcon/>Max</h3>
            <h1>{info.temp_max}&#8451;</h1>
            </div>
        <div>
            <h3><ArrowDownwardIcon/>Min</h3>
            <h1>{info.temp_min}&#8451;</h1>
        </div>
        <div>
            <h3><CompressIcon/>Pressure</h3>
            <h1>{info.pressure}&nbsp;mb</h1>
        </div>
        <div>
            <h3>Feels Like</h3>
            <h1>{info.feels}&#8451;</h1>
        </div>
        </div> 
        </div>

        </div>

    </>
    )
}