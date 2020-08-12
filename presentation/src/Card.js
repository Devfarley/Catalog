import React, {useState} from 'react';
import UpsertCard from './UpsertCard';


function Card ({terms, erase, refresh}) {
    const [update, setUpdate] = useState(false);
    const toggleForm = () => setUpdate(!update);
        return(
        <div>
        <hr></hr>
            <li>
                {terms.name} 
            </li>
            <li>
                {terms.def}
            </li>
            <button className="delbtn" style={{color:"red"}} onClick={() => erase(terms._id, refresh)} >X</button>
            <button className="updatebtn" onClick={toggleForm} >Update</button>
            {update ?<UpsertCard terms={terms} toggleForm={toggleForm} refresh={refresh}/>: ""}
        <hr></hr>   
        </div>
        )
    
}

export default Card;