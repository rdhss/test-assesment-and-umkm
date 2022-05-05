/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/point.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faspark } from '@fortawesome/free-solid-svg-icons'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <header class="header-point">
                <div className='d-flex w-100 justify-content-center vh-100 align-items-center'>
                    <div className='card'>
                        <FontAwesomeIcon icon={faHandHoldingDollar} size="3x" className='text-dark mt-2' />
                        <h4 className='mt-2'>Best Price</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt est perspiciatis voluptas alias molestias tenetur ea quo?!</p>
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faCertificate} size="3x" className='text-dark mt-2' />
                        <h4 className='mt-2'>High Quality</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt est perspiciatis voluptas alias molestias tenetur ea quo?!</p>
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faAppleAlt} size="3x" className='text-dark mt-2' />
                        <h4 className='mt-2'>Fresh Guarentee</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt est perspiciatis voluptas alias molestias tenetur ea quo?!</p>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header