import React from 'react';
import axios from 'axios';

class RandomImg extends React.Component {
 
  constructor () {
    super();
    this.state = {
      images: '',
      comments: ''
    }
  }

  componentDidMount = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      this.setState({
        images: res.data.message
      })
    })
  }

  handleChange = (e) => {
    e.stopPropagation();
    this.setState({
      comments: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.addFavImage(this.state);
    console.log(this.state)
    this.setState({
      comments: ''
    })
  }

  render () {
    const postList = this.state.images.length ? (
      <div className="post card">
        <img 
          src={this.state.images} 
          alt="" 
          max-height='auto'
          max-width='auto'
          height='50%'
          width='50%'
          className="card-content"/><br />
        <form onSubmit={this.handleSubmit}>
          <label>Your Comments:</label>
          <input type="text" value={this.state.comments} onChange={this.handleChange}/>
          <button type='submit'>Add to Favorite</button><br /><br />
        </form>
      </div>
    ) : (
      <div className="center">Loading ...</div>
      )
    return (
      <div className="container center">
        {postList}
      </div>
    )
  }
}

export default RandomImg;