import React,{useState,useEffect} from "react";
import Contect from "../../Pages/Contect/Contect";
function Legal({ lang, theme }) {
          const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
     useEffect(() => {
      document.getElementById('element')?.scrollIntoView({ behavior: 'smooth' });
  },[])
  return (
    <>
        <Contect lang={lang} theme={theme}  modal={modal} toggle={toggle} />
    <div className={`${theme ? "light pt-5" : "dark pt-5"} ` } id='element'>
      <div className="container-fluid policy">
        <div className="row justify-content-center">
          {lang? <div className="col-md-6 policy">
            <h2>Aviso Legal</h2>
            <hr />
            <p className="content">
              Este Aviso Legal tiene el objetivo de informarte de tus derechos y
              obligaciones como usuario de este sitio web. Aquí encontrarás toda
              la información que necesitas sobre este sitio web, su actividad,
              los datos personales que recaba y su finalidad, así como las
              normas de uso que regulan el uso de esta web.
              <br />
              En el momento en que accedas a este sitio web elarcaapps.org,
              asumes la condición de usuario, por lo que el contenido de este
              Aviso Legal te afecta directamente. Por eso, es importante que lo
              leas para disipar cualquier duda que puedas tener y tener
              conocimiento de causa sobre las condiciones que estás aceptando.
              <br />
              Para empezar, debes saber que este sitio web cumple con las
              normativas vigentes en materia de protección de datos, con el
              objetivo de aportarte las garantías, la seguridad y la
              transparencia que, como usuario te corresponden, a la hora de
              utilizar esta web.
              <br />
              El RGPD (Reglamento (UE) 2016/679 del Parlamento Europeo y del
              Consejo de 27 de abril de 2016 relativo a la protección de las
              personas físicas) que es la nueva normativa de la Unión Europea
              que unifica la regulación del tratamiento de los datos personales
              en los distintos países de la UE.
              <br />
              La LOPD (Ley Orgánica 15/1999, de 13 de diciembre, de Protección
              de Datos de Carácter Personal y Real Decreto 1720/2007, de 21 de
              diciembre, el Reglamento de desarrollo de la LOPD) que regula el
              tratamiento de los datos personales y las obligaciones que debemos
              asumir los responsables de una web o un blog a la hora de
              gestionar esta información.
              <br />
            </p>
            <p className="sub_heading">Datos de identificación</p>
            <p className="content">
              El responsable y titular de este sitio web es:
              <br />
              <br />
              Miguel González
              <br />
              Calle Velázquez, 1, 6ºD
              <br />
              <br />
              38007 Santa Cruz de Tenerife
              <br /> <br /> Teléfono: [A petición]
              <br />
              Correo electrónico:mg.fullstack@gmail.com
              <br />
              <br />
              Los datos que nos facilites con tu consentimiento, y de acuerdo al
              uso establecido en nuestra Política de Privacidad, serán
              incorporados a un fichero automatizado debidamente inscrito en la
              Agencia Española de Protección de Datos, en el que el responsable
              de dicho fichero es: Miguel González Esto quiere decir que tus
              datos están seguros, de acuerdo a lo que establece la ley.
            </p>
            <p className="sub_heading">Normas de acceso al sitio web</p>
            <p className="content">
              Como usuario de nuestra web, también tienes una serie de
              obligaciones:
              <br />
              No podrás utilizar este sitio web para la realización de
              actividades contrarias a las leyes, a la moral, al orden público
              y, en general, a hacer un uso conforme a las condiciones
              establecidas en el presente Aviso Legal. .
              <br />
              No podrás realizar actividades publicitarias o de explotación
              comercial remitiendo mensajes que utilicen una identidad falsa.
              <br />
              Tú serás el único responsable de la veracidad y exactitud de los
              contenidos que introduzcas en esta web y de los datos personales
              que nos facilites con las finalidades previstas en nuestra
              Política de Privacidad.calidad
              <br />
              También serás el único responsable de la realización de cualquier
              tipo de actuación ilícita, lesiva de derechos, nociva y/o
              perjudicial en los sitios de terceros a los que te podamos derivar
              desde este sitio web para el desarrollo de nuestra actividad.
              <br />
              Como responsable del sitio web, Miguel González podrá interrumpir
              el servicio de la página que esté siendo utilizado por el usuario
              y resolver de modo inmediato la relación si detecta un uso de la
              web o de cualquiera de los servicios que en la mismo se ofertan
              que pueda considerarse contrario a lo expresado en el presente
              Aviso Legal.
              <br />
            </p>
            <p className="sub_heading">Propiedad intelectual e industrial</p>
            <p className="content">
              La totalidad de este sitio web (texto, imágenes, marcas, gráficos,
              logotipos, botones, archivos de software, combinaciones de
              colores, así como la estructura, selección, ordenación y
              presentación de sus contenidos) se encuentra protegida por las
              leyes vigente sobre Propiedad Intelectual e Industrial, quedando
              prohibida su reproducción, distribución, comunicación pública y
              transformación, salvo para uso personal y privado.
              <br />
              Como titular de este sitio web, Miguel González no garantiza que
              los contenidos sean precisos o libres de error o que el libre uso
              de los mismos por parte de los usuarios no infrinja los derechos
              de terceras partes. El buen o mal uso de esta página y de sus
              contenidos es responsabilidad del usuario.
              <br />
              Asimismo, queda prohibida la reproducción, retransmisión, copia,
              cesión o redifusión, total o parcial, de la información contenida
              en la página, cualquiera que fuera su finalidad y el medio
              utilizado para ello, sin autorización previa de Miguel González.
              <br />
            </p>
            <p className="sub_heading">Enlaces o links</p>
            <p className="content">
              Este sitio web incluye enlaces o links a sitios de terceros. Las
              páginas pertenecientes a estos terceros no han sido revisadas ni
              son objeto de controles por nuestra parte, por lo que Miguel
              González no podrá ser considerado responsable de los contenidos de
              estos sitios web, ni de las medidas que se adopten relativas a su
              privacidad o al tratamiento de sus datos de carácter personal u
              otros que pudieran derivarse.
              <br />
              <br />
              Por todo ello, te recomendamos la lectura detenida de las
              condiciones de uso, política de privacidad, avisos legales y/o
              similares de estos sitios.
            </p>
            <p className="sub_heading">Limitación de responsabilidad</p>
            <p className="content">
              En ejercicio de su derecho como titular de esta web, te informamos
              de que Miguel González no se hace responsable en ningún caso de lo
              siguiente:
              <br />
            </p>
            <ul>
              <li className="content">
                La calidad del servicio, la velocidad de acceso, el correcto
                funcionamiento ni la disponibilidad ni continuidad de
                funcionamiento de la página.
              </li>
              <li className="content">
                La existencia de virus, malware, programas maliciosos o dañinos
                en los contenidos.
              </li>
              <li className="content">
                El uso ilícito, negligente, fraudulento o contrario a este Aviso
                Legal.
              </li>
              <li className="content">
                La falta de licitud, calidad, fiabilidad, utilidad y
                disponibilidad de los servicios prestados por terceros y puestos
                a disposición de los usuarios en este sitio web.
              </li>
              <li className="content">
                De los daños que pudieran provenir del uso ilegal o indebido de
                esta web.
              </li>
            </ul>
            <p className="sub_heading">
              Política de privacidad y protección de datos
            </p>
            <p className="content">
              Este sitio web cumple con la normativa vigente en materia de
              protección de datos, lo que implica que, como usuario, deberás dar
              tu consentimiento expreso antes de facilitarnos datos personales a
              través de los diferentes formularios puestos a disposición en las
              secciones de nuestra página.
              <br />
              <br />
              Para ello, en aras de la transparencia y el ejercicio de tu
              derecho, nuestro deber es informarte sobre los datos personales
              que recabamos, almacenamos y tratamos y con qué finalidades,
              teniendo en cualquier momento la posibilidad de revocar libremente
              tu consentimiento.
              <br />
              <br />
              Toda esta información la podrás encontrar en nuestra POLÍTICA DE
              PRIVACIDAD.
            </p>
            <p className="sub_heading">Política de cookies</p>
            <p className="content">
              Tal y como te informamos nada más acceder a nuestra web, este
              sitio utiliza cookies propias y de terceros con el objetivo de
              proporcionarte la mejor experiencia de usuario y desarrollar
              nuestra actividad.
              <br />
              <br />
              En cualquier momento, tendrás la opción de configurar tu navegador
              para desestimar el uso de estas cookies que, en algún caso,
              afectarán a tu experiencia de usuario.
              <br />
              <br />
              Para acceder a la información completa sobre el uso de cookies en
              este sitio web, su finalidad y su desestimación, puedes consultar
              nuestra POLÍTICA DE COOKIES.
              <br />
            </p>
            <p className="sub_heading">
              Legislación aplicable y jurisdicción competente
            </p>
            <p className="content">
              El presente Aviso Legal se encuentra sometido a la legislación
              española vigente.
              <br />
              <br />
              En caso necesario, ante cualquier tipo de controversia de carácter
              legal, Miguel González y el usuario, con renuncia expresa a
              cualquier otro fuero, se someterán a los Juzgados y Tribunales del
              domicilio de Miguel González controversia que pudiera derivarse.
              <br />
              <br />
              En caso necesario, ante cualquier tipo de controversia de carácter
              legal, Miguel González y el usuario, con renuncia expresa a
              cualquier otro fuero, se someterán a los Juzgados y Tribunales del
              domicilio de Miguel González controversia que pudiera derivarse.
              <br />
              <br />
              En el caso de que el usuario tenga su domicilio fuera de España,
              Miguel González y el usuario se someterán, con renuncia expresa a
              cualquier otro fuero, a los juzgados y tribunales de SANTA CRUZ DE
              TENERIFE (España).
            </p>
          </div>: <div className="col-md-6 policy">
            <h2>Legal Notice</h2>
            <hr />
            <p className="content">
            The purpose of this Legal Notice is to inform you of your rights and obligations as a user of 
this website. Here you will find all the information you need about this website, its activity, the 
personal data it collects and its purpose, as well as the rules of use that regulate the use of 
this website.

              <br />
              When you access this mg-fullstack.com website, you assume the condition of user, so the 
content of this Legal Notice affects you directly. Therefore, it is important that you read it to 
dispel any doubts you may have and to be aware of the conditions you are accepting.
              <br />
              To begin with, you should know that this website complies with current data protection 
regulations, with the aim of providing you with the guarantees, security and transparency 
that, as a user, you are entitled to when using this website.

              <br />
              The RGPD (Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 
April 2016 on the protection of natural persons) is the new European Union regulation that 
unifies the regulation of the processing of personal data in the different EU countries.

              <br />
              The LOPD (Organic Law 15/1999, of 13 December, on the Protection of Personal Data and 
Royal Decree 1720/2007, of 21 December, the Regulation of development of the LOPD) which 
regulates the processing of personal data and the obligations that those responsible for a 
website or blog must assume when managing this information.
              <br />
            </p>
            <p className="sub_heading">Identification data</p>
            <p className="content">
            The responsible and owner of this website is:

              <br />
              <br />
              Miguel González
              <br />
              Calle Velázquez, 1, 6ºD
              <br />
              <br />
              38007 Santa Cruz de Tenerife
              <br /> <br /> Phone: [On request]
              <br />
              Email:mg.fullstack@gmail.com
              <br />
              <br />
              The data that you provide us with your consent, and in accordance with the use established 
in our Privacy Policy, will be incorporated into an automated file duly registered with the 
Spanish Data Protection Agency, in which the person responsible for said file is: Miguel 
González This means that your data is secure, in accordance with the provisions of the law.
            </p>
            <p className="sub_heading">Website access rules</p>
            <p className="content">
            As a user of our website, you also have a series of obligations:
              <br />
              You may not use this website to carry out activities contrary to the law, morality, public order 
and, in general, to use it in accordance with the conditions set out in this Legal Notice.
              <br />
              You may not carry out advertising or commercial exploitation activities by sending messages 
using a false identity.
              <br />
              You will be solely responsible for the truthfulness and accuracy of the content you enter on 
this website and for the personal data you provide for the purposes set out in our Privacy 
Policy.

              <br />
              You will also be solely responsible for the performance of any type of illegal, harmful, harmful 
and/or damaging action on the sites of third parties to which we may refer you from this 
website for the development of our activity.
              <br />
              As the party responsible for the website, Miguel González may interrupt the service of the 
page being used by the user and immediately terminate the relationship if it detects any use 
of the website or any of the services offered therein that may be considered contrary to what 
is expressed in this Legal Notice.
              <br />
            </p>
            <p className="sub_heading">ntellectual and industrial property</p>
            <p className="content">
            The entirety of this website (text, images, trademarks, graphics, logos, buttons, software 
files, colour combinations, as well as the structure, selection, arrangement and presentation 
of its contents) is protected by the laws in force on Intellectual and Industrial Property, and its 
reproduction, distribution, public communication and transformation is prohibited, except for 
personal and private use.
              <br />
              As the owner of this website, Miguel González does not guarantee that the contents are 
accurate or free of error or that the free use of the same by users does not infringe the rights 
of third parties. The good or bad use of this website and its contents is the responsibility of 
the user.
              <br />
              Likewise, the reproduction, retransmission, copying, transfer or rebroadcasting, in whole or in 
part, of the information contained on the website, for whatever purpose and by whatever 
means, is prohibited without the prior authorisation of Miguel González.
              <br />
            </p>
            <p className="sub_heading">Links to other sites</p>
            <p className="content">
            This website includes links to third party sites. The pages belonging to these third parties 
have not been reviewed and are not subject to controls by us, so Miguel González cannot be 
held responsible for the contents of these websites, nor for the measures adopted in relation 
to your privacy or the processing of your personal data or any other data that may arise.
              <br />
              <br />
              Therefore, we recommend that you carefully read the conditions of use, privacy policy, legal 
notices and/or similar of these sites.
            </p>
            <p className="sub_heading">Limitation of liability</p>
            <p className="content">
            In exercise of its right as owner of this website, we inform you that Miguel González is not 
responsible in any case for the following:

              <br />
            </p>
            <ul>
              <li className="content">
              The quality of the service, the speed of access, the correct functioning and the 
availability and continuity of the functioning of the site.

              </li>
              <li className="content">
              The existence of viruses, malware, malicious or harmful programs in the contents.

              </li>
              <li className="content">
              Illegal, negligent, fraudulent use or use contrary to this Legal Notice.
              </li>
              <li className="content">
              The lack of legality, quality, reliability, usefulness and availability of the services 
provided by third parties and made available to users on this website.
              </li>
              <li className="content">
              For damages that may arise from the illegal or improper use of this website
              </li>
            </ul>
            <p className="sub_heading">
            Privacy and data protection policy
            </p>
            <p className="content">
            This website complies with current legislation on data protection, which means that, as a 
user, you must give your express consent before providing us with personal data through the 
various forms made available in the sections of our website.

              <br />
              <br />
              To this end, in the interests of transparency and the exercise of your right, our duty is to 
inform you about the personal data that we collect, store and process and for what purposes,
and you may freely revoke your consent at any time.

              <br />
              <br />
              All this information can be found in our PRIVACY POLICY.
            </p>
            <p className="sub_heading">Cookie policy</p>
            <p className="content">
            As we inform you as soon as you access our website, this site uses its own and third-party 
cookies in order to provide you with the best user experience and to develop our activity.
              <br />
              <br />
              At any time, you will have the option to configure your browser to reject the use of these 
cookies which, in some cases, will affect your user experience.

              <br />
              <br />
              For full information on the use of cookies on this website, their purpose and how to reject 
them, you can consult our COOKIES POLICY.
              <br />
            </p>
            <p className="sub_heading">
            Applicable law and competent jurisdiction
            </p>
            <p className="content">
            This Legal Notice is subject to current Spanish legislation.
              <br />
              <br />
              If necessary, in the event of any dispute of a legal nature, Miguel González and the user,
expressly waiving any other jurisdiction, shall submit to the Courts and Tribunals of the 
domicile of Miguel González in the event of any dispute that may arise.
              <br />
              <br />
             In the event that the user is domiciled outside Spain, Miguel González and the user will 
submit, expressly waiving any other jurisdiction, to the courts and tribunals of SANTA CRUZ 
DE TENERIFE (Spain).

              <br />
              <br />
              In the event that the user is domiciled outside Spain, Miguel González and the user will 
submit, expressly waiving any other jurisdiction, to the courts and tribunals of SANTA CRUZ 
DE TENERIFE (Spain).
If you have any doubts about this Legal Notice, you can send us an email to 
mg.fullstack@gmail.com
            </p>
          </div>}
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

export default Legal;
