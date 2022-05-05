import React from 'react'
import '../style/card.css'

const Card = ({img, name, price}) => {
  return (
    <div className='card-lt'>
        <div className='container-img'>
        <img src={img} alt=""  className='img-h'/>
        </div>
        <div className='desc'>
            <h3 className='text-center mt-3'>{name}</h3>
            <h1 className='text-center mt-4'>${price}/<span className='text-kg'>kg</span></h1>
            <p className='text-center text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nam </p>
        </div>
        <div className='bg-dark button'><h3 className='pt-2 text-light text-center'>ORDER NOW</h3></div>
    </div>
  )
}

export default Card