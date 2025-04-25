import React from 'react'
import styles from './Title.module.css'

const {line, heading} = styles

export default function Title({title, color}) {

  return (
    <div>
      <h2 className={heading}>
       {title}
      </h2>

      <div className='lines d-flex justify-content-center align-items-center'>
        <div className={line} style={{backgroundColor: color}}></div>
        <i className="fa-solid fa-star mx-3"></i>
        <div className={line} style={{backgroundColor: color}}></div>
      </div>
    </div>
  )
}
