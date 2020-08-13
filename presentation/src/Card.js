import React, {useState} from 'react';
import UpsertCard from './UpsertCard';


function Card ({terms, erase, refresh}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        terms.archived = !terms.archived
        const {_id,...data} = terms
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/terms/${terms._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(data)
        }).then(refresh)
    }


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
            <button className="archivebtn" onClick={handleSubmit}>{terms.archived ? 'Unarchive': 'Archive'}</button>
            </div>
        </div>  
        )
    
}

export default Card;


