import React from 'react'
import styles from './Footer.module.css'

const {footer, footerSpace} = styles

export default function Footer() {
  return (
        <div className={`${footer}`}>
        <div className={`${footerSpace} container text-center`}>
        <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12 py-4">
                <div>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 py-4">
                <div>
                <h3>AROUND THE WEB</h3>
                <ul className='d-flex gap-3 list-unstyled circle justify-content-center'>
                    <li className="border rounded-circle"><i className="fa-brands fa-facebook"></i></li>
                    <li className="border rounded-circle"><i className="fa-brands fa-twitter"></i></li>
                    <li className="border rounded-circle"><i className="fa-brands fa-linkedin-in"></i></li>
                    <li className="border rounded-circle"><i className="fa-solid fa-globe"></i></li>                    
                </ul>
                </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 py-4">
                <div>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
    </div>

    <div className='text-center p-4' style={{backgroundColor: "#1A252F", color: "white"}}>
    Copyright © Your Website 2021   
    </div>
        </div>
  )
}
