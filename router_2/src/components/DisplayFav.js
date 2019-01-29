import React from 'react';

class DisplayFav extends React.Component {
  constructor() {
    super();
    this.state={
      id: null
    }
  }
  
  componentDidMount () {
    let id = this.props.match.params.id;
    const {favorites} = this.props.favorites;
    this.setState({id: id})
  }

  render() {
    console.log(this.props)
    return (
      <p>{this.state.id}</p> 
    )
  }
}

export default DisplayFav;