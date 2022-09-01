import React from 'react'
import {  Modal,  ModalBody } from 'reactstrap';
import {AiFillCloseCircle} from 'react-icons/ai'
function WorkC
({ lang, theme,modal,toggle }) {
  return (
       // for open work C panel
      <Modal isOpen={modal} toggle={toggle} size='lg' className={`${theme ? "light" : "dark"}`} >
    <ModalBody>
    <div className={theme ? "light position-relative" : "dark position-relative"}>
      <div className="container-fluid work">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-11 col-xl-9 ">
            <div className="row">
              <div className="col-lg-12  d-flex justify-content-center">
              <AiFillCloseCircle  onClick={toggle} className='position-absolute top-0 end-0 AiFillCloseCircle'/>
                <video  autoPlay={true} 
                    loop={true}
                    controls={false} 
                    playsInline
                    muted className="w-100">
                  <source
                    src="/Work(C)/elarcareel.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="col-lg-12 d-flex justify-content-center  work">
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-center text-center">
                    {" "}
                    <h6>Web Design - Javascript - MongoDB - Bootstrap</h6>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center ">
                    {" "}
                    <h1>El Arca</h1>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center ">
                    <img
                      src="/Work(C)/Elarca-Smartphones.png"
                      width="100%"
                      alt="workA"
                    />
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center  overflow-x">
                    <div className=''>
                    <img
                      src="/Work(C)/elarca-screenshot1.png"
                      alt="workA"
                      className="work-screenshot"
                    />
                    <img
                      src="/Work(C)/elarca-screenshot2.png"
                      alt="workA"
                      className="work-screenshot"
                    />
                    <img
                      src="/Work(C)/elarca-screenshot3.png"
                      alt="workA"
                      className="work-screenshot"
                    />
                    <img
                      src="/Work(C)/elarca-screenshot4.png"
                      alt="workA"
                      className="work-screenshot"
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </ModalBody>
    </Modal>
  )
}

export default WorkC
