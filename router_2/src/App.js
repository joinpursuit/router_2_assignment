import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FavImages from './components/FavImages';
import RandomImg from './components/RandomImg';
// import {withRouter} from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state ={
      favorites: []
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
    console.log(this.state)
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Route exact path='/' component={Home} />
          <Route path='/random' component={RandomImg} />
          <Route path='/favorites' component={FavImages} />

          <RandomImg addFavImage={this.addFavImage} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
