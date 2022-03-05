import React, { useRef, useEffect, useCallback ,useState} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 1500px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  

  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #4863AB;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10000;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({

    opacity: showModal ? "1" : 0,
    transform: showModal ? "translateY(0%)": "translateY(-100%)",
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  const [ch, setch] = useState("Créer un compte");
    
  const [f1tof2, setf1tof2] = useState(true);
  const changeValueForm =()=>{
    setch("Information d\'enfant")
    setf1tof2(!f1tof2)
  }
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={require('./img3.jpg')} alt='camera' />
              <ModalContent>
        <h2 style={{
          margin:"40px",
          marginTop:"40px",
            
            textAlign:"center",
            color:"#637bbb",
            fontWeight:"500"
        }}>{ch}</h2>
              <form style={{
                width:"70%",margin:"auto",marginTop:"40px",display:f1tof2 ? 'block':'none'
              }}>
  <div class="form-row" >
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nom</label>
      <input type="email" class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Prenom</label>
      <input type="tect" class="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address e-mail</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="example@domain.com"/>
  </div>
  <div class="form-group col-md-6"style={{
                display:"inline-block",width:"48%",float:"right"
              }}>
      <label for="inputCity" >Confirmer le mot de passe</label>
      <input type="password" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-6" style={{
                display:"inline-block",width:"48%"
              }}>
      <label for="inputCity">Mot de passe</label>
      <input type="password" class="form-control" id="inputCity"/>
    </div>
  <div class="form-group">
    <label for="inputAddress2">Occupation</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div class="form-row">

    <div class="form-group col-md-4 " style={{

      width:"48%",display:"inline-block"
    }}>
      <label for="inputState">Ville</label>
      <select id="inputState" class="form-control">
        <option selected>--choisir--</option>
        
        <option>Sfax</option>
        <option>Tunis</option>
        <option>Gabes</option>
        <option>Ariana</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2" style={{

width:"48%",display:"inline-block",float:"right"
}}>
      <label for="inputZip">Telephone</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">


    </div>
  </div>
  <button type="submit" class="btn btn-primary" onClick={changeValueForm} style={{float:"right"}}>Continuer</button>
</form>
<form style={{
                width:"70%",margin:"auto",marginTop:"40px",display:f1tof2 ? 'none':'block'
              }}>
  <div class="form-row" >
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nom</label>
      <input type="email" class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Prenom</label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">date de naissance</label>
    <input type="date" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>

  <div class="form-row">
  <div class="form-group form-check" style={{
    marginTop:"15px"
  }}>
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">{"J'accepte les termes d'utilistaion"}</label>
  </div>



  </div>
  <div class="form-group">
    <div class="form-check">


    </div>
  </div>
  <button type="submit" class="btn btn-primary " style={{float:"right"}}>inscrire</button>
  <button type="submit" class="btn btn-primary " onClick={changeValueForm} style={{float:"right",marginRight:"20px"}}>Back</button>
  
</form>

              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
