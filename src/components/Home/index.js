import React, {useState} from "react";
import "../Home/style.css"
import Ligas from "../Ligas/liga";
import Classificacao from "../Classificacao/classifi";


const Home = () =>{

    const [active, setActive] = useState(true);

    return(
        <div className="home">
            <div className="tabela">
                <div className="tabela-liga" onClick={()=>setActive(true)}>
                    <h2 style={{color: active ? '#c20114' : null}}>Ligas</h2>
                </div>
                <div className="tabela-classificacao" onClick={()=>setActive(false)}>
                    <h2 style={{color: !active ? '#c20114' : null}}>Classificação</h2>
                </div>
            </div>
        

            {active ? <Ligas /> : <Classificacao />}
        </div>
    );
};

export default Home;