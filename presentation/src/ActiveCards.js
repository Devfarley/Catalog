import React from 'react'
import Card from './Card'
import CreateCard from './CreateCard'




class ActiveCards extends React.Component{
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
                .then(data => {this.setState({terms:data})}, () => {console.log(this.state)})
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
               return term.archived ? null : term
            }).map((terms) => <Card key={terms._id} 
            archive={terms.archived} terms={terms} erase={this.deleteCard} refresh={this.getTerms}/> )
        return(
            <div className='container'>
                <div className='create'>
                    <h1 className='Activecardspage'>Active Cards</h1>
                    <h1>Create A Card</h1>
                    <CreateCard className='createinput' refresh={this.getTerms} />
                </div>
                <div className="card-grid">
                      {filterArchived}
                </div>
            </div>
        )
    }
}


export default ActiveCards;