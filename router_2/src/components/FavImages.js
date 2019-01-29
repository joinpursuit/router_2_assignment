import React from 'react';
import { Link } from 'react-router-dom';

const FavImages = (props) => {
  // debugger
  // let id = props.match.params.id;
  let imageList = props.favorites.map(image => {
    return (
      <div className="container" key={image.id}>
        <Link to={'/' + image.id}>
          <img src={image.imageUrl} alt="" />
        </Link>
      </div>
    )
  })
  return (
    <div className="container">
      <h4 className="center">FavImages List</h4>
      {imageList}
    </div>
  )
}

export default FavImages;