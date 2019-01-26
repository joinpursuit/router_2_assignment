import React from 'react';
// import {withRouter} from 'react-router';

class Image extends React.Component {
  state = {
    id: null
  }
//   componentDidMount = () => {
//     console.log(this.props)
//     let id = this.props.match.params.id;
//     this.setState({ id })
//   }

//   render() {
//     return (
//       <p>{this.state.id}</p>
//     )
//   }
// }
  render () {
    const imageItem = this.props.imageUrl.length ?  (
      <div className="container-center">
        <img src={this.props.imageUrl} alt="" className="responsive-img"/><br /><br /><hr />
        <button 
          className="btn waves-effect waves-light" 
          type="submit" 
          name="action"
          onClick={() => {this.props.handleFavorite(this.props.imageUrl)}}
        >Add to Favorite
          <i className="small material-icons right">send</i>
        </button>
      </div>
    ) : null
    return (
      <>
        {imageItem}
      </>
    )
  }
}

export default Image;