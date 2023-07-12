import React from 'react'
import { Link,Navigate } from 'react-router-dom'
import "./Nav.css"
import footer from './footer'

  function Navie() {
      return (
        
        <nav>
        
        <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>
        
        <div class="header">
       <h1>STAR INSURANCE</h1>
       </div>
        <div>
        <ul id="navbar">
        <li><Link to="/">Login</Link></li>
        <li><Link to="/signup">Register</Link></li>
        <li><a href='index.html'>Policy</a></li>
        <li><a href='index.html'>Customer Service</a></li>
        <li><a className='active'
        href='index.html'>About Us</a></li>
        </ul>
        </div>
        <div class="dropdown">
  <button class="dropbtn">Claims</button>
  <div class="dropdown-content">
    <a href="#">Cliam Intimation</a>
    <a href="#">Cliam Process</a>
    <a href="#">Cliam Status</a>
    <a href="#">Cliam HelpDesk</a>
  </div>
</div>

      <footer/>
        

        </nav>
        
      )
    }
    
    export default Navie