/* eslint-disable jsx-a11y/anchor-has-content */
import React,{useRef} from "react";
import "./Contect.css";
import * as contect from "./Contact/N5_JSON_(Contact).json";
import Lottie from "react-lottie";
import {  Modal,  ModalBody } from 'reactstrap';
import emailjs from '@emailjs/browser';
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { useAlert } from "react-alert";
function Contect({ lang, theme,modal,toggle }) {
  // For contact animation.
  const defaultOptionContect = {
    loop: true,
    autoplay: true,
    animationData: contect,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // for form elements
  const form = useRef();
  const alert=useAlert()
  // for sending emailjs
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)

    emailjs.sendForm('service_3mlvroi', 'template_ygax0fs', form.current, 'L2EIoHOnM3Ugkp_ED')
      .then((result) => {
          alert.success("Tu mensaje ha sido enviado")
          form.current.reset();
      }, (error) => {
          alert.error("Tu mensaje no ha sido enviado")
      });

  };
    
  return (
    // to open the modal for contact us.
     <Modal isOpen={modal} toggle={toggle} size='lg' className={`${theme ? "light" : "dark"}`} >
        <ModalBody>
    <div className={`${theme ? "light" : "dark"}`}>
      <div className="container-fluid contect">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-11 col-xl-10 ">
            <div className="row contect_content d-flex justify-content-center">
            <p className='contact__p p-4' onClick={toggle} >{lang?'< Atrás':'< Back'}</p>
              <div className="col-lg-12 ">
                {/* contect us animation. */}
                <Lottie
                  options={defaultOptionContect}
                  height={150}
                  width={"50%"}
                />
              </div>
              <div className="col-lg-12 text-center">
                <h1>{lang?'Contacto':'Contact'}</h1>
              </div>
              <div className="col-lg-12 text-center">
              <a href="https://twitter.com/MiguelG22887796" target={'__black'}> <AiFillTwitterCircle className="social" /></a> 
              <a href="https://instagram.com/mg.fullstack" target={'__black'}>   <AiOutlineInstagram className="social" /></a> 
              <a href="https://github.com/mg-fullstack" target={'__black'}>  <AiFillGithub className="social" /></a> 
              <a href="https://www.linkedin.com/in/miguel-fullstack" target={'__black'}>  <AiFillLinkedin className="social" /></a> 
              </div>
              <div className="col-lg-10 py-5">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label for="name" className="form-label">
                     {lang? 'Nombre':'Name'}
                    </label>
                    <input type="text" className="form-control" id="name" name='name'/>
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      {lang?'Email':'Email'}
                    </label>
                    <input type="email" className="form-control" id="email" name='email' />
                  </div>
                  <div className="mb-3">
                    <label for="website" className="form-label">
                      Website URL <sub className='small'>(optional)</sub>
                    </label>
                    <input type="text" className="form-control" id="website" name='website'  />
                  </div>
                  <div className="mb-3">
                    <label for="subject" className="form-label">
                      {lang?'Asunto':'Subject'}
                    </label>
                    <input type="text" className="form-control" id="subject" name='subject' />
                  </div>
                  <div className="mb-3">
                    <label for="message" className="form-label" name>
                      {lang?'Mensaje':'Message'}
                    </label>
                    <textarea
                      className="form-control"
                      style={{ resize: "none" }}
                      id="message"
                      rows="7"
                      name='message'
                    ></textarea>
                  </div>
                  <div className="w-100 d-flex justify-content-center">
                    <button className="btn btn-primary">{lang?'Enviar email':'Send email'}</button>
                  </div>
                </form>
               
              </div>
              <p className='text-center contact__p'>{lang?'¿Odias los formularios?: mg.fullstack@gmail.com':'Hate forms?: mg.fullstack@gmail.com'}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </ModalBody>
    </Modal>
  );
}

export default Contect;
