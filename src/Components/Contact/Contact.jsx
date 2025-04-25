import React, { useState } from 'react'
import Title from '../Title/Title'
import styles from './Contact.module.css'


const {contact, buttonColor, labelContact} = styles

export default function Contact() {
  document.title = "Contact";
  const [inputStates, setInputStates] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputStates((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <section className={contact}>

  <Title title='CONTACT SECTION' color='#2C3E50'/>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
      <div className='w-50 m-auto'>
      <form>
      <div className="form-group py-4">
      <label htmlFor="name" className={`${labelContact} ${inputStates.name ? "visible" : "invisible"}`}>userName :</label>
      <input type="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder="userName"  value={inputStates.name}
    onChange={handleInputChange}/>
    </div>
    <div className="form-group py-4">
    <label htmlFor="age" className={`${labelContact}  ${inputStates.age ? "visible" : "invisible"}`}>userAge :</label>
    <input type="number" className="form-control" id="age" aria-describedby="emailHelp" placeholder="userAge" value={inputStates.age}
    onChange={handleInputChange}/>
    </div>
    <div className="form-group py-4">
    <label htmlFor="email" className={`${labelContact} ${inputStates.email ? "visible" : "invisible"}`}>userEmail :</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="userEmail" value={inputStates.email}
    onChange={handleInputChange}/>
    </div>
    <div className="form-group py-4">
    <label htmlFor="password" className={`${labelContact} ${inputStates.password ? "visible" : "invisible"}`}>userPassword :</label>
    <input type="password" className="form-control" id="password" placeholder="userPassword" value={inputStates.password}
    onChange={handleInputChange}/>
    </div>

  <button type="submit" className={`${buttonColor} btn btn-success m-2`}>Send Message</button>
  </form>
    </div>
      </div>
    </div>
    </div>

      </section>
  )
}



