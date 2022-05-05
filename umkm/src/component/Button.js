/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/header.css'



const Button = ({text}) => {
    return (

        <div className='mr-5 w-100 d-flex justify-content-center'>
            <a href="#" class="button  m-butt button-white button-animation bg-dark text-light">{text}</a>
        </div>
    )
}

export default Button