import React, { useState, useEffect } from 'react';
import '../Ligas/style.css';
import axios from "axios";

const Ligas= () =>{
    const [data,setData] = useState([]);


    useEffect(()=>{
        axios("https://api-football-standings.azharimm.dev/leagues").
        then(
            (response)=>{
                console.log(response.data.data);
                setData(response.data.data);
            }
        );
        
    }, []);
    return(
        <div className="liga">
            {data.map((data) =>(
                <div key={data.id} className="liga-div">
                    <img src={data.logos.light} alt="#"/>
                    <h1>{data.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Ligas;