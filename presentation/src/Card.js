import React from 'react';

function Card ({terms, erase, refresh}) {
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
        <hr></hr>   
        </div>
        )
    
}

export default Card;