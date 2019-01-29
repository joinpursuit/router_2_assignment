import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FavImages from './components/FavImages';
import RandomImg from './components/RandomImg';
import DisplayFav from './components/DisplayFav';
// import Image from './components/Image';
// import {withRouter} from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state ={
      favorites: [],
      comments: []
    }
  }

  addFavImage = image => {
    image.id = this.generateId();
    let favorites = [...this.state.favorites, image];
    this.setState({
      favorites: favorites
    })
  }

  generateId () {
    return Math.random().toString(34).slice(2);
  }
  
  render() {
    // console.log(this.state)
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/random' render={(props) => <RandomImg {...props} favorites={this.state.favorites} addFavImage={this.addFavImage} /> } />
            <Route path='/favorites' render={props => <FavImages {...props} favorites={this.state.favorites} />} />
            <Route path='/favorites/:id' render={(props) => <DisplayFav {...props} favorites={this.state.favorites} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
