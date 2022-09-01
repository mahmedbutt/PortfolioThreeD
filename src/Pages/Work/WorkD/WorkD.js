import React from 'react'
import {  Modal,  ModalBody } from 'reactstrap';
import {AiFillCloseCircle} from 'react-icons/ai'
function WorkD({ lang, theme,modal,toggle }) {
  return (
       // for open work D panel
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
                    muted  className="w-100">
                  <source
                    src="/Work(D)/NixieDip.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="col-lg-12 d-flex justify-content-center  work">
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-center text-center">
                    {" "}
                    <h6>Webflow - Shopify</h6>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center ">
                    {" "}
                    <h1>NixieDip</h1>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center ">
                    <img
                      src="/Work(D)/NixieDip-smartphones.png"
                      width="100%"
                      alt="workA"
                    />
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center  overflow-x">
                    <div className=''>
                    <img
                      src="/Work(D)/NixieDip-Screenshot1.png"
                      alt="workA"
                      className="work-screenshot"
                    />
                    <img
                      src="/Work(D)/NixieDip-Screenshot2.png"
                      alt="workA"
                      className="work-screenshot"
                    />
                    <img
                      src="/Work(D)/NixieDip-Screenshot3.png"
                      alt="workA"
                      className="work-screenshot"
                    />
                    <img
                      src="/Work(D)/NixieDip-Screenshot4.png"
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

export default WorkD