import React, { useEffect, useState } from 'react'
import styles from './Portfolio.module.css'
import Title from '../Title/Title'
import port1 from '../../assets/Images/port1.png'
import port2 from '../../assets/Images/port2.png'
import port3 from '../../assets/Images/port3.png'


const {port, layer, plusColor, lightbox, imgw} = styles

export default function Portfolio() {
    document.title = "Portfolio";
const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalImage("");
    setModalOpen(false);
  };


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);



  return (
    <section className={port}>
            <div>
                  <Title title='PORTFOLIO COMPONENT' color='#2C3E50'/>
                <div className="container py-4">
                    <div className="row g-5">
                     <div className="col-md-6 col-lg-4 position-relative"
                       onClick={() => openModal(port1)}
                     >
                     <img src={port1} alt="port1" className='w-100 border rounded'/>
                     <div className={`${layer} border-0 rounded`}>
                        <div className={`${plusColor}`}>
                        <i className="fa-solid fa-plus fa-2xl text-white"></i>
                        </div>
                    </div>   
                    </div>
                    <div className="col-md-6 col-lg-4 position-relative"
                    onClick={() => openModal(port2)}
                    >
                     <img src={port2} alt="port1" className='w-100 border rounded' />
                     <div className={`${layer} border-0 rounded`}>
                        <div className={`${plusColor}`}>
                        <i className="fa-solid fa-plus fa-2xl text-white"></i>
                        </div>
                    </div>   
                    </div>
                    <div className="col-md-6 col-lg-4 position-relative"
                    onClick={() => openModal(port3)}
                    >
                     <img src={port3} alt="port1" className='w-100 border rounded'/>
                     <div className={`${layer} border-0 rounded`}>
                        <div className={`${plusColor}`}>
                        <i className="fa-solid fa-plus fa-2xl text-white"></i>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6 col-lg-4 position-relative"
                    onClick={() => openModal(port1)}
                    >
                     <img src={port1} alt="port1" className='w-100 border rounded'/> 
                     <div className={`${layer} border-0 rounded`}>
                        <div className={`${plusColor}`}>
                        <i className="fa-solid fa-plus fa-2xl text-white"></i>
                        </div>
                    </div>   
                    </div>
                    <div className="col-md-6 col-lg-4 position-relative"
                    onClick={() => openModal(port2)}
                    >
                     <img src={port2} alt="port1" className='w-100 border rounded' />  
                     <div className={`${layer} border-0 rounded`}>
                        <div className={`${plusColor}`}>
                        <i className="fa-solid fa-plus fa-2xl text-white"></i>
                        </div>
                    </div>  
                    </div>
                    <div className="col-md-6 col-lg-4 position-relative"
                    onClick={() => openModal(port3)}
                    >
                     <img src={port3} alt="port1" className='w-100 border rounded' />  
                     <div className={`${layer} border-0 rounded`}>
                        <div className={`${plusColor}`}>
                        <i className="fa-solid fa-plus fa-2xl text-white"></i>
                        </div>
                    </div>  
                    </div>
                    </div>
                </div>
                {isModalOpen && (
          <div
            className={`${lightbox} modal-overlay`}
            onClick={closeModal}
          >
            <div
              className={`${imgw} modal-content`} style={{width:"50%", margin:"auto"}}  
              onClick={(e) => e.stopPropagation()}>
                
              <img src={modalImage} alt="Enlarged View" style={{margin:"23% 0", width: "485px"}}/>
            </div>
          </div>
        )}
        </div>

    </section>
  )
}
