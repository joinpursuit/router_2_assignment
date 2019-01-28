import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar.js'
import RandomDog from './RandomDog.js'
import RandomByBreed from './RandomByBreed.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
        favorites: []
    }
  }

  addNewFavorite = (url) => {
    const { favorites } = this.state
    let newState = [...favorites];
    let newFav = {
      id: Math.random(),
      url: url,
      comments: []
    }

    newState.push(newFav);

    this.setState({
      favorites: newState
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
          exact path='/'
          render={() =>
            {return <h1>Home</h1>}} //{no component required, can just return jsx}
          />
          <Route path='/random'
          render={() => {
          return <RandomDog addNewFavorite={this.addNewFavorite} /> }} />
          <Route path='/by_breed' render={() => {
            return <RandomByBreed addNewFavorite={this.addNewFavorite} /> }} />
        </Switch>
      </div>
    );
  }
}

export default App;
