/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/header.css'

const Header = () => {
    return (
        <div>
            <header class="header">
                <div class="logo-box">
                </div>
                <div class="text-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary-main">fruitsooze</span>
                        <span class="heading-primary-sub">best fresh fruits life</span>
                    </h1>
                    <a href="#" class="button button-white button-animation">order now</a>
                </div>
            </header>
        </div>
    )
}

export default Header