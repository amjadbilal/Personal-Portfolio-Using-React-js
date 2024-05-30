import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Components/Css/Header.css'
// import './js/main.js'




//  {
//   let a =document.getElementsByClassName('navbar')[0]
//   console.log(a);
//  }


const NavStyle = ({ isActive }) => {
  return {
    
    textDecoration: isActive ? 'underline' : 'none',

  }
}

function Header() {

  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img src="/images/mylogo.jpg" id='personallogo' alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#"> <NavLink style={NavStyle} to="/">

Home

</NavLink ></a>
        <a class="nav-link" href="#"><NavLink style={NavStyle} to="/projects" >
              Projects
            </NavLink></a>
        <a class="nav-link" href="#"> <NavLink style={NavStyle} to="/about" >
              About
            </NavLink></a>
        <a class="nav-link" href="#">  <NavLink style={NavStyle} to="/blog">
              Resume
            </NavLink></a>
        <a class="nav-link" href="#">  <NavLink style={NavStyle} to="/contact">
              Contact Me
            </NavLink></a>
      </div>
    </div>
  </div>
</nav>
       

    </div>
  )
}

export default Header
