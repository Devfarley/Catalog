import React from 'react';

class CreateCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            def: ""
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
        fetch(`${api_url}/terms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(data)
        }).then(() => this.setState({name: "", def: ""}))
          .then(this.props.refresh)
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="CreateCardForm">
                    <input type="text" name="name" placeholder="New Term" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name="def" placeholder="Definition" value={this.state.def} onChange={this.handleChange}/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default CreateCard;