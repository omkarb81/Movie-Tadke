import React from 'react'

const Movies = (props) => {
  return (
    <div className='Movie'>
        <img  className='Poster' src={props.img} alt="poster" />
        <h2>{props.title}</h2>
        <h3>Year : {props.year}</h3> 
    </div>
  )
}

export default Movies