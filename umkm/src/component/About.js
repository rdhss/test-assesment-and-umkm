import React from 'react'
import '../style/about.css'
import photo from '../assets/img/fruits.jpg'


const About = () => {
    return (
        <div class="d-flex container justify-content-center align-items-center position-relative">
            <div className="mr-20 bg-light about justify-content-center d-flex flex-column">
                <h3 className="font-serif font-bold mt-10 text-center">We chose best quality for you</h3>
                <p className='text-center text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum saepe doloribus inventore repellat facere nobis voluptatum nulla, qui, ullam corrupti sed nostrum maiores dolorem nemo numquam rem ex sequi laborum.</p>
            </div>
            <div className='photo-container position-absolute'>

            </div>
        </div>
    )
}

export default About