import React from 'react'
import '../card/card.css'

const Card = ({title, image, description}) => {
  
  return (
    <div className="cards">
    <div className="title">
        <h1>{title}</h1>
    </div>
    <div className='image'>
        <img src={image} alt="" />
    </div>

    <div className="description">
        <p>
            {description}
        </p>
    </div>
    </div> 

  )
}

export default Card