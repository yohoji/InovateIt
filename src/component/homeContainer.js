
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import './homeContainer.css'
import { Link } from "react-router-dom"


import { Modal } from './Modal'
import {useState} from 'react'

function HomeContainer() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    const a =!showModal
    setShowModal(a);
  }
    return (<>
      { showModal ? <Modal showModal={false} setShowModal={setShowModal} /> : null }
<div class="container col-xxl-8 px-4 py-5" style={{
    marginTop:"100px"
    
}}>
    <img src="hero-1-circle.png " className=" rotate pinkCercle" alt="" />
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="img1.jpg" class="d-block mx-lg-auto img-fluid "
        style={{
            borderRadius:"50px 10px 50px 10px",

        }}
        alt="" loading="lazy" width="700" height="500"/>


                <img src="hero-1-dot.png" class="homeImage d-block mx-lg-auto img-fluid "
        alt="" loading="lazy" />
      </div>
      <div class="col-lg-6">
      <h4 class="display-6 fw lh-1 mb-3">Accés 100+ guides</h4>
        <h1 class="display-5 fw-bold lh-1 mb-3 firstColor">En ligne présentés par nos experts </h1>
        <p class="lead">Eduquer votre enfant d'une manière plus saine et moderne pour s'assurer qu'il peut prendre ses responsabilités et être une entité active dans la société. <br/>
        Cette plateforme vous aidera à atteindre cet objectif gratuitement.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        
        
          <button type="button"
          style={{marginTop:"10px",
              padding:'5px 60px'
          }}
          class="btn btn-primary btn-lg  me-md-2 bgFirstColor" onClick={openModal}>Commencer</button>
          <Link class="btn btn-outline-secondary btn-lg"
          style={{marginTop:"10px",
            padding:'5px 40px'
        }}
        to="/cours"
          >Voir cours</Link>
        </div>
      </div>
    </div>
  </div>
  </>
    );
  }
  
  export default HomeContainer;