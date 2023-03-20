import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
        <nav>
            <div class="left">
                <img src="img/logo.png" alt=""/>
                <span>Chikitsa</span>
            </div>
            <div class="right">
                <div class="emergency">Emergency</div>
                <img src="img/avatar.png" alt=""/>
            </div>
        </nav>
    </>
  )
}

export default Navbar