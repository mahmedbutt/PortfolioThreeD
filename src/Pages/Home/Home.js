import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import ReactCardFlip from "react-card-flip";
import { useInView } from "react-intersection-observer";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Contect from "../Contect/Contect";
import { IoAddCircleSharp } from "react-icons/io5";
import WorkA from "../Work/WorkA/WorkA";
import WorkB from "../Work/WorkB/WorkB";
import WorkC from "../Work/WorkC/WorkC";
import WorkD from "../Work/WorkD/WorkD";
import TiltPhaseSix from "../../Components/TiltPhoseSix/TiltPhaseSix";
import Computer3DModel from "../Computer3DModel/Computer3DModel";

function Home({ lang, theme, setAnimationState }) {
  const location = useLocation();
  const threeDSpaceContainerRef = useRef();

  // this function is used to send page on top
  useEffect(() => {
    if (location.hash === "") {
      document.getElementById("element").scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  const animationState = (value) => {
    setAnimationState(value);
  };
  // thse useRef are used for scroll effect.
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  // this array is used to open and close question tab.
  const [isFliped, setIsfliped] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  // these varible are used to opena and close model panel.
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modalA, setModalA] = useState(false);
  const toggleA = () => setModalA(!modalA);
  const [modalB, setModalB] = useState(false);
  const toggleB = () => setModalB(!modalB);
  const [modalC, setModalC] = useState(false);
  const toggleC = () => setModalC(!modalC);
  const [modalD, setModalD] = useState(false);
  const toggleD = () => setModalD(!modalD);
  const HanldeCheck = (index) => {
    setIsfliped((prevState) =>
      prevState.map((item, idx) => (idx === index ? !item : item))
    );
  };
  // used for work image effect.
  const options = {
    max: 10,
    perspective: 1000,
    scale: 0.7,
  };
  return (
    <>
      <Contect lang={lang} theme={theme} modal={modal} toggle={toggle} />
      <WorkA lang={lang} theme={theme} modal={modalA} toggle={toggleA} />
      <WorkB lang={lang} theme={theme} modal={modalB} toggle={toggleB} />
      <WorkC lang={lang} theme={theme} modal={modalC} toggle={toggleC} />
      <WorkD lang={lang} theme={theme} modal={modalD} toggle={toggleD} />
      <div className={`${theme ? "light" : "dark"}`} id="element">
        <div className={`container-fluid home`}>
          <div>
            <div ref={threeDSpaceContainerRef}>
              <Computer3DModel
                theme={theme}
                setAnimationState={animationState}
                threeDSpaceContainerRef={threeDSpaceContainerRef}
              ></Computer3DModel>
            </div>
            <div className="col-lg-12 d-flex justify-content-center">
              {lang ? (
                <h4 className="bold">Miguel González</h4>
              ) : (
                <h4 className="bold">Miguel González</h4>
              )}
            </div>
            <div className="col-lg-11 d-flex justify-content-center text-center">
              {lang ? (
                <h1 className="bold">Desarrollador Full Stack Jr.</h1>
              ) : (
                <h1 className="bold">A Jr. Full Stack Developer</h1>
              )}
            </div>
            <div
              className="col-lg-12 d-flex justify-content-center py-4"
              onClick={() => setModal(!modal)}
            >
              <h4 className="bold blue__color text-center">
                <span>
                  {lang
                    ? "Hagamos cosas que marquen la diferencia >"
                    : "Let's do thing that make a difference >"}{" "}
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="container-fluid section__2 d-none d-lg-block">
          <div className="row d-flex justify-content-center">
            <div className="col-10 text-center">
              {lang ? (
                <h1>
                  ¿Tienes un proyecto intersante en el que necesitas ayuda?
                </h1>
              ) : (
                <h1>Do you have an exciting project you need help with?</h1>
              )}
            </div>
          </div>
        </div>
        <div className="container-fluid section__3" id="aboutus">
          <div className="row section__3__content d-flex justify-content-center">
            <div className="col-lg-9">
              <h4>
                <span className="about-text">
                  {lang ? "Sobre Mí" : "About Me"}
                </span>
              </h4>
            </div>
            <div className="col-lg-9 ">
              {lang ? (
                <h1>Desarrollador creativo en remoto.</h1>
              ) : (
                <h1>Remote creative developer.</h1>
              )}
            </div>
            <div className="col-lg-12 ">
              <div className="row section__3__about d-flex justify-content-between">
                <div className="col-lg-6 ">
                  {lang ? (
                    <h3>Un Full Stack Developer.</h3>
                  ) : (
                    <h3>A Full Stack Developer.</h3>
                  )}
                  <br />
                  {lang ? (
                    <p>
                      Hola, soy Miguel, un desarrollador web creativo que
                      trabaja en remoto desde la soleada isla de Tenerife
                      (España). Soy un recién llegado a este mundo de crear
                      productos y experiencias web atractivas.
                      <br />
                      Busco oportunidades para colaborar con empresas / agencias
                      / autónomos / particulares, pero no sólo para trabajar con
                      ellos. Quiero aportar mis conocimientos y experiencia en
                      el desarrollo de su proyecto y poder trabajar juntos en la
                      solución de problemas reales de una manera que aproveche
                      nuestros respectivos conocimientos y experiencias.
                      <br />
                      Si esto te suena bien, entonces hablemos de cómo podemos
                      trabajar juntos.
                      <br />
                    </p>
                  ) : (
                    <p>
                      Hi, I'm Miguel, a creative web developer working remotely
                      from the sunny island of Tenerife (Spain). I'm a newcomer
                      to the world of creating engaging web products and
                      experiences.
                      <br />
                      I'm looking for opportunities to collaborate with
                      companies / agencies / freelancers / individuals, but not
                      only to work with them. I want to bring my knowledge and
                      experience in development and be able to work together on
                      solving real problems in a way that leverages our
                      respective knowledge and experience.
                      <br />
                      If this sounds good to you, then let's talk about how we
                      can work together.
                      <br />
                    </p>
                  )}
                  <h3>
                    {" "}
                    <span
                      className="blue__color"
                      onClick={() => setModal(!modal)}
                    >
                      {lang
                        ? "Envíame un mensaje y charlemos >"
                        : "Send me a message and let's chat >"}
                    </span>
                  </h3>
                </div>
                <div className="col-lg-5 d-flex  justify-content-center align-items-center pb-5  ">
                  <div className="image  p-relative">
                    <img
                      className="section__3__about__img  "
                      src="/AboutMe(1).png"
                      alt="me"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__4 container-fluid" id="myskill">
          <div className="row section__4__content  d-flex justify-content-center">
            <div className="col-lg-9">
              <h4>
                <span className="about-text">
                  {lang ? "Mis Habilidades" : "My Skills"}
                </span>
              </h4>
            </div>
            <div className="col-lg-9">
              {lang ? (
                <h1>
                  Siempre <br /> Aprendiendo
                </h1>
              ) : (
                <h1>
                  Always <br /> learning
                </h1>
              )}
            </div>
            <div className="col-lg-12  section__4__client__margin">
              <div className="row">
                <div className="col-lg-6 section__4__client ">
                  <h3>
                    {lang
                      ? " Desarrollador Full Stack para construir tu diseño > código >web."
                      : "Full Stack developer to transform your design > code > site."}
                  </h3>
                  <p className="section__4__client__p">
                    {" "}
                    Creo sitios web responsive rápidos, fáciles de usar y
                    construidos con las mejores prácticas. Mi principal
                    experiencia es el desarrollo FrontEnd, HTML, CSS, JS,
                    MongoDB, Express, React & Nodejs (MERN), construyendo
                    aplicaciones web pequeñas y medianas, características,
                    animaciones y codificando diseños interactivos. Mi
                    conocimiento como desarrollador Full Stack también me
                    permite construir un BackEnd adecuado a sus necesidades.
                  </p>
                </div>
                <div className="col-lg-6 ">
                  <div className="row row-cols-2 h-100">
                    <div className="mb-lg-4 my-4 mt-lg-0 ">
                      <div className="section__4__client_s custom_pad text-center w-100 h-100  d-flex justify-content-center align-items-center flex-column">
                        <h1 className="client m-0">
                          4<sup>+</sup>
                        </h1>
                        <h6 className="section__4__client__p">
                          Clientes Felices
                        </h6>
                      </div>
                    </div>
                    <div className="mb-lg-4 my-4  mt-lg-0 ">
                      <div className="section__4__client_s custom_pad d-flex justify-content-center align-items-center flex-column w-100 h-100">
                        <h1 className="exprerience m-0">
                          +1<sub>Año</sub>
                        </h1>
                        <h6 className="section__4__client__p">Experiencia</h6>
                      </div>
                    </div>
                    <div className=" ">
                      <div className="section__4__client_s custom_pad text-center w-100 h-100  d-flex justify-content-center align-items-center flex-column">
                        <h1 className="prototype m-0">
                          4<sup>+</sup>
                        </h1>
                        <h6 className="section__4__client__p">Proyectos Web</h6>
                      </div>
                    </div>
                    <div className="">
                      <div className="section__4__client_s custom_pad text-center w-100 h-100  d-flex justify-content-center align-items-center flex-column">
                        <h1 className="profession m-0">
                          100<sub>%</sub>
                        </h1>
                        <h6 className="section__4__client__p">Profesional</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12  section__4__client__margin section__5">
              <div className="row d-flex justify-content-md-between">
                <div className="col-lg-5 d-flex  justify-content-center flex-column pe-lg-5">
                  {lang ? (
                    <h3>
                      Entusiasta de la
                      <br /> Animación.
                    </h3>
                  ) : (
                    <h3>
                      Animation <br />
                      Enthusiast.
                    </h3>
                  )}
                  {lang ? (
                    <p>
                      Tanto si se trata de sutiles iconos animados que mejoran
                      la UI o animaciones para productos digitales más
                      complejos. Yo puedo crearlos y añadirlos a tu proyecto.
                    </p>
                  ) : (
                    <p>
                      Whether it's subtle animated icons that improve UI or
                      animations for more complex digital products. I can build
                      them and add them to your project.
                    </p>
                  )}
                </div>
                <div className="col-lg-6 tv position-relative p-0 m-0 d-flex justify-content-center mt-3 mt-md-0">
                  <img src="/Moniter.png" alt="mointer" className="tv-img" />
                  <video
                    autoPlay={true}
                    loop={true}
                    controls={false}
                    playsInline
                    muted
                    className="position-absolute video "
                  >
                    <source src="/3dAnimation.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="col-lg-12  section__4__client__margin section__6">
              <div className="row  ">
                <div className="col-lg-6 px-0 position-relative">
                  <div className="col-lg-12  pb-4 pb-md-3">
                    <img
                      src="/Skill&intergraton.png"
                      alt="skill"
                      width={"100%"}
                      className="img_round"
                    />
                    {lang ? (
                      <h5 className="position-absolute   section__6__h5">
                        Habilidades e <br /> Integraciones.
                      </h5>
                    ) : (
                      <h5 className="position-absolute   section__6__h5">
                        Skills & <br /> Integrations.{" "}
                      </h5>
                    )}
                  </div>
                </div>
                <div ref={ref2} className="col-lg-6 mt-3 mt-lg-0 ">
                  <div className="row h-100 d-flex justify-content-end ">
                    <div className="col-lg-11 px-0">
                      <div className="row h-100 w-100 graph position-relative">
                        {lang ? (
                          <h5 className="position-absolute graph__h5 ">
                            Arquitectura del Proyecto <br />
                            Escalable.
                          </h5>
                        ) : (
                          <h5 className="position-absolute graph__h5 ">
                            Scalable Project <br />
                            Arquitecture.
                          </h5>
                        )}

                        <div className="col d-flex align-items-end justify-content-center">
                          <img
                            src="/graph/g1.png"
                            width={0}
                            className={`${inView2 ? "g1" : ""}`}
                            alt="g1"
                          />
                        </div>
                        <div className="col  d-flex align-items-end justify-content-center">
                          <img
                            src="/graph/g2.png"
                            className={`${inView2 ? "g1" : ""}`}
                            width={0}
                            alt="g2"
                          />
                        </div>
                        <div className="col  d-flex align-items-end justify-content-center">
                          <img
                            src="/graph/g3.png"
                            className={`${inView2 ? "g1" : ""}`}
                            width={0}
                            alt="g3"
                          />
                        </div>
                        <div className="col  d-flex align-items-end justify-content-center">
                          <img
                            src="/graph/g4.png"
                            className={`${inView2 ? "g1" : ""}`}
                            width={0}
                            alt="g4"
                          />
                        </div>
                        <div className="col  d-flex align-items-end justify-content-center">
                          <img
                            src="/graph/g5.png"
                            className={`${inView2 ? "g1" : ""}`}
                            width={0}
                            alt="g5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12   section__4__client__margin section__7">
              <div className="row">
                <div className="col-lg-4 px-0 img__responsive d-flex justify-content-center align-items-center text-center">
                  {lang ? (
                    <h3 className=" color__white">
                      Desarrollo
                      <br />
                      Pixel-Perfect.
                    </h3>
                  ) : (
                    <h3 className="color__white">
                      Pixel-Perfect
                      <br /> Development.
                    </h3>
                  )}
                </div>
                <div className="col-lg-8  mt-3 mt-lg-0">
                  <div className="row d-flex justify-content-end   h-100 ">
                    <div className="p-4 col-lg-11 position-relative row_custom   mt-lg-0  mt-md-0  ms-md-0 d-flex align-items-end justify-content-end">
                      {lang ? (
                        <h5 className="position-absolute responsive__h5 pt-2 ">
                          Diseño Responsive
                        </h5>
                      ) : (
                        <h5 className="position-absolute responsive__h5 pt-2 ">
                          Responsive Design
                        </h5>
                      )}
                      <br />
                      <img
                        src="/Responsive_design.png"
                        width="90%"
                        className="section__7__img pt-5 "
                        alt="pixel"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12  section__4__client__margin section__8">
              <div className="row">
                <div className="col-lg-6 code ">
                  <h6 className="pt-5 pb-3 py-lg-5 px-3">
                    {lang ? "Código Limpio" : "Clean Code"}
                  </h6>
                  <div className="intro-card-code-wrap">
                    <div>
                      <span className="code-color">&lt;ul&gt;</span>
                    </div>
                    <div className="intro-card-code-indented">
                      <span className="code-color">&lt;li&gt;</span>
                      {lang ? "HTML Semántico." : "Semantic HTML."}
                      <span className="code-color">&lt;/li&gt;</span>
                    </div>
                    <div className="intro-card-code-indented">
                      <span className="code-color">&lt;li&gt;</span>
                      {lang
                        ? "Denominaciones className."
                        : "className naming system"}
                      <span className="code-color">&lt;/li&gt;</span>
                    </div>
                    <div className="intro-card-code-indented">
                      <span className="code-color">&lt;li&gt;</span>
                      {lang
                        ? "Rendimiento Optimizado."
                        : "Optimized for performance."}
                      <span className="code-color">&lt;/li&gt;</span>
                    </div>
                    <div>
                      <span className="code-color">&lt;/ul&gt;</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  mt-3 mt-lg-0">
                  <div className="row   h-100 position-relative justify-content-end">
                    <div ref={ref} className="col-lg-11 row_custom  ">
                      <h4 className="pt-5 pb-3 py-lg-5 px-3">
                        {lang
                          ? "Duración de Mis Desarrollos"
                          : "Duration of My Developments"}
                      </h4>

                      <div className={`intro ${inView ? "anim" : ""}`}>
                        <div className="introMonth">
                          <div
                            style={{ width: "110%", height: "10px" }}
                            className="introMonthLine "
                          ></div>
                          <div>{lang ? "Meses" : "Months"}</div>
                        </div>
                        <div className="introWeeks">
                          {lang ? "Semanas" : "Weeks"}
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid section__11 mb-0 " id="mywork">
          <div className="row section__4__content d-flex justify-content-center section__4__client__margin  section__9">
            <div className="row px-0  d-flex justify-content-center">
              <div className="col-lg-9">
                <h4>
                  <span className="about-text">
                    {lang ? "Trabajos" : "Works"}
                  </span>
                </h4>
              </div>
              <div className="col-lg-9">
                {lang ? (
                  <h1>
                    Descubre mis
                    <br /> primeros proyectos.
                  </h1>
                ) : (
                  <h1>
                    Discover some <br />
                    of my first projects.
                  </h1>
                )}
              </div>
              <div className="col-lg-12 px-0   section__4__client__margin pb-3">
                <div className="row px-0">
                  <div className="col-lg-6 position-relative workPage">
                    <TiltPhaseSix options={options}>
                      <img
                        src="/Work(A)/WorkA.png"
                        className="border__round"
                        width="100%"
                        alt="workA"
                      />
                      <IoAddCircleSharp
                        className="position-absolute AddCircle"
                        onClick={() => setModalA(!modalA)}
                      />
                    </TiltPhaseSix>{" "}
                  </div>
                  <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0 position-relative workPage">
                    <TiltPhaseSix options={options}>
                      <img
                        src="/Work(B)/WorkB.png"
                        className="border__round"
                        width="100%"
                        alt="workA"
                      />
                      <IoAddCircleSharp
                        className="position-absolute AddCircle"
                        onClick={() => setModalB(!modalB)}
                      />
                    </TiltPhaseSix>
                  </div>
                  <div className="col-lg-6 mt-3 mt-md-3 mt-lg-3 position-relative workPage">
                    <TiltPhaseSix options={options}>
                      <img
                        src="/El_ArcaWork.png"
                        className="border__round"
                        width="100%"
                        alt="workA"
                      />
                      <IoAddCircleSharp
                        className="position-absolute AddCircle"
                        onClick={() => setModalC(!modalC)}
                      />
                    </TiltPhaseSix>
                  </div>
                  <div className="col-lg-6 mt-3 mt-md-3 mt-lg-3 position-relative workPage">
                    <TiltPhaseSix options={options}>
                      <img
                        src="/NixieDipWork.png"
                        className="border__round"
                        width="100%"
                        alt="workA"
                      />
                      <IoAddCircleSharp
                        className="position-absolute AddCircle"
                        onClick={() => setModalD(!modalD)}
                      />
                    </TiltPhaseSix>
                  </div>
                </div>
              </div>
              <div className="col-lg-12  pb-3  px-0">
                <div className="row">
                  <Link to="/reason">
                    <div className="col-lg-12 section__9__grad d-flex justify-content-center align-items-center flex-column">
                      <div>
                        {lang ? (
                          <h2>
                            8 razones para trabajar con
                            <br /> Miguel en tu proyecto.
                          </h2>
                        ) : (
                          <h2>
                            8 reasons to work on your <br />
                            project with Miguel.
                          </h2>
                        )}
                      </div>
                      <div>
                        <p className="p-0 m-0">
                          {lang ? "Descúbrelas >" : "Discover the reasons >"}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-12   section__4 section__4__client__margin section__10 pb-3 ">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-10 py-3 text-center">
                    <div>
                      {lang ? (
                        <h2>Preguntas frecuentes</h2>
                      ) : (
                        <h2>Frequently asked questions</h2>
                      )}
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="m-2 ">
                            <ReactCardFlip
                              className=""
                              isFlipped={isFliped[0]}
                              flipDirection="vertical"
                            >
                              <div>
                                <div className="container-fluid">
                                  <div className="row ReactCardFlipFront d-flex align-items-center">
                                    <div className="col-10 col-md-11  question">
                                      {lang
                                        ? "¿Qué servicios ofrezco exactamente?"
                                        : "What services do I offer exactly?"}
                                    </div>
                                    <div className="col-1">
                                      <AiOutlinePlus
                                        onClick={() => HanldeCheck(0)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="container-fluid">
                                  <div className="row ReactCardFlipBack d-flex align-items-center">
                                    {lang ? (
                                      <div className="col-10 col-md-11">
                                        Mi trabajo se centra en el desarrollo de
                                        sitios web dinámicos, especializado
                                        principalmente en la construcción del
                                        frontend. Mi formación y conocimientos
                                        como full stack también me permiten
                                        desarrollar e implementar el backend, lo
                                        que me da la posibilidad de ofrecerte un
                                        servicio de desarrollo completo “web en
                                        mano”.
                                      </div>
                                    ) : (
                                      <div className="col-10 col-md-11">
                                        My work focuses on the development of
                                        dynamic websites, specialising mainly in
                                        frontend development. My training and
                                        knowledge as a full stack also allow me
                                        to develop and implement the backend,
                                        which gives me the possibility to offer
                                        you a complete turnkey development
                                        service.
                                      </div>
                                    )}
                                    <div className="col-1">
                                      <AiOutlineClose
                                        onClick={() => HanldeCheck(0)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ReactCardFlip>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="m-2 ">
                            <ReactCardFlip
                              className=""
                              isFlipped={isFliped[1]}
                              flipDirection="vertical"
                            >
                              <div>
                                <div className="container-fluid">
                                  <div className="row ReactCardFlipFront d-flex align-items-center">
                                    <div className="col-10 col-md-11 question">
                                      {lang
                                        ? "¿Cuánto cuesta un proyecto?"
                                        : " How much does a project cost?"}
                                    </div>
                                    <div className="col-1">
                                      <AiOutlinePlus
                                        onClick={() => HanldeCheck(1)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="container-fluid">
                                  <div className="row ReactCardFlipBack d-flex align-items-center">
                                    {lang ? (
                                      <div className="col-10 col-md-11">
                                        El coste de los proyectos dependerá
                                        principalmente del número de horas
                                        necesarias para completarlo. Como
                                        desarrollador Full Stack Jr. la mayoría
                                        de mis trabajos oscilan entre los 15,00
                                        €/hora y 20,00 €/hora. Si necesitas una
                                        propuesta económica personalizada para
                                        tu proyecto, por favor no dudes en
                                        contactar conmigo para enviarte una
                                        valoración concreta.
                                      </div>
                                    ) : (
                                      <div className="col-10 col-md-11">
                                        The cost of the projects will depend
                                        mainly on the number of hours needed to
                                        complete it. As a Full Stack Jr.
                                        developer, most of my jobs range between
                                        15,00 €/hour and 20,00 €/hour. If you
                                        need a custom quote for your project,
                                        please don't hesitate to contact me to
                                        send you an estimate.
                                      </div>
                                    )}
                                    <div className="col-1">
                                      <AiOutlineClose
                                        onClick={() => HanldeCheck(1)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ReactCardFlip>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="m-2 ">
                            <ReactCardFlip
                              className=""
                              isFlipped={isFliped[2]}
                              flipDirection="vertical"
                            >
                              <div>
                                <div className="container-fluid">
                                  <div className="row ReactCardFlipFront d-flex align-items-center">
                                    <div className="col-10 col-md-11 question">
                                      {lang
                                        ? "¿Con qué empresas trabajo?"
                                        : " Which companies do I work with?"}
                                    </div>
                                    <div className="col-1">
                                      <AiOutlinePlus
                                        onClick={() => HanldeCheck(2)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="container-fluid">
                                  <div className="row ReactCardFlipBack d-flex align-items-center">
                                    {lang ? (
                                      <div className="col-10 col-md-11 ">
                                        Trabajo con cualquier empresa que busque
                                        crear o mejorar sus servicios, productos
                                        o experiencias digitales a través de un
                                        desarrollo web atractivo. Busco
                                        oportunidades principalmente con
                                        pequeñas y medianas empresas, agencias,
                                        autónomos o particulares, aunque también
                                        estoy abierto a colaborar con grandes
                                        compañías.
                                      </div>
                                    ) : (
                                      <div className="col-10 col-md-11">
                                        I work with any company looking to
                                        create or improve their services,
                                        products or digital experiences through
                                        engaging web development. I look for
                                        opportunities mainly with small and
                                        medium-sized businesses, agencies,
                                        freelancers or individuals, although I
                                        am also open to collaborate with large
                                        companies.
                                      </div>
                                    )}
                                    <div className="col-1">
                                      <AiOutlineClose
                                        onClick={() => HanldeCheck(2)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ReactCardFlip>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="m-2 ">
                            <ReactCardFlip
                              className=""
                              isFlipped={isFliped[3]}
                              flipDirection="vertical"
                            >
                              <div>
                                <div className="container-fluid">
                                  <div className="row ReactCardFlipFront d-flex align-items-center">
                                    <div className="col-10 col-md-11 question ">
                                      {lang
                                        ? "¿Trabajo internacionalmente?"
                                        : "I work internationally?"}
                                    </div>
                                    <div className="col-1">
                                      <AiOutlinePlus
                                        onClick={() => HanldeCheck(3)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="container-fluid">
                                  <div className="row  ReactCardFlipBack d-flex align-items-center">
                                    {lang ? (
                                      <div className="col-10 col-md-11">
                                        Sí. Vivo en Tenerife (España) y puedo
                                        trabajar con clientes de otros países.
                                        Mi dominio del inglés hablado no es muy
                                        alto, sin embargo, estoy familiarizado
                                        con el vocabulario técnico escrito en
                                        inglés, dispongo y conozco herramientas
                                        que me permiten suplir en muchos casos
                                        las carencias de no hablar inglés
                                        fluidamente y siempre encuentro recursos
                                        que me permiten manejar documentación o
                                        comunicación en inglés cuando es
                                        necesario.
                                      </div>
                                    ) : (
                                      <div className="col-10 col-md-11">
                                        Yes, I live in Tenerife (Spain) and I
                                        can work with clients from other
                                        countries. My command of spoken English
                                        is not very high, however, I am familiar
                                        with the technical vocabulary written in
                                        English, I have and know tools that
                                        allow me to compensate in many cases the
                                        shortcomings of not speaking English
                                        fluently and I always find resources
                                        that allow me to handle documentation or
                                        communication in English when necessary.
                                      </div>
                                    )}
                                    <div className="col-1">
                                      <AiOutlineClose
                                        onClick={() => HanldeCheck(3)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ReactCardFlip>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="m-2 ">
                            <ReactCardFlip
                              className=""
                              isFlipped={isFliped[4]}
                              flipDirection="vertical"
                            >
                              <div>
                                <div className="container-fluid">
                                  <div className="row ReactCardFlipFront d-flex align-items-center">
                                    <div className="col-10 col-md-11 question">
                                      {lang
                                        ? "¿Cuáles son las condiciones de pago de un proyecto?"
                                        : "   What are the payment terms for a project?"}
                                    </div>
                                    <div className="col-1">
                                      <AiOutlinePlus
                                        onClick={() => HanldeCheck(4)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="container-fluid">
                                  <div className="row  ReactCardFlipBack d-flex align-items-center">
                                    {lang ? (
                                      <div className="col-10 col-md-11">
                                        Para proyectos con una propuesta
                                        económica cerrada, se solicitará el 50%
                                        por adelantado y 50% a su finalización.
                                        Sin embargo, este calendario de pagos se
                                        puede ajustar. Para transferencias
                                        internacionales con la mayoría de mis
                                        clientes utilizo Wise.
                                      </div>
                                    ) : (
                                      <div className="col-10 col-md-11">
                                        For projects with a closed financial
                                        proposal, 50% will be requested in
                                        advance and 50% on completion. However,
                                        this payment schedule can be adjusted.
                                        For international transfers with most of
                                        my clients I use Wise.
                                      </div>
                                    )}
                                    <div className="col-1">
                                      <AiOutlineClose
                                        onClick={() => HanldeCheck(4)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ReactCardFlip>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="m-2 ">
                            <ReactCardFlip
                              className=""
                              isFlipped={isFliped[5]}
                              flipDirection="vertical"
                            >
                              <div>
                                <div className="container-fluid">
                                  <div className="row ReactCardFlipFront d-flex align-items-center">
                                    <div className="col-10 col-md-11 question">
                                      {lang
                                        ? "¿Cuánto tiempo toma un proyecto?"
                                        : "How long does a project take?"}
                                    </div>
                                    <div className="col-1">
                                      <AiOutlinePlus
                                        onClick={() => HanldeCheck(5)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="container-fluid">
                                  <div className="row ReactCardFlipBack d-flex align-items-center">
                                    {lang ? (
                                      <div className="col-10 col-md-11 ">
                                        La mayoría de los proyectos que he
                                        realizado toman entre 2 semanas y 2
                                        meses.
                                      </div>
                                    ) : (
                                      <div className="col-10 col-md-11 ">
                                        Most of the projects I have done take
                                        between 2 weeks and 2 months.
                                      </div>
                                    )}
                                    <div className="col-1">
                                      <AiOutlineClose
                                        onClick={() => HanldeCheck(5)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ReactCardFlip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid section__2 ">
          <div className="row d-flex justify-content-center">
            <div className="col-9 text-center">
              {lang ? (
                <h1>
                  ¡Hagamos <br /> algo Grande!
                </h1>
              ) : (
                <h1>
                  Let's make <br /> something great
                </h1>
              )}
              <h4 className="bold blue__color text-center pt-5">
                <span onClick={() => setModal(!modal)}>
                  {lang ? "Contáctame >" : "Contact me >"}{" "}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
