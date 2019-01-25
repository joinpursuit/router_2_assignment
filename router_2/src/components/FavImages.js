import React from 'react';

const FavImages = ({favorites}) => {
  let imageList = favorites.map(image => {
    return (
      <img src={image.images} alt=""/>
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