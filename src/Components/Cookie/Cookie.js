import React,{useState,useEffect} from "react";
import Contect from "../../Pages/Contect/Contect";
function Cookie({ theme, lang }) {
          const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    document.getElementById('element')?.scrollIntoView({ behavior: 'smooth' });
},[])
  return (
    <>
        <Contect lang={lang} theme={theme}  modal={modal} toggle={toggle} />
    <div className={`${theme ? "light pt-5" : "dark pt-5"}`} id='element'>
      <div className="container-fluid policy">
        <div className="row justify-content-center">
          {lang ? (
            <div className="col-md-6 policy">
              <h2>Política de Cookies</h2>
              <hr />
              <p className="content">
                SSi quieres saber más sobre el uso de cookies que realiza este
                sitio web elarcaapps@.org, estás en el lugar indicado. A
                continuación, vamos a explicarte qué son exactamente las
                cookies; qué tipo de cookies utilizamos y para qué; y cómo
                puedes ejercer tu derecho para configurar tu navegador y
                desestimar el uso de cualquiera de ellas.
                <br />
                Eso sí, debes saber, que si decides no utilizar algunas cookies,
                este sitio web puede no funcionar perfectamente, afectando a tu
                experiencia de usuario.
              </p>
              <p className="sub_heading"> Que es una cookie</p>
              <p className="content">
                Una cookie es un fichero que se descarga en tu ordenador al
                acceder a determinadas páginas web o blogs.
                <br />
                Las cookies permiten a esa página, entre otras cosas, almacenar
                y recuperar información sobre tus hábitos de navegación o de tu
                equipo, y dependiendo de la información que contengan y de la
                forma en que utilices tu equipo, pueden utilizarse para
                reconocerte.
                <br />
                El navegador del usuario memoriza cookies en el disco duro
                solamente durante la sesión actual ocupando un espacio de
                memoria mínimo y no perjudicando al ordenador. Las cookies no
                contienen ninguna clase de información personal específica, y la
                mayoría de las mismas se borran del disco duro al finalizar la
                sesión de navegador (las denominadas cookies de sesión).
                <br />
                La mayoría de los navegadores aceptan como estándar a las
                cookies y, con independencia de las mismas, permiten o impiden
                en los ajustes de seguridad las cookies temporales o
                memorizadas.
                <br />
                Las cookies se asocian al navegador, no a la persona, por lo que
                no suelen almacenar información sensible sobre ti como tarjetas
                de crédito o datos bancarios, fotografías o información
                personal, etc. Los datos que guardan son de carácter técnico,
                estadísticos, preferencias personales, personalización de
                contenidos, etc
                <br />
              </p>
              <p className="sub_heading">
                Aceptación de las cookies: normativa vigente
              </p>
              <p className="content">
                Al acceder a este sitio web, y de acuerdo a la normativa vigente
                en materia de protección de datos, te informamos del uso de
                cookies, dándote la opción de aceptarlas expresamente y de
                acceder a más información a través de esta Política de Cookies.
                <br />
                Debes saber que, en el caso de continuar navegando, estarás
                prestando tu consentimiento para el empleo de estas cookies.
                Pero, en cualquier momento, podrás cambiar de opinión y bloquear
                su utilización a través de tu navegador.
                <br />
                Para tu total tranquilidad, este sitio web cumple con lo
                estipulado en la normativa vigente en relación con el uso de las
                cookies y tus datos personales:
                <br />
                El RGPD (Reglamento (UE) 2016/679 del Parlamento Europeo y del
                Consejo de 27 de abril de 2016 relativo a la protección de las
                personas físicas), que unifica la regulación del tratamiento de
                los datos personales en los países de la UE.
                <br />
                Esta Política de Cookies podría modificarse en cualquier momento
                para adaptarse a novedades normativas o cambios en nuestras
                actividades, siendo vigente la que en cada momento se encuentre
                publicada en la web.
                <br />
              </p>
              <p className="sub_heading">Tipos de cookies</p>
              <p className="content">
                Para poder ofrecerte una mejor experiencia de usuario, obtener
                datos analíticos, almacenar y recuperar información sobre tus
                hábitos de navegación o de tu equipo y desarrollar su actividad,
                este sitio web elarcaapps.org, utiliza cookies propias y de
                terceros.
              </p>
              <p className="sub_heading">
                ¿Qué tipos de cookies utiliza este sitio web?
              </p>
              <ul>
                <li className="content">
                  {" "}
                  <label className='linkColor'>
                    Cookies técnicas:
                  </label>{" "}
                  Son aquellas que permiten al usuario la navegación a través de
                  una página web, plataforma o aplicación y la utilización de
                  las diferentes opciones o servicios que en ella existan como,
                  por ejemplo, controlar el tráfico y la comunicación de datos,
                  identificar la sesión, acceder a partes de acceso restringido,
                  recordar los elementos que integran un pedido, realizar el
                  proceso de compra de un pedido, realizar la solicitud de
                  inscripción o participación en un evento, utilizar elementos
                  de seguridad durante la navegación, almacenar contenidos para
                  la difusión de videos o sonido o compartir contenidos a través
                  de redes sociales.
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>
                    Cookies de personalización:
                  </label>{" "}
                  Son aquellas que permiten al usuario acceder al servicio con
                  algunas características de carácter general predefinidas en
                  función de una serie de criterios en el terminal del usuario
                  como por ejemplo serian el idioma, el tipo de navegador a
                  través del cual accede al servicio, la configuración regional
                  desde donde accede al servicio, etc.
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>
                    Cookies de análisis:{" "}
                  </label>
                  Son aquellas que bien tratadas por nosotros o por terceros,
                  nos permiten cuantificar el número de usuarios y así realizar
                  la medición y análisis estadístico de la utilización que hacen
                  los usuarios del servicio ofertado. Para ello se analiza tu
                  navegación en nuestra página web con el fin de mejorar la
                  oferta de productos o servicios que le ofrecemos.
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>
                    Cookies de terceros:
                  </label>{" "}
                  Esta web elarcaapps@.org puede utilizar servicios de terceros
                  que, por cuenta de Google, recopilarán información con fines
                  estadísticos, de uso del sitio por parte del usuario y para la
                  prestación de otros servicios relacionados con la actividad
                  del sitio web y otros servicios de Internet.
                </li>

                <br />

                <label className="content">
                  En particular, este sitio web utiliza Google Analytics, un
                  servicio analítico de web prestado por Google, Inc. con
                  domicilio en los Estados Unidos con sede central en 1600
                  Amphitheatre Parkway, Mountain View, California 94043. Para la
                  prestación de estos servicios, Google utiliza cookies que
                  recopilan la información, incluida la dirección IP del
                  usuario, que será transmitida, tratada y almacenada por Google
                  en los términos fijados en la web Google.com. Esto incluye la
                  posible transmisión de dicha información a terceros por
                  razones de exigencia legal o cuando dichos terceros procesen
                  la información por cuenta de Google.
                </label>
              </ul>
              <p className="sub_heading">
                Gestionar y rechazar el uso de cookies
              </p>
              <p className="content">
                En cualquier momento, puedes adaptar la configuración del
                navegador para gestionar, desestimar el uso de cookies y ser
                notificado antes de que se descarguen.
                <br />
                También puedes adaptar la configuración de forma que el
                navegador rechace todas las cookies, o únicamente las cookies de
                terceros. Y también puedes eliminar cualquiera de las cookies
                que ya se encuentren en tu equipo.
                <br />
                Para esto, debes tener en cuenta que tendrás que adaptar por
                separado la configuración de cada navegador y equipo que
                utilices ya que, como te hemos comentado anteriormente las
                cookies se asocian al navegador, no a la persona.
                <br />
              </p>
              <ul>
                <li className="content">
                  {" "}
                  <label className='linkColor'>Google Chrome </label>
                  https://support.google.com/chrome/answer/95647?hl=es-419
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>
                    Internet Explorer{" "}
                  </label>{" "}
                  Explorer
                  https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>Mozilla Firefox </label>
                  Firefox
                  https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>Apple Safari </label>
                  https://support.apple.com/es-es/HT201265
                </li>
              </ul>
              <p className="content">
                Si tienes cualquier duda sobre esta Política de Cookies, puedes
                contactar con nosotros enviándonos un mail a
                mg.fullstack@gmail.com
              </p>
            </div>
          ) : (
            <div className="col-md-6 policy">
              <h2>Cookie Policy</h2>
              <hr />
              <p className="content">
                If you want to know more about the use of cookies on this
                mg-fullstack.com website, you've come to the right place. Below,
                we are going to explain exactly what cookies are; what type of
                cookies we use and why; and how you can exercise your right to
                configure your browser to reject the use of any of them.
                <br />
                However, you should be aware that if you choose not to use some
                cookies, this website may not work perfectly, affecting your
                user experience.
              </p>
              <p className="sub_heading">What is a cookie</p>
              <p className="content">
                A cookie is a file that is downloaded to your computer when you
                access certain websites or blogs.
                <br />
                Cookies allow that page, among other things, to store and
                retrieve information about your browsing habits or your
                computer, and depending on the information they contain and the
                way you use your computer, they can be used to recognise you.
                <br />
                The user's browser stores cookies on the hard disk only during
                the current session, occupying minimal memory space and not
                harming the computer. Cookies do not contain any specific
                personal information, and most cookies are deleted from the hard
                drive at the end of the browser session (so-called session
                cookies).
                <br />
                Most browsers accept cookies as standard and, independently of
                them, allow or prevent temporary or stored cookies in the
                security settings.
                <br />
                Cookies are associated with the browser, not with the person, so
                they do not usually store sensitive information about you such
                as credit card or bank details, photographs or personal
                information, etc. The data they store is of a technical nature,
                statistics, personal preferences, personalisation of content,
                etc.
                <br />
              </p>
              <p className="sub_heading">
                Acceptance of cookies: current regulations
              </p>
              <p className="content">
                By accessing this website, and in accordance with current
                legislation on data protection, we inform you of the use of
                cookies, giving you the option to expressly accept them and to
                access more information through this Cookies Policy.
                <br />
                You should know that, if you continue browsing, you are giving
                your consent to the use of these cookies. However, you can
                change your mind at any time and block their use through your
                browser.
                <br />
                For your peace of mind, this website complies with current
                legislation regarding the use of cookies and your personal data:
                <br />
                GDPR (Regulation (EU) 2016/679 of the European Parliament and of
                the Council of 27 April 2016 on the protection of natural
                persons), which unifies the regulation of the processing of
                personal data in EU countries.
                <br />
                This Cookies Policy may be modified at any time to adapt to new
                regulations or changes in our activity, being in force the one
                published on the website at all times.
                <br />
              </p>
              <p className="sub_heading">Cookie types</p>
              <p className="content">
                In order to offer you a better user experience, obtain
                analytical data, store and retrieve information about your
                browsing habits or your computer and develop its activity, this
                website mg-fullstack.com, uses its own and third party cookies.
              </p>
              <p className="sub_heading">
                What types of cookies does this website use?
              </p>
              <ul>
                <li className="content">
                  {" "}
                  <label className='linkColor'>Technical Cookies:</label>
                  These are those that allow the user to browse through a
                  website, platform or application and use the different options
                  or services that exist on it such as, for example, controlling
                  traffic and data communication, identifying the session,
                  accessing parts of restricted access, remembering the elements
                  that make up an order, carrying out the purchasing process of
                  an order, making the application for registration or
                  participation in an event, using security elements during
                  browsing, storing content for the broadcasting of videos or
                  sound or sharing content through social networks.
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>
                    Cookies Personalized:
                  </label>{" "}
                  These are cookies that allow the user to access the service
                  with some predefined general characteristics depending on a
                  series of criteria in the user's terminal, such as the
                  language, the type of browser used to access the service, the
                  regional configuration from which the service is accessed,
                  etc.
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>Analysis cookies: </label>
                  These are cookies that are either processed by us or by third
                  parties and allow us to quantify the number of users and thus
                  carry out the measurement and statistical analysis of the use
                  made by users of the service offered. To do this, your
                  browsing on our website is analysed in order to improve the
                  range of products or services that we offer.
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>
                    Third-party cookies:
                  </label>{" "}
                  This website mg-fullstack.com may use third-party services
                  that, on behalf of Google, collect information for statistical
                  purposes, for the use of the site by the user and for the
                  provision of other services related to the activity of the
                  website and other Internet services.
                </li>

                <br />

                <label className="content">
                  In particular, this website uses Google Analytics, a web
                  analytics service provided by Google, Inc. based in the United
                  States with headquarters at 1600 Amphitheatre Parkway,
                  Mountain View, California 94043. In order to provide these
                  services, Google uses cookies to collect information,
                  including the user's IP address, which will be transmitted to,
                  processed and stored by Google on the terms set out on the
                  Google.com website. This includes the possible transmission of
                  such information to third parties for reasons of legal
                  requirement or where such third parties process the
                  information on Google's behalf.
                </label>
              </ul>
              <p className="sub_heading">
                Manage and reject the use of cookies
              </p>
              <p className="content">
                At any time, you can adapt your browser settings to manage,
                reject the use of cookies and be notified before they are
                downloaded.
                <br />
                You can also adjust your browser settings so that your browser
                rejects all cookies, or only third-party cookies. You can also
                delete any cookies that are already on your computer.
                <br />
                To do this, you should bear in mind that you will have to adapt
                the configuration of each browser and device you use separately
                because, as we have mentioned above, cookies are associated with
                the browser, not the person
                <br />
              </p>
              <ul>
                <li className="content">
                  {" "}
                  <label className='linkColor'>Google Chrome </label>
                  https://support.google.com/chrome/answer/95647?hl=es-419
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>
                    Internet Explorer{" "}
                  </label>{" "}
                  Explorer
                  https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>Mozilla Firefox </label>
                  Firefox
                  https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we
                </li>
                <li className="content">
                  {" "}
                  <label className='linkColor'>Apple Safari </label>
                  https://support.apple.com/es-es/HT201265
                </li>
              </ul>
              <p className="content">
                If you have any doubts about this Cookies Policy, you can
                contact us by sending an email to mg.fullstack@gmail.com
              </p>
            </div>
          )}
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
                  ? "Contactame >"
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

export default Cookie;
