import React from 'react'
import image from '../../assets/Images/avatars.svg'
import styles from './Home.module.css'
import Title from '../Title/Title'

export default function Home() {
  document.title = "Home";
  return (
    <section>
    <div className={`${styles.home}`}>
        <div className="container">
            <div className="row">
             <div className="col-lg-12">
                <div className='d-flex justify-content-center align-items-center'>
                <img src={image} alt="person" className={`${styles.img} py-5`}/>
                </div>
                <Title title='START FRAMEWORK' color='white'/>
                <p className='text-center text-white py-2'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
            </div>
        </div>
    </div>
    </section>
  )
}
