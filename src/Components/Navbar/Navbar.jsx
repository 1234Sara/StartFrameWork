import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (

    <section>
    <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor: "#2C3E50"}}>
    <div className="container">
      <Link className="navbar-brand text-white" to="" style={{fontSize: "32px", fontWeight: "700"}}>START FRAMEWORK</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-4" style={{fontWeight: "700"}}>
          <li className="nav-item">
            <NavLink className="nav-link m-2" aria-current="page" to="/about">ABOUT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link m-2" to="/portfolio">PORTFOLIO</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link m-2" to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </section>

    )
}
