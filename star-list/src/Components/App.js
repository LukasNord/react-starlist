import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      starList: [
        { name: 'Fomalhaut',
          diameter: 123 
        },
        {
          name: 'Gacrux',
          diameter: 25
        },
        {
          name: 'Elnath',
          diameter: 34
        },
        {
          name: 'Hadar',
          diameter: 1500
        }
      ],
      newStar: { name: '', diameter: ''}
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event){
    event.preventDefault();
    this.setState( { starList: [...this.state.starList, this.state.newStar]}); 
    this.setState({ newStar: { 
        name: '', 
        diameter: '' 
        } 
    });
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({newStar: {
      ...this.state.newStar, 
      [propertyName]: event.target.value}} )
  }



  render() {    
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              Name: <input value={this.state.newStar.name} onChange={this.handleChangeFor('name')} />
              Diameter: <input value={this.state.newStar.diameter} onChange={this.handleChangeFor('diameter')}/>
              <input type="submit" value="Add Star" />
            </div>
          </form>
          Stars this.state.starList:
          <ul>
            { this.state.starList.map( star => <li key={star.name}>The Star {star.name} is {star.diameter} million Kilometers in Diameter.</li> ) }
          </ul>
        
      </div>
    );
  }
}

export default App;
