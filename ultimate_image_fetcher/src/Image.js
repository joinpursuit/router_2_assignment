import React from 'react'

const Image = ({ imgUrl, addNewFavorite }) => {
  return (
    <img
    src={ imgUrl}
    onClick={() => {addNewFavorite(imgUrl)}}
    className='dog_img'
    alt=''/>
  )
}

export default Image
