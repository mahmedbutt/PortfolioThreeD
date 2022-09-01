import React,{useState,useEffect} from "react";
import "./Reason.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import * as n1 from "./8reasons/Lottie_Animations/N1_JSON_(Team Player).json";
import * as n2 from "./8reasons/Lottie_Animations/N2_JSON_(Front & Back end).json";
import * as n3 from "./8reasons/Lottie_Animations/N3_JSON_(SDLC).json";
import * as n4 from "./8reasons/Lottie_Animations/N4_JSON_(Rocket).json";
import * as sp from "./8reasons/Lottie_Animations/Sphere_Effect.json";
import Lottie from "react-lottie";
import Contect from "../Contect/Contect";
function Reasons({ lang, theme }) {
// for animation 1 
  const defaultOptionsN1 = {
    loop: true,
    autoplay: true,
    animationData: n1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // for animation 2
  const defaultOptionsN2 = {
    loop: true,
    autoplay: true,
    animationData: n2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // for animation 3
  const defaultOptionsN3 = {
    loop: true,
    autoplay: true,
    animationData: n3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // for animation 4
  const defaultOptionsN4 = {
    loop: true,
    autoplay: true,
    animationData: n4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // for animation 5
  const defaultOptionsSP = {
    loop: true,
    autoplay: true,
    animationData: sp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // for open contect page
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // to set page of top on click.
    useEffect(() => {
      document.getElementById('element')?.scrollIntoView({ behavior: 'smooth' });
  },[])
  return (
    <>
     <Contect lang={lang} theme={theme}  modal={modal} toggle={toggle} />
    <div className={`${theme ? "light" : "dark"}`} id='element'>
      <div className="container-fliid reaons pb-5 px-4">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12 col-xl-9">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-12">
                <header className="reasons-hero">
                  <div className="container">
                    <div aria-hidden="true" className="reasons-hero-heading">
                      <div className="reasons-heading-top">
                        <div className="reasons-numbers-wrap">
                          <div className="reasons-numbers-track">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                          </div>
                        </div>
                        <div className="reasons-gradient-span">
                          {lang ? "razones" : "reasons"}
                        </div>
                      </div>
                    </div>
                    {lang ? (
                      <h1 className="reasons-hero-heading reasons-hero-heading--en">
                        <span className="visually-hidden">8 razones </span>para
                        contar con Miguel en tu proyecto.
                      </h1>
                    ) : (
                      <h1 className="reasons-hero-heading reasons-hero-heading--en">
                        <span className="visually-hidden">8 reasons </span>to work
                        on your project with Miguel.
                      </h1>
                    )}
                  </div>
                </header>
              </div>
              <div className="col-lg-10 reason1">
                <label className="pb-4 pt-1">
                  {" "}
                  {lang ? "Razón #1" : "Reason #1"}
                </label>
                <div className="row">
                  <div className="col-lg-6">
                    <h3>
                      {lang
                        ? "Encontrar una solución a tu necesidad"
                        : "Focused on providing a solution to your need"}
                    </h3>
                    {lang ? (
                      <p className="">
                        Construir un sitio web con diferentes funcionalidades y
                        conexiones para que el usuario tenga una excelente
                        experiencia de navegación no es una tarea fácil, sin
                        embargo esa es siempre mi premisa.
                      </p>
                    ) : (
                      <p className="">
                        Building a website with different functionalities and
                        connections so that the user has an excellent browsing
                        experience is not an easy task, but that is my premise.
                      </p>
                    )}
                  </div>
                  <div className="col-lg-6 ">
                    <div className="row py-3">
                      <div className="col-2">
                        <AiOutlineCheckCircle
                          className="AiOutlineCheckCircle"
                          color="white"
                        />
                      </div>
                      <div className="col-10">
                        <h4>
                          {lang
                            ? " Siempre en movimiento y aprendiendo cosas nuevas."
                            : "Always keeping moving and learning new things."}
                        </h4>
                      </div>
                    </div>

                    <div className="row pb-3">
                      <div className="col-2">
                        <AiOutlineCheckCircle className="AiOutlineCheckCircle" />
                      </div>
                      <div className="col-10">
                        <h4>
                          {lang
                            ? "Siempre curioso, innovador y pensando en largo."
                            : "Always curious, humble, innovative and long-range thinker"}
                        </h4>
                      </div>
                    </div>

                    <div className="row pb-3">
                      <div className="col-2">
                        <AiOutlineCheckCircle className="AiOutlineCheckCircle" />
                      </div>
                      <div className="col-10">
                        <h4>
                          {lang
                            ? "Motivado para asumir nuevos retos."
                            : "Motivated to take on new challenges"}
                        </h4>
                      </div>
                    </div>

                    <div className="row pb-3">
                      <div className="col-2">
                        <AiOutlineCheckCircle className="AiOutlineCheckCircle" />
                      </div>
                      <div className="col-10">
                        <h4>
                          {lang
                            ? "Buena gestión del tiempo para un trabajo más rápido y eficiente."
                            : "Great time management for faster and more efficient work"}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 reason2 mt-3">
                <div className="row">
                  <div className="col-lg-6 p-0 m-0 position-relative">
                    <div className="reason2__content ">
                      <label className="pb-4 pt-1">
                        {" "}
                        {lang ? "Razón #2" : "Reason #2"}
                      </label>
                      {lang ? (
                        <h3>
                          A Google le <span className="Rainbow">gustará</span>{" "}
                          tu nuevo proyecto.
                        </h3>
                      ) : (
                        <h3>
                          Google will <span className="Rainbow">love</span> your
                          new project.
                        </h3>
                      )}
                      {lang ? (
                        <p className="">
                          Pienso en el posicionamiento de tu web desde los
                          cimientos, favoreciendo que todos los contenidos que
                          aparecen en ella sean reconocibles por los buscadores.
                        </p>
                      ) : (
                        <p>
                          Thinks about the positioning of your web site from the
                          foundations, favoring that all the contents that
                          appear in it are recognizable by search engines.
                        </p>
                      )}
                    </div>
                    <img
                      src="/seo-graph.svg"
                      width={"98%"}
                      alt="graph"
                      className="position-absolute bottom-0 seo"
                    />
                  </div>
                  <div className="col-lg-6  p-0 mt-3 mt-md-3 mt-lg-0 m-0 position-relative d-flex justify-md-content-end ">
                    <div className="reason2__content">
                      <label className="pb-4 pt-1">
                        {" "}
                        {lang ? "Razón #3" : "Reason #3"}
                      </label>
                      {lang ? (
                        <h3>Estructura óptima y eficiente.</h3>
                      ) : (
                        <h3>Optimun & efficient structure.</h3>
                      )}
                      {lang ? (
                        <p className="">
                         Desarrollo la estructura de los sitios 
                        web teniendo en cuenta los objetivos 
                        de los clientes, evaluando qué 
                        productos o servicios ofrecen y cuál es 
                        la mejor manera de presentarlos al 
                        usuario.
                        </p>
                      ) : (
                        <p>
                          Develops the structure of websites taking into account
                          the objectives of the clients, assessing what products
                          or services they offer and how best they can be
                          presented to the user.
                        </p>
                      )}
                    </div>
                    <div className="position-absolute sphere">
                      <Lottie
                        options={defaultOptionsSP}
                        height={"auto"}
                        width={"100%"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-10 reason2 mt-3">
                <div className="row">
                  <div className="col-lg-6 p-0 m-0 position-relative">
                    <div className="reason2__content ">
                      <label className="pb-4 pt-1">
                        {" "}
                        {lang ? "Razón #4" : "Reason #4"}
                      </label>
                      {lang ? (
                        <h3>
                          Jugador de <br /> equipo.
                        </h3>
                      ) : (
                        <h3>
                          Team
                          <br />
                          player.
                        </h3>
                      )}
                      {lang ? (
                        <p className="">
                          Participo activamente con diligencia y atención al
                          detalle siguiendo las instrucciones del equipo de
                          diseño en la construcción de la UI y UX.
                        </p>
                      ) : (
                        <p>
                          Actively participates with diligence and attention to
                          detail following the instructions of the design team
                          in the construction of the User Interface.
                        </p>
                      )}
                    </div>
                    <div className="position-absolute N1">
                      <Lottie
                        options={defaultOptionsN1}
                         height={"auto"}
                        width={"75%"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 p-0 mt-3 mt-md-3 mt-lg-0 m-0 position-relative d-flex justify-md-content-end ">
                    <div className="reason2__content">
                      <label className="pb-4 pt-1">
                        {" "}
                        {lang ? "Razón #5" : "Reason #5"}
                      </label>
                      {lang ? (
                        <h3>Conocimiento del front y del back.</h3>
                      ) : (
                        <h3>Knowledge of the Front & Back.</h3>
                      )}
                      {lang ? (
                        <p className="">
                          Como desarrollador full stack soy capaz de manejar toda
                          la pila del sitio y entender tanto las tecnologías de
                          frontend como de backend.
                        </p>
                      ) : (
                        <p>
                          As a fullstack developer he is able to handle the
                          entire site stack and understand both front end and
                          back end technologies.
                        </p>
                      )}
                    </div>
                    <div className="position-absolute N2">
                      <Lottie
                        options={defaultOptionsN2}
                        height={"auto"}
                        width={"70%"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-10 reason2 mt-3">
                <div className="row">
                  <div className="col-lg-6 p-0 m-0 position-relative">
                    <div className="reason2__content ">
                      <label className="pb-4 pt-1">
                        {" "}
                        {lang ? "Razón #6" : "Reason #6"}
                      </label>
                      {lang ? (
                        <h3>Integraciones personalizadas.</h3>
                      ) : (
                        <h3>
                          Custom <br /> integrations.
                        </h3>
                      )}
                      <div className="px-2 px-md-5 reason6">
                        <div className="row pt-4">
                          <div className="col-2">
                            <AiOutlineCheckCircle className="Gradient" />
                          </div>
                          <div className="col-10 d-flex align-items-center">
                            {lang ? <h4>Ecommerce</h4> : <h4>Ecommerce</h4>}
                          </div>
                        </div>
                        <div className="row pt-3">
                          <div className="col-2">
                            <AiOutlineCheckCircle className="Gradient" />
                          </div>
                          <div className="col-10 d-flex align-items-center">
                            {lang ? (
                              <h4>Redes sociales</h4>
                            ) : (
                              <h4>Social Media</h4>
                            )}
                          </div>
                        </div>
                        <div className="row pt-3">
                          <div className="col-2">
                            <AiOutlineCheckCircle className="Gradient" />
                          </div>
                          <div className="col-10 d-flex align-items-center">
                            {lang ? (
                              <h4>Pasarelas de pago</h4>
                            ) : (
                              <h4>Payment processing</h4>
                            )}
                          </div>
                        </div>
                        <div className="row pt-3">
                          <div className="col-2">
                            <AiOutlineCheckCircle className="Gradient" />
                          </div>
                          <div className="col-10 d-flex align-items-center">
                            {lang ? (
                              <h4>Email marketing</h4>
                            ) : (
                              <h4>Email marketing</h4>
                            )}
                          </div>
                        </div>
                        <div className="row py-3">
                          <div className="col-2">
                            <AiOutlineCheckCircle className="Gradient" />
                          </div>
                          <div className="col-10 d-flex align-items-center">
                            {lang ? (
                              <h4>Herramientas de análisis,...</h4>
                            ) : (
                              <h4>Analytics and targeting tools,...</h4>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0 mt-3 mt-md-3 mt-lg-0 m-0 position-relative d-flex justify-md-content-end ">
                    <div className="reason2__content">
                      <label className="pb-4 pt-1">
                        {" "}
                        {lang ? "Razón #7" : "Reason #7"}
                      </label>
                      {lang ? (
                        <h3>Rendimiento de bases de datos.</h3>
                      ) : (
                        <h3>Database performance.</h3>
                      )}
                      {lang ? (
                        <p className="">
                          Gestiono la integración de las bases de datos al flujo
                          de trabajo de forma sencilla para administrar la
                          información en tiempo real, ofreciendo soluciones
                          óptimas a los diferentes proyectos.
                        </p>
                      ) : (
                        <p>
                          Manages the integration of databases to the workflow
                          in a simple way to manage information in real time,
                          offering optimal solutions to customers.
                        </p>
                      )}
                    </div>
                    <img
                      src="/switch-arrows.svg"
                      width={"98%"}
                      alt="graph"
                      className="position-absolute arrrow"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-10 reason2 mt-3">
                <div className="row">
                  <div className="col-lg-6 p-0 m-0 position-relative">
                    <div className="reason2__content ">
                      <label className="pb-4 pt-1">
                        {" "}
                        {lang ? "Razón #8" : "Reason #8"}
                      </label>
                      {lang ? (
                        <h3>Revisión del proyecto completo.</h3>
                      ) : (
                        <h3>Review the whole project.</h3>
                      )}
                      {lang ? (
                        <p className="">
                          Superviso tu proyecto a través de cada fase del ciclo
                          de vida del desarrollo de sistemas (SDLC). Testeo y
                          verifico su funcionamiento pleno.
                        </p>
                      ) : (
                        <p>
                          It oversees your project through each phase of the
                          Systems Development Life Cycle (SDLC).
                        </p>
                      )}
                    </div>
                    <div className="position-absolute N3">
                      <Lottie
                        options={defaultOptionsN3}
                        height={"auto"}
                        width={"32%"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 p-0 mt-3 mt-md-3 mt-lg-0 m-0 position-relative d-flex justify-md-content-end ">
                    <div className="reason2__content gradient__Extra ">
                      <label className="pb-4 pt-1">
                        {" "}
                        {lang ? "Razón extra" : "Bonus extra"}
                      </label>
                      {lang ? (
                        <h3>
                          Nunca <br />
                          satisfecho.
                        </h3>
                      ) : (
                        <h3>Never satisfied.</h3>
                      )}
                      {lang ? (
                        <p className="custom__width__extra">
                          No me gusta definirme por el trabajo que he hecho. Prefiero hacerlo por el trabajo que quiero hacer.
                        </p>
                      ) : (
                        <p className="custom__width__extra">
                          I don't like to define myself by the work I have done. I prefer to do it by the work I want to do.
                        </p>
                      )}
                      {lang ? (
                        <p className="custom__width__extra bold" onClick={()=> setModal(!modal)}>
                          ¿Vamos a hablar sobre ese proyecto?{" "}
                        </p>
                      ) : (
                        <p className="custom__width__extra bold" onClick={()=> setModal(!modal)}> 
                          Let's chat about that project?{" "}
                        </p>
                      )}
                    </div>
                    <div className="position-absolute N4">
                      <Lottie
                        options={defaultOptionsN4}
                        height={"auto"}
                        width={"75%"}
                      />
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
          <div className="col-11 text-center">
            {lang ? (
              <h1>¿Interesado en <br/> trabajar conmigo?</h1>
            ) : (
              <h1>Interseted in <br/> working with me</h1>
            )}
            <h4 className="bold blue__color text-center pt-5">
              <span onClick={()=> setModal(!modal)}>
                {lang
                  ? "Contáctame >"
                  : "Contact me >"}{" "}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Reasons;
