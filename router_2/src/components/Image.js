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
    const imageItem = this.props.imageUrl.length ? (
      <div className="container-center">
        <img src={this.props.imageUrl} alt="" className="responsive-img"/><br /><br /><hr />
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