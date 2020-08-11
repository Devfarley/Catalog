import React from 'react'
import Cards from './Cards'

class Display extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            terms: []
        }
    }
        getTerms = () => {
            const api_url = process.env.REACT_APP_API_URL
            fetch(`${api_url}/terms`)
                .then(response => response.json())
                .then(data => this.setState({terms:data}))
        }

        componentDidMount(){
            this.getTerms();
        }
    render(){
            const displayCards = this.state.terms.map((terms) => <Cards key={terms._id} name={terms.name} definition={terms.def}/> )
        return(
            <ul>
                {displayCards}
            </ul>
        )
    }
}


export default Display;