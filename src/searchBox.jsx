import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./searchBox.css";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CitiesData from './citiesData';
const key=import.meta.env;

export default function SearchBox({fun}){
    let url="https://api.openweathermap.org/data/2.5/weather";
    let urlCities="https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100&refine=timezone%3A%22Asia%22&refine=cou_name_en%3A%22India%22";
    let API_KEY=`${key.VITE_WEATHER_KEY}`;

    document.body.style.backgroundImage=`url(https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`


    let [box,setBox]=useState("");
    let [citiesData,setData]=useState([]);
    let [error,seterror]=useState(false);

    const navigate=useNavigate();

    async function fetching(){
        try{
        let res=await fetch(`${url}?q=${box}&appid=${API_KEY}&units=metric`);
        let jsonres=await res.json();
        let result={
            city:box,
            feels: jsonres.main.feels_like,
            humidity: jsonres.main.humidity,
            pressure: jsonres.main.pressure,
            temp: jsonres.main.temp,
            temp_max: jsonres.main.temp_max,
            temp_min: jsonres.main.temp_min,
            description: jsonres.weather[0].description,
        }
        return await result;
    }catch(err){
        throw err;
    }
        
    }

    async function fetching2(){
        try{
        let res= await fetch(urlCities);
        let jsonres=await res.json();
        setData(jsonres.results);
        }catch(err){
            throw err;
        }
        
    }
    
    useEffect(function firstdata(){
        fetching2();
    },[]);



    let changeHandler=(event)=>{
        setBox(event.target.value);
    }
    let clickHandler= async (event)=>{
        try{
        event.preventDefault();
        //  console.log(box);
         let info = await fetching();
         
         navigate("/weatherPage",{state:info})
         setBox("")
        }catch(err){
            seterror(true);
        }
    }
     
     return(
        <>
        <form onSubmit={clickHandler} className='searchBox' action="/weatherPage">
            <h1 className='heading'>Weather</h1>
            <TextField value={box} onChange={changeHandler} id="outlined-basic" label="City" variant="outlined" required/><br /><br />
            <Button type='submit' color="success" variant="outlined" >Search</Button>
            {error&&<p>No Such Place Exist!</p>}
            <CitiesData data={citiesData}/>
        </form>
        
        </>
     )
}