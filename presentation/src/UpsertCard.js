import React from 'react';

class UpsertCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.terms.name,
            def: this.props.terms.def
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {...data} = this.state
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/terms/${this.props.terms._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(data)
        }).then(this.props.toggleForm)
          .then(this.props.refresh)
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="UpdateCardForm">
                    <input type="text" name="name" placeholder="New Term" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name="def" placeholder="Definition" value={this.state.def} onChange={this.handleChange}/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default UpsertCard;