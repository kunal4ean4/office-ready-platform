import React from 'react'
import '../styles/Header.css'
const Header = () => {
  return (
    <navigatio classname="nav-container">
      <div>
        <h2>Tech Platform</h2>
      </div>
      <div>
        <ul>
            <li><a href="">How it works</a></li>
             <li><a href="">Curriculum</a></li>
             <li><a href="">Pricing</a></li>
             <li><a href="">Faq</a></li>
             <li ><a className="a-button" href="">Login</a></li>
        </ul>
      </div>

    </navigatio>
  )
}

export default Header
