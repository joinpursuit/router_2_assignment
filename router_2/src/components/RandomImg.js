import React from 'react';
import axios from 'axios';
import Image from './Image';

class RandomImg extends React.Component {

  constructor () {
    super();
    this.state = {
      imageUrl: '',
      comments: '',
      isFavorite: false
    }
  }

  handleRandomOne = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      this.setState({
        isFavorite: false,
        imageUrl: res.data.message
      })
    })
  }

  // handleChange = (e) => {
  //   this.setState({
  //     comments: e.target.value
  //   })
  // }

  handleFavorite = (e) => {
    this.props.addFavImage(this.state);
    this.setState({
      comments: '',
      isFavorite: true
    })
  }

  render () {
    return (
      <div className="container">
        <button 
          className="btn waves-effect waves-light center" 
          onClick={this.handleRandomOne}
        >Click for a random picture
          <i className="small material-icons right">cloud</i>
        </button>

        { !this.state.isFavorite ? (
          <>
          <Image 
            imageUrl={this.state.imageUrl} 
            handleFavorite={this.handleFavorite}
            handleChange={this.handleChange} />
          
          <button 
            className="btn waves-effect waves-light" 
            type="submit" 
            name="action"
            onClick={() => {this.handleFavorite(this.state.imageUrl)}}
          >Add to Favorite
            <i className="small material-icons right">send</i>
          </button> </>)
          : <p>Favorite added, please click to view another one.</p>
        }
      </div>
    )
  }
}

export default RandomImg;