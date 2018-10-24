import React, { Component } from 'react';
import './app.css';
import fetch from 'node-fetch';
// import box from './box.jsx';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      attractions: []
    }
  }

  componentDidMount() {
    fetch('/api/getAttractions') 
      .then(response => response.json())
      .then(attractions => { //array of 10 attractions
        // const attractions = res.data.data.children.map(obj => obj.data);
        this.setState({ attractions });
      })
      .catch(err => console.log(err))
  }

  render() {
    // const { username } = this.state;
    return (
      <div>
      Hello Earthlings
      <ul>{this.state.attractions.map(attraction => <li key={attraction.id}>{attraction.attraction}</li>)}</ul>
      </div>
    );
  }
}
