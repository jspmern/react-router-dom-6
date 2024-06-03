import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={({isActive})=>{
            return  isActive?"nav-link active formate" : "nav-link"
          }} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item">
        <NavLink className={({isActive})=>{
            return  isActive?"nav-link active formate" : "nav-link"
          }} aria-current="page" to="service">Service</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={({isActive})=>{
            return  isActive?"nav-link active formate" : "nav-link"
          }} aria-current="page" to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavBar
   

   