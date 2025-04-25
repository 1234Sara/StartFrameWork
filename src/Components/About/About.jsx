import React from 'react'
import styles from './About.module.css'
import Title from '../Title/Title'

const {about} = styles

export default function About() {
  document.title = "About";
  return (
    <section className={`${about}`}>
      <Title title='ABOUT COMPONENT' color='white'/>  
    <div className="content py-4">
        <div className="container">
            <div className="row mx-5 px-2">
                <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
    
  )
}
