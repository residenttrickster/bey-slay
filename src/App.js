
import React, { Component } from "react";
import "./App.css";
import BeyContainer from './BeyContainer';
import Favorites from './Favorites';

class App extends React.Component {

  state = {
    beys: []
  }
  
  componentDidMount() {
    fetch(`http://localhost:4000/beys`)
    .then(r => r.json())
    .then(beys => {
      this.setState({ beys})
    })
  }

  filterBeys = (event) => {
    const beys = this.state.beys
    const filteredBeys = beys.filter(bey => bey.favourite === event)
    return filteredBeys
  }

  toggleBeys = (id) => {
    const updateBeys = this.state.beys
    const foundBey = updateBeys.find(bey => bey.id === id)
    foundBey.favourite = !foundBey.favourite
    this.setState({ beys: updateBeys})
  }

  
  render() {
    return (
      <div className="main-container">
      <BeyContainer toggleFave={this.toggleFave} beys={this.filterBeys(false)}/>
      <Favorites toggleFave={this.toggleFave} beys={this.filterBeys(true)} />
    </div>
    )
    };
  }

export default App;

