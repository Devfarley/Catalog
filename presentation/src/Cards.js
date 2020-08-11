import React from 'react';

function Cards(props) {
    
        
        
        return(
        <div>
        <hr></hr>
            <li>
                {props.name} 
            </li>
            <li>
                {props.definition}
            </li>
        <hr></hr>   
        </div>
        )
    
}

export default Cards;