import React, {useState, useEffect} from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from 'react-loader-spinner'
import "../Classificacao/style.css"
import axios from "axios";
const Classificacao= () =>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedLeague,  setSelectedLeague] = useState('eng.1');
    const [selectedYear, setSelectedYear] = useState('2023')

    useEffect(() =>{
        setLoading(true);
        axios(`https://api-football-standings.azharimm.dev/leagues/${selectedLeague}/standings?season=${selectedYear}`
        ).then(res=>{
            console.log(res.data.data.standings);
            setData(res.data.data.standings);
        }).catch(err=>console.log(err)).finally(()=> setLoading(false));
    }, [selectedYear,selectedLeague])


    return(
        <div className="classifi">
            <div className="selec-container">
                <select
                name="select-league"
                id="select-league" 
                defaultValue={selectedLeague}
                onChange={(e) => setSelectedLeague(e.target.value)}
                >
                <option value ="arg.1">Argentine Liga Profesional de Fútbol</option>
                <option value= "aus.1">Australian A-League</option>
                <option value= "bra.1">Brazilian Serie A</option>
                <option value="chn.1">Chinese Super League</option>
                <option value ="ned.1">Dutch Eredivisie</option>
                <option value="eng.1">English Premier League</option>
                <option value="fra.1">French Ligue 1</option>
                <option value="ger.1">German Bundesliga</option>
                <option value="ita.1">Italian Serie A</option>
                <option value="jpn.1">Japanese J League</option>
                <option value="mex.1">Mexican Liga BBVA MX</option>
                <option value="por.1">Portuguese Liga</option>
                <option value="rus.1">Russian Premier League</option>
                <option value="sap.1">Singaporean Premier League</option>
                <option value="esp.1">Spanish Primera División</option>
                <option value="tha.1">Thai Premier League</option>
                <option value="tur.l">Turkish Super Lig</option>

                </select>
                <select
                name="select-year"
                id="select-year"
                onChange={(e) => setSelectedYear(e.target.value)}
                defaultValue ={selectedYear}
                >
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option> 
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                </select>
            </div>
            <div className="classifi-resul">
            {loading ? <ThreeDots height="80" width="80" radius="9" color="white" ariaLabel="loading" wrapperStyle wrapperClass/>:
            data.map((data, index) =>(
                <div key={data.team.id} className="classifi-info">
                    <h1>
                        <span>
                            
                            {`${index+1}.`}
                            <img src={data.team.logos[0].href} alt="#" style={{width: "35px"}}/
                    
                    ></span>
                    {data.team.shortDisplayName}
                    </h1>
                </div>
            ))
            }
            </div>
        </div>
    )
};

export default Classificacao;