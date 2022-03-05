
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import './homeContainer.css'


import { Modal } from './Modal'
import {useState} from 'react'

function HomeContainer() {
  const [showModal, setShowModal] = useState(true);
  const openModal = () => {
    const a =!showModal
    setShowModal(a);
  }
    return (<>
      <Modal showModal={showModal} setShowModal={setShowModal} />
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
        <h1 class="display-5 fw-bold lh-1 mb-3 firstColor">Responsive left-aligned hero with image</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit. <br/>
        the world’s most popular front-end open source toolkit.the world’s most popular.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        
        
          <button type="button"
          style={{
              padding:'5px 60px'
          }}
          class="btn btn-primary btn-lg  me-md-2 bgFirstColor" onClick={openModal}>Commencer</button>
          <button type="button" class="btn btn-outline-secondary btn-lg "
          style={{
            padding:'5px 40px'
        }}
          >Voir cours</button>
        </div>
      </div>
    </div>
  </div>
  </>
    );
  }
  
  export default HomeContainer;