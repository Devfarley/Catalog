import React from 'react';
import Card from './Card'

class Archivedcards extends React.Component {
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

        deleteCard = (id, refresh) => {
            const api_url = process.env.REACT_APP_API_URL
            fetch(`${api_url}/terms/${id}`, {
                method: "DELETE"
            }).then(response => response.json())
            .then(data => {console.log(data)
                refresh();
            })
        }

    render(){
            
            const filterArchived = this.state.terms.filter((term) => {
               return term.archived ? term : null
            }).map((terms) => <Card key={terms._id} 
            archive={terms.archived} terms={terms} erase={this.deleteCard} refresh={this.getTerms}/> )
        return(
            <div className='container'>
                <div className="card-grid">
                      {filterArchived}
                </div>
            </div>
        )
    }
}

export default Archivedcards;