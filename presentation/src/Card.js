import React, {useState} from 'react';
import UpsertCard from './UpsertCard';


function Card ({terms, erase, refresh}) {
    const [flip, setFlip] = useState(false);
    const [update, setUpdate] = useState(false);
    const toggleForm = () => setUpdate(!update);
        return(
        <div>  
        <div  className={`card ${flip ? 'flip': ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">
                {terms.name}
            </div>
            <p className="back">
                {terms.def}
            </p>
        </div>
        <div className='options'>
            <button className="delbtn" style={{color:"red"}} onClick={() => erase(terms._id, refresh)} >X</button>
            <button className="updatebtn" onClick={toggleForm} >Update</button>
            {update ?<UpsertCard terms={terms} toggleForm={toggleForm} refresh={refresh}/>: ""} 
            </div>
        </div>  
        )
    
}

export default Card;


