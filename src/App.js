import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    fetch('http://api.tvmaze.com/search/shows?q='+this.state.value)
    .then(function(response){return response.json();})
    .then(function(data){
        const items = data;
        alert('Data received:\n'+items)
    })
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Address:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
