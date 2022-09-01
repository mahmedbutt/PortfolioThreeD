import React, { useState, useEffect } from "react";
import Contect from "../../Pages/Contect/Contect";
import './Policy.css'
function Policy({ lang, theme }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    document.getElementById("element")?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
       <Contect lang={lang} theme={theme}  modal={modal} toggle={toggle} />
      <div className={`${theme ? "light pt-5" : "dark pt-5"} `} id="element">
        <div className="container-fluid policy">
          <div className="row  justify-content-center">
            {lang ? (
              <div className="col-md-6 ">
                <h2>Política de Privacidad</h2>
                <hr />
                <p className="heading">
                  1. Una visión general de la protección de datos
                </p>
                <p className="sub_heading">Información general</p>
                <p className="content">
                  La siguiente información le proporcionará una visión general
                  de lo que ocurrirá con sus datos personales cuando visite este
                  sitio web. El término "datos personales" comprende todos los
                  datos que pueden utilizarse para identificarle personalmente.
                  Para obtener información detallada sobre el tema de la
                  protección de datos, consulte nuestra Declaración de
                  Protección de Datos, que hemos incluido debajo de esta copia.
                </p>
                <p className="sub_heading">
                  Registro de datos en este sitio web
                </p>
                <p className="sub_heading">
                  ¿Quién es el responsable del registro de datos en este sitio
                  web (es decir, el "controlador")?
                </p>
                <p className="content">
                  Los datos de este sitio web son procesados por el operador del
                  sitio web, cuya información de contacto está disponible en la
                  sección "Información sobre la parte responsable (denominada
                  "controlador" en el GDPR)" en esta Política de Privacidad.
                </p>
                <p className="sub_heading">¿Cómo registramos sus datos?</p>
                <p className="content">
                  Recogemos sus datos como resultado de que usted comparta sus
                  datos con nosotros. Puede tratarse, por ejemplo, de la
                  información que introduzca en nuestro formulario de contacto.
                  <br />
                  Otros datos serán registrados por nuestros sistemas
                  informáticos automáticamente o después de que usted consienta
                  su registro durante su visita al sitio web. Estos datos
                  comprenden principalmente información técnica (por ejemplo, el
                  navegador web, el sistema operativo o la hora de acceso al
                  sitio). Esta información se registra automáticamente cuando
                  usted accede a este sitio web.
                </p>
                <p className="sub_heading">
                  ¿Con qué fines utilizamos sus datos?
                </p>
                <p className="content">
                  Una parte de la información se genera para garantizar el
                  suministro sin errores del sitio web. Otros datos pueden
                  utilizarse para analizar sus patrones de uso.
                </p>
                <p className="sub_heading">
                  ¿Qué derechos tiene usted en relación con sus datos?
                </p>
                <p className="content">
                  Tiene derecho a recibir información sobre el origen, los
                  destinatarios y los fines de sus datos personales archivados
                  en cualquier momento, sin tener que pagar una cuota por dicha
                  divulgación. También tiene derecho a exigir que sus datos sean
                  rectificados o erradicados. Si ha dado su consentimiento para
                  el tratamiento de datos, tiene la opción de revocarlo en
                  cualquier momento, lo que afectará a todo el tratamiento de
                  datos futuro. Además, tiene derecho a exigir que se restrinja
                  el tratamiento de sus datos en determinadas circunstancias.
                  Además, tiene derecho a presentar una reclamación ante el
                  organismo de control competente.
                  <br />
                  No dude en ponerse en contacto con nosotros en cualquier
                  momento si tiene alguna pregunta sobre esta u otra cuestión
                  relacionada con la protección de datos.
                </p>
                <h6 className="heading">
                  Herramientas de análisis y herramientas proporcionadas por
                  terceros
                </h6>
                <p className="content">
                  Existe la posibilidad de que sus patrones de navegación sean
                  analizados estadísticamente cuando visite este sitio web.
                  Estos análisis se realizan principalmente con lo que
                  denominamos programas de análisis.
                  <br />
                  Para obtener información detallada sobre estos programas de
                  análisis, consulte nuestra Declaración de Protección de Datos
                  más abajo.
                </p>
                <p className="heading">2. Alojamiento</p>
                <p className="sub_heading">Alojamiento Externo</p>
                <p className="content">
                  Este sitio web está alojado en un proveedor de servicios
                  externo (host). Los datos personales recogidos en este sitio
                  web se almacenan en los servidores del anfitrión. Estos pueden
                  incluir, pero no se limitan a, direcciones IP, solicitudes de
                  contacto, metadatos y comunicaciones, información sobre el
                  contrato, información de contacto, nombres, acceso a la página
                  web y otros datos generados a través de un sitio web.
                  <br />
                  El host se utiliza con el fin de cumplir el contrato con
                  nuestros clientes potenciales y existentes y en el interés de
                  la prestación segura, rápida y eficiente de nuestros servicios
                  en línea por un proveedor profesional.
                  <br />
                  Nuestro anfitrión sólo procesará sus datos en la medida
                  necesaria para cumplir con sus obligaciones de desempeño y
                  para seguir nuestras instrucciones con respecto a dichos
                  datos.
                  <br />
                  ?????
                  <br />
                  ?????
                  <br />
                  ?????
                  <br />
                  ?????
                </p>
                <p className="sub_heading">Tratamiento de datos</p>
                <p className="content">
                  Hemos celebrado un acuerdo de procesamiento de datos con el
                  proveedor mencionado. Se trata de un contrato exigido por las
                  leyes de privacidad de datos que garantiza que procesan los
                  datos personales de los visitantes de nuestro sitio web solo
                  en base a nuestras instrucciones y en cumplimiento del GDPR.
                </p>
                <p className="heading">
                  3. Información general e información obligatoria
                </p>
                <p className="sub_heading">Protección de Datos</p>
                <p className="content">
                  Los operadores de este sitio web y sus páginas se toman muy en
                  serio la protección de sus datos personales. Por ello,
                  tratamos sus datos personales como información confidencial y
                  en cumplimiento de las normas legales de protección de datos y
                  de esta Declaración de Protección de Datos.
                  <br />
                  Cada vez que utilice este sitio web, se recopilarán diversos
                  datos personales. Los datos personales son aquellos que pueden
                  utilizarse para identificarle personalmente. Esta declaración
                  de protección de datos explica qué datos recogemos y para qué
                  los utilizamos. También explica cómo y para qué se recoge la
                  información.
                  <br />
                  Le informamos de que la transmisión de datos a través de
                  Internet (es decir, a través de comunicaciones por correo
                  electrónico) puede ser susceptible de sufrir fallos de
                  seguridad. No es posible proteger completamente los datos
                  contra el acceso de terceros. .
                </p>
                <p className="sub_heading">
                  Información sobre el responsable (denominado "controlador" en
                  el GDPR)
                </p>
                <p className="content">
                  El responsable del tratamiento de datos en este sitio web es
                  <br />
                  Miguel González <br />
                  Calle Velázquez, 1, 6ºD <br />
                  38007 Santa Cruz de Tenerife
                  <br />
                  Teléfono: [A petición] <br />
                  Correo electrónico: mg.fullstack@gmail.com <br />
                  El responsable del tratamiento es la persona física o jurídica
                  que, por sí sola o conjuntamente con otras, toma decisiones
                  sobre los fines y los medios del tratamiento de los datos
                  personales (por ejemplo, nombres, direcciones de correo
                  electrónico, etc.).
                </p>
                <p className="sub_heading">Duración del almacenamiento</p>
                <p className="content">
                  A menos que se haya especificado un periodo de almacenamiento
                  más específico en esta política de privacidad, sus datos
                  personales permanecerán con nosotros hasta que el propósito
                  para el que fueron recogidos deje de ser aplicable. Si usted
                  hace valer una solicitud justificada de eliminación o revoca
                  su consentimiento para el tratamiento de datos, sus datos
                  serán eliminados, a menos que tengamos otras razones
                  legalmente permitidas para almacenar sus datos personales (por
                  ejemplo, períodos de retención de la legislación fiscal o
                  comercial); en este último caso, la eliminación tendrá lugar
                  después de que estas razones dejen de ser aplicables.
                </p>
                <p className="sub_heading">
                  Revocación de su consentimiento para el tratamiento de datos
                </p>
                <p className="content">
                  Un amplio abanico de operaciones de tratamiento de datos sólo
                  es posible con su consentimiento expreso. También puede
                  revocar en cualquier momento cualquier consentimiento que ya
                  nos haya dado. Ello se entenderá sin perjuicio de la legalidad
                  de cualquier recogida de datos que se haya producido antes de
                  su revocación.
                </p>
                <p className="sub_heading">
                  Derecho a oponerse a la recogida de datos en casos especiales;
                  derecho a oponerse a la publicidad directa (art. 21 del RGPD)
                </p>
                <p className="content">
                  EN CASO DE QUE LOS DATOS SE TRATEN SOBRE LA BASE DEL ART.
                  6(1)(E) O (F) DEL RGPD, USTED TIENE DERECHO A OPONERSE EN
                  CUALQUIER MOMENTO AL TRATAMIENTO DE SUS DATOS PERSONALES POR
                  MOTIVOS DERIVADOS DE SU SITUACIÓN PARTICULAR. ESTO TAMBIÉN SE
                  APLICA A CUALQUIER ELABORACIÓN DE PERFILES BASADA EN ESTAS
                  DISPOSICIONES. PARA DETERMINAR LA BASE JURÍDICA EN LA QUE SE
                  BASA CUALQUIER TRATAMIENTO DE DATOS, CONSULTE ESTA DECLARACIÓN
                  DE PROTECCIÓN DE DATOS. SI REGISTRA UNA OBJECIÓN, DEJAREMOS DE
                  PROCESAR SUS DATOS PERSONALES AFECTADOS, A MENOS QUE ESTEMOS
                  EN CONDICIONES DE PRESENTAR MOTIVOS CONVINCENTES DE PROTECCIÓN
                  PARA EL PROCESAMIENTO DE SUS DATOS, QUE SUPEREN SUS INTERESES,
                  DERECHOS Y LIBERTADES, O SI LA FINALIDAD DEL PROCESAMIENTO ES
                  LA RECLAMACIÓN, EL EJERCICIO O LA DEFENSA DE DERECHOS LEGALES
                  (OBJECIÓN CONFORME AL ART. 21(1) GDPR).
                  <br />
                  SI SUS DATOS PERSONALES SE TRATAN PARA REALIZAR PUBLICIDAD
                  DIRECTA, USTED TIENE DERECHO A OPONERSE EN CUALQUIER MOMENTO
                  AL TRATAMIENTO DE SUS DATOS PERSONALES AFECTADOS CON FINES
                  PUBLICITARIOS. ESTO TAMBIÉN SE APLICA A LA ELABORACIÓN DE
                  PERFILES EN LA MEDIDA EN QUE ESTÉ RELACIONADA CON DICHA
                  PUBLICIDAD DIRECTA. SI SE OPONE, SUS DATOS PERSONALES DEJARÁN
                  DE UTILIZARSE PARA FINES DE PUBLICIDAD DIRECTA (OBJECIÓN DE
                  CONFORMIDAD CON EL ART. 21(2) DEL GDPR).
                </p>
                <p className="sub_heading">
                  Derecho a presentar una reclamación ante la agencia de control
                  competente
                </p>
                <p className="content">
                  En caso de infracción del RGPD, los interesados tienen derecho
                  a presentar una reclamación ante una agencia de control, en
                  particular en el Estado miembro en el que tienen su domicilio
                  habitual, su lugar de trabajo o el lugar en el que se ha
                  producido la presunta infracción. El derecho a presentar una
                  reclamación está en vigor independientemente de cualquier otro
                  procedimiento administrativo o judicial disponible como
                  recurso legal.
                </p>
                <p className="sub_heading">
                  Derecho a la portabilidad de los datos
                </p>
                <p className="content">
                  Tiene derecho a exigir que le entreguemos a usted o a un
                  tercero, en un formato de uso común y legible por máquina, los
                  datos que tratamos automáticamente sobre la base de su
                  consentimiento o para cumplir un contrato. Si usted exige la
                  transferencia directa de los datos a otro responsable del
                  tratamiento, sólo se hará si es técnicamente factible.
                </p>
                <p className="sub_heading">Cifrado SSL y/o TLS </p>
                <p className="content">
                  Por razones de seguridad y para proteger la transmisión de
                  contenidos confidenciales, como las consultas que usted nos
                  envía como operador del sitio web, este sitio web utiliza un
                  programa de encriptación SSL o TLS. Puede reconocer una
                  conexión cifrada comprobando si la línea de dirección del
                  navegador cambia de "http://" a "https://" y también por la
                  aparición del icono del candado en la línea del navegador.
                  <br /> Si el cifrado SSL o TLS está activado, los datos que
                  nos transmita no podrán ser leídos por terceros.
                </p>
                <p className="sub_heading">
                  Información, rectificación y erradicación de datos
                </p>
                <p className="content">
                  En el marco de las disposiciones legales aplicables, usted
                  tiene derecho a exigir en cualquier momento información sobre
                  sus datos personales archivados, su origen y sus
                  destinatarios, así como la finalidad del tratamiento de sus
                  datos. También puede tener derecho a que se rectifiquen o
                  eliminen sus datos. Si tiene preguntas sobre este tema o
                  cualquier otra cuestión sobre los datos personales, no dude en
                  ponerse en contacto con nosotros en cualquier momento.
                </p>
                <p className="sub_heading">
                  Derecho a exigir la limitación del tratamiento
                </p>
                <p className="content">
                  Tiene derecho a exigir la imposición de restricciones en el
                  tratamiento de sus datos personales. Para ello, puede ponerse
                  en contacto con nosotros en cualquier momento. El derecho a
                  exigir la restricción del tratamiento se aplica en los
                  siguientes casos:
                </p>
                <ul className="content">
                  <li className="content">
                    En el caso de que usted cuestione la exactitud de sus datos
                    archivados por nosotros, normalmente necesitaremos algún
                    tiempo para verificar esta reclamación. Durante el tiempo
                    que dure esta investigación, usted tiene derecho a exigir
                    que restrinjamos el tratamiento de sus datos personales.
                  </li>
                  <li className="content">
                    Si el tratamiento de sus datos personales se ha llevado a
                    cabo de forma ilegal, tiene la opción de exigir la
                    restricción del tratamiento de sus datos en lugar de exigir
                    la erradicación de los mismos.
                  </li>
                  <li>
                    {" "}
                    Si ya no necesitamos sus datos personales y usted los
                    necesita para ejercer, defender o reclamar derechos legales,
                    tiene derecho a exigir la restricción del tratamiento de sus
                    datos personales en lugar de su erradicación.
                  </li>
                  <li className="content">
                    Si ha presentado una objeción de conformidad con el art.
                    21(1) del RGPD, sus derechos y los nuestros tendrán que
                    sopesarse. Mientras no se determine de quién son los
                    intereses que prevalecen, usted tiene derecho a exigir que
                    se restrinja el tratamiento de sus datos personales.
                  </li>
                </ul>
                <p className="content">
                  Si ha restringido el tratamiento de sus datos personales,
                  estos datos -con la excepción de su archivo- solo podrán ser
                  tratados con su consentimiento o para reclamar, ejercer o
                  defender derechos legales o para proteger los derechos de
                  otras personas físicas o jurídicas o por razones importantes
                  de interés público citadas por la Unión Europea o un Estado
                  miembro de la UE.
                </p>
                <p className="heading">
                  4. Registro de datos en este sitio web
                </p>
                <p className="sub_heading">Archivos de registro del servidor</p>
                <p className="content">
                  El proveedor de este sitio web y de sus páginas recoge y
                  almacena automáticamente información en los llamados archivos
                  de registro del servidor, que su navegador nos comunica
                  automáticamente. La información comprende:
                </p>
                <ul>
                  <li className="content">
                    El tipo y la versión del navegador utilizado
                  </li>
                  <li className="content">El sistema operativo utilizado</li>
                  <li className="content">La URL de referencia</li>
                  <li className="content">
                    El nombre de host del ordenador que accede
                  </li>
                  <li className="content">
                    La hora de la consulta al servidor
                  </li>
                  <li className="content">La dirección IP</li>
                </ul>
                <p className="content">
                  Estos datos no se combinan con otras fuentes de datos.
                  <br />
                  Estos datos se registran sobre la base del Art. 6(1)(f) del
                  GDPR. El operador del sitio web tiene un interés legítimo en
                  la representación técnicamente libre de errores y la
                  optimización del sitio web del operador. Para ello, es
                  necesario registrar los archivos de registro del servidor.
                </p>
                <p className="sub_heading">
                  Formulario de contacto y registro de usuario
                </p>
                <p className="content">
                  Si nos envía sus consultas a través de nuestro formulario de
                  contacto, la información proporcionada en el formulario de
                  contacto, así como cualquier información de contacto
                  proporcionada en el mismo, será almacenada por nosotros con el
                  fin de gestionar su consulta y en el caso de que tengamos más
                  preguntas. No compartiremos esta información sin su
                  consentimiento.
                  <br />
                  El tratamiento de estos datos se basa en el Art. 6(1)(b) del
                  GDPR, si su solicitud está relacionada con la ejecución de un
                  contrato o si es necesario llevar a cabo medidas
                  precontractuales. En todos los demás casos, el tratamiento se
                  basa en nuestro interés legítimo en la tramitación efectiva de
                  las solicitudes dirigidas a nosotros (Art. 6(1)(f) GDPR) o en
                  su acuerdo (Art. 6(1)(a) GDPR) si se ha solicitado.
                  <br />
                  La información que haya introducido en el formulario de
                  contacto permanecerá con nosotros hasta que nos pida que
                  eliminemos los datos, revoque su consentimiento para el
                  archivo de datos o si el propósito para el que se archiva la
                  información ya no existe (por ejemplo, después de que hayamos
                  concluido nuestra respuesta a su consulta). Ello se entenderá
                  sin perjuicio de las disposiciones legales obligatorias, en
                  particular los plazos de conservación.
                  <br />
                </p>
                <p className="sub_heading">
                  Solicitud por correo electrónico, teléfono o fax
                </p>
                <p className="content">
                  Si se pone en contacto con nosotros por correo electrónico,
                  teléfono o fax, su solicitud, incluidos todos los datos
                  personales resultantes (nombre, solicitud) serán almacenados y
                  procesados por nosotros con el fin de procesar su solicitud.
                  No transmitimos estos datos sin su consentimiento.
                  <br />
                  Estos datos se procesan sobre la base del Art. 6(1)(b) del
                  GDPR si su solicitud está relacionada con el cumplimiento de
                  un contrato o es necesaria para la ejecución de medidas
                  precontractuales. En todos los demás casos, los datos se
                  procesan sobre la base de nuestro interés legítimo en la
                  gestión eficaz de las consultas que se nos presentan (Art.
                  6(1)(f) GDPR) o sobre la base de su consentimiento (Art.
                  6(1)(a) GDPR) si se ha obtenido.
                  <br />
                  Los datos que nos envíe a través de las solicitudes de
                  contacto permanecerán con nosotros hasta que nos pida que los
                  eliminemos, revoque su consentimiento para el almacenamiento o
                  el propósito del almacenamiento de datos caduque (por ejemplo,
                  después de la finalización de su solicitud). Las disposiciones
                  legales obligatorias -en particular los períodos de
                  conservación legales- no se ven afectadas.
                  <br />
                </p>
                <p className="heading">5. Herramientas de análisis</p>
                <p className="sub_heading">Google Analytics</p>
                <p className="content">
                  Google Analytics es un servicio analítico de web prestado por
                  Google, Inc., una compañía de Delaware cuya oficina principal
                  está en 1600 Amphitheatre Parkway, Mountain View (California),
                  CA 94043, Estados Unidos (“Google”).
                  <br />
                  Google Analytics utiliza “cookies”, que son archivos de texto
                  ubicados en tu ordenador, para ayudar al website a analizar el
                  uso que hacen los usuarios del sitio web.La información que
                  genera la cookie acerca de tu uso del website (incluyendo tu
                  dirección IP) será directamente transmitida y archivada por
                  Google. Google usará esta información por cuenta nuestra con
                  el propósito de seguir la pista de su uso del website,
                  recopilando informes de la actividad del website y prestando
                  otros servicios relacionados con la actividad del website y el
                  uso de Internet.
                  <br />
                  Google podrá transmitir dicha información a terceros cuando
                  así se lo requiera la legislación, o cuando dichos terceros
                  procesen la información por cuenta de Google. Google no
                  asociará su dirección IP con ningún otro dato del que
                  disponga.
                  <br />
                  Como usuario, y en ejercicio de tus derechos, puedes rechazar
                  el tratamiento de los datos o la información rechazando el uso
                  de cookies mediante la selección de la configuración apropiada
                  de tu navegador, sin embargo, debes saber que si lo hace puede
                  que no puedas usar la plena funcionabilidad de este sitio web.
                  <br />
                  Al utilizar esta web, de acuerdo a la información facilitada
                  en esta Política de Privacidad, aceptas el tratamiento de
                  datos por parte de Google en la forma y para los fines
                  indicados.
                  <br />
                  Para más información, puedes consultar la política de
                  privacidad de Google en
                  https://www.google.com/intl/es/policies/privacy/. <br />
                </p>
              </div>
            ) : (
              <div className="col-md-6 policy">
                <h2>Privacy Policy</h2>
                <hr />
                <p className="heading">1. An overview of data protection</p>
                <p className="sub_heading">1. An overview of data protection</p>
                <p className="content">
                  The following information will provide you with an overview of
                  what will happen to your personal data when you visit this
                  website. The term "personal data" includes all data that can
                  be used to identify you personally. For detailed information
                  on the subject of data protection, please refer to our Data
                  Protection Statement, which we have included below this copy.
                </p>
                <p className="sub_heading">
                  Registration of data on this website
                </p>
                <p className="sub_heading">
                  Who is responsible for recording data on this website (i.e.
                  the "controller")?
                </p>
                <p className="content">
                  The data on this website is processed by the website operator,
                  whose contact information is available in the section
                  "Information about the responsible party (referred to as
                  "controller" in the GDPR)" in this Privacy Policy.
                </p>
                <p className="sub_heading">How do we record your data?</p>
                <p className="content">
                  We collect your data as a result of you sharing your data with
                  us. This may be, for example, information you enter on our
                  contact form.
                  <br />
                  Other data will be recorded by our computer systems
                  automatically or after you consent to your registration during
                  your visit to the website. This data mainly comprises
                  technical information (e.g. web browser, operating system,
                  time of access to the site). This information is recorded
                  automatically when you access this website.
                </p>
                <p className="sub_heading">
                  For what purposes do we use your data?
                </p>
                <p className="content">
                  Some of the information is generated to ensure the error-free
                  provision of the website. Other data may be used to analyse
                  your usage patterns.
                </p>
                <p className="sub_heading">
                  What rights do you have in relation to your data?
                </p>
                <p className="content">
                  You have the right to receive information about the origin,
                  recipients and purposes of your stored personal data at any
                  time, without having to pay a fee for such disclosure. You
                  also have the right to demand that your data be rectified or
                  eradicated. If you have given your consent to data processing,
                  you have the option to revoke your consent at any time, which
                  will affect all future data processing. In addition, you have
                  the right to demand that the processing of your data be
                  restricted in certain circumstances. In addition, you have the
                  right to lodge a complaint with the competent supervisory
                  body.
                  <br />
                  Please do not hesitate to contact us at any time if you have
                  any questions about this or any other data protection issue.
                </p>
                <h6 className="heading">
                  Analysis tools and tools provided by third parties
                </h6>
                <p className="content">
                  Your browsing patterns may be statistically analysed when you
                  visit this website. These analyses are mainly carried out by
                  what we call analysis programmes.
                  <br />
                  For detailed information on these analysis programs, please
                  see our Data Protection Statement below.
                </p>
                <p className="heading">2. Hosting</p>
                <p className="sub_heading">External hosting</p>
                <p className="content">
                  This website is hosted by an external service provider (host).
                  Personal data collected on this website is stored on the
                  host's servers. This may include, but is not limited to, IP
                  addresses, contact requests, metadata and communications,
                  contract information, contact information, names, website
                  access and other data generated through a website.
                  <br />
                  The host is used for the purpose of fulfilling the contract
                  with our potential and existing customers and in the interest
                  of the secure, fast and efficient provision of our online
                  services by a professional provider.
                  <br />
                  Our host will only process your data to the extent necessary
                  to fulfil its performance obligations and to follow our
                  instructions with respect to such data.
                  <br />
                  ?????
                  <br />
                  ?????
                  <br />
                  ?????
                  <br />
                  ?????
                </p>
                <p className="sub_heading">Data processing</p>
                <p className="content">
                  We have entered into a data processing agreement with the
                  above-mentioned provider. This is a contract required by data
                  privacy laws which ensures that they process the personal data
                  of visitors to our website only on the basis of our
                  instructions and in compliance with the GDPR.
                </p>
                <p className="heading">
                  3. General information and mandatory information
                </p>
                <p className="sub_heading">Data protection</p>
                <p className="content">
                  The operators of this website and its pages take the
                  protection of your personal data very seriously. For this
                  reason, we treat your personal data as confidential
                  information and in compliance with the legal data protection
                  regulations and this Data Protection Declaration.
                  <br />
                  Every time you use this website, various personal data will be
                  collected. Personal data is data that can be used to identify
                  you personally. This data protection declaration explains what
                  data we collect and what we use it for. It also explains how
                  and for what purpose the information is collected.
                  <br />
                  We would like to inform you that data transmission over the
                  Internet (i.e. via e-mail communications) may be susceptible
                  to security breaches. It is not possible to protect data
                  completely against access by third parties.
                </p>
                <p className="sub_heading">
                  Information on the controller (referred to as "controller" in
                  the GDPR)
                </p>
                <p className="content">
                  The data controller of this website is
                  <br />
                  Miguel González <br />
                  Calle Velázquez, 1, 6ºD <br />
                  38007 Santa Cruz de Tenerife
                  <br />
                  Phone: [On request] <br />
                  Email: mg.fullstack@gmail.com <br />
                  The controller is the natural or legal person who, alone or
                  jointly with others, makes decisions about the purposes and
                  means of the processing of personal data (e.g. names, e-mail
                  addresses, etc.).
                </p>
                <p className="sub_heading">Duration of storage</p>
                <p className="content">
                  Unless a more specific storage period has been specified in
                  this privacy policy, your personal data will remain with us
                  until the purpose for which it was collected no longer
                  applies. If you assert a justified request for deletion or
                  revoke your consent to data processing, your data will be
                  deleted, unless we have other legally permissible reasons for
                  storing your personal data (e.g. tax or commercial law
                  retention periods); in the latter case, deletion will take
                  place after these reasons no longer apply.
                </p>
                <p className="sub_heading">
                  Revoking your consent to data processing
                </p>
                <p className="content">
                  A wide range of data processing operations is only possible
                  with your express consent. You can also revoke any consent you
                  have already given us at any time. This is without prejudice
                  to the lawfulness of any data collection that has taken place
                  prior to your revocation.
                </p>
                <p className="sub_heading">
                  Right to object to the collection of data in special cases;
                  right to object to direct marketing (Art. 21 GDPR)
                </p>
                <p className="content">
                  N CASE THE DATA ARE PROCESSED ON THE BASIS OF ART. 6(1)(E) OR
                  (F) OF THE GDPR, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO
                  THE PROCESSING OF YOUR PERSONAL DATA ON GROUNDS RELATING TO
                  YOUR PARTICULAR SITUATION. THIS ALSO APPLIES TO ANY PROFILING
                  BASED ON THESE PROVISIONS. TO DETERMINE THE LEGAL BASIS ON
                  WHICH ANY DATA PROCESSING IS BASED, PLEASE REFER TO THIS DATA
                  PROTECTION DECLARATION. IF YOU REGISTER AN OBJECTION, WE WILL
                  NO LONGER PROCESS YOUR PERSONAL DATA CONCERNED, UNLESS WE ARE
                  ABLE TO PROVIDE COMPELLING PROTECTION GROUNDS FOR PROCESSING
                  YOUR DATA, WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS,
                  OR IF THE PURPOSE OF THE PROCESSING IS THE ASSERTION, EXERCISE
                  OR DEFENCE OF LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21(1)
                  GDPR).
                  <br />
                  IF YOUR PERSONAL DATA ARE PROCESSED FOR DIRECT MARKETING
                  PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE
                  PROCESSING OF THE PERSONAL DATA CONCERNED FOR MARKETING
                  PURPOSES. THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS
                  RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL
                  DATA WILL NO LONGER BE USED FOR DIRECT MARKETING PURPOSES
                  (OBJECTION PURSUANT TO ART. 21(2) OF THE GDPR).
                </p>
                <p className="sub_heading">
                  Right to lodge a complaint with the competent supervisory
                  agency
                </p>
                <p className="content">
                  In the event of a breach of the GDPR, data subjects have the
                  right to lodge a complaint with a supervisory agency, in
                  particular in the Member State in which they have their
                  habitual residence, their place of work or the place where the
                  alleged breach has occurred. The right to lodge a complaint is
                  in force independently of any other administrative or judicial
                  procedure available as a legal remedy.
                </p>
                <p className="sub_heading">Right to data portability</p>
                <p className="content">
                  You have the right to demand that we provide you or a third
                  party, in a commonly used and machine-readable format, with
                  data that we process automatically on the basis of your
                  consent or to fulfil a contract. If you demand direct transfer
                  of the data to another data controller, this will only be done
                  if it is technically feasible.
                </p>
                <p className="sub_heading">SSL and/or TLS encoding </p>
                <p className="content">
                  For security reasons and to protect the transmission of
                  confidential content, such as the queries you send us as the
                  website operator, this website uses SSL or TLS encryption. You
                  can recognise an encoded connection by checking whether the
                  browser address line changes from "http://" to "https://" and
                  also by the appearance of the padlock icon in the browser
                  line.
                  <br /> f SSL or TLS encoding is activated, the data you
                  transmit to us cannot be read by third parties.
                </p>
                <p className="sub_heading">
                  Information, rectification and eradication of data
                </p>
                <p className="content">
                  Within the framework of the applicable legal provisions, you
                  have the right to demand information at any time about your
                  stored personal data, their origin and recipients, as well as
                  the purpose of the processing of your data. You may also have
                  the right to have your data corrected or deleted. If you have
                  any questions on this subject or any other questions about
                  personal data, please do not hesitate to contact us at any
                  time.
                </p>
                <p className="sub_heading">
                  Right to demand restriction of processing
                </p>
                <p className="content">
                  You have the right to demand restrictions on the processing of
                  your personal data. To do so, you can contact us at any time.
                  The right to demand restriction of processing applies in the
                  following cases:
                </p>
                <ul className="content">
                  <li className="content">
                    In the event that you dispute the accuracy of your data
                    stored by us, we will normally need some time to verify this
                    claim. During the time of this investigation, you have the
                    right to demand that we restrict the processing of your
                    personal data.
                  </li>
                  <li className="content">
                    If the processing of your personal data has been carried out
                    unlawfully, you have the option to demand the restriction of
                    the processing of your data instead of demanding the erasure
                    of your data.
                  </li>
                  <li>
                    {" "}
                    If we no longer need your personal data and you need it to
                    exercise, defend or claim legal rights, you have the right
                    to demand the restriction of the processing of your personal
                    data instead of its eradication.
                  </li>
                  <li className="content">
                    If you have filed an objection pursuant to Art. 21(1) GDPR,
                    your rights and ours will have to be weighed up. As long as
                    it is not determined whose interests prevail, you have the
                    right to demand that the processing of your personal data be
                    restricted.
                  </li>
                </ul>
                <p className="content">
                  If you have restricted the processing of your personal data,
                  these data - with the exception of archiving - may only be
                  processed with your consent or for the purpose of claiming,
                  exercising or defending legal rights or protecting the rights
                  of other natural or legal persons or for important reasons of
                  public interest cited by the European Union or an EU Member
                  State.
                </p>
                <p className="heading">
                  4. Registration of data on this website
                </p>
                <p className="sub_heading">Server log files</p>
                <p className="content">
                  The provider of this website and its pages automatically
                  collects and stores information in socalled server log files,
                  which your browser automatically communicates to us. This
                  information includes:
                </p>
                <ul>
                  <li className="content">
                    The type and version of the browser used
                  </li>
                  <li className="content">The operating system used</li>
                  <li className="content">LThe referrer URL</li>
                  <li className="content">
                    The host name of the accessing computer
                  </li>
                  <li className="content">The time of the server query</li>
                  <li className="content">IP address</li>
                </ul>
                <p className="content">
                  These data are not combined with other data sources.
                  <br />
                  These data are recorded on the basis of Art. 6(1)(f) GDPR. The
                  website operator has a legitimate interest in the technically
                  error-free representation and optimisation of the operator's
                  website. For this purpose, it is necessary to record the
                  server log files.
                </p>
                <p className="sub_heading">Contact form</p>
                <p className="content">
                  If you send us your enquiries via our contact form, the
                  information provided in the contact form, as well as any
                  contact information provided in the contact form, will be
                  stored by us for the purpose of handling your enquiry and in
                  case we have further questions. We will not share this
                  information without your consent.
                  <br />
                  The processing of this data is based on Art. 6(1)(b) GDPR, if
                  your request is related to the performance of a contract or if
                  it is necessary to carry out pre-contractual measures. In all
                  other cases, the processing is based on our legitimate
                  interest in the effective processing of requests addressed to
                  us (Art. 6(1)(f) GDPR) or on your agreement (Art. 6(1)(a)
                  GDPR) if requested.
                  <br />
                  The information you have entered in the contact form will
                  remain with us until you ask us to delete the data, revoke
                  your consent to data archiving or if the purpose for which the
                  information is archived no longer exists (e.g. after we have
                  concluded our response to your enquiry). This is without
                  prejudice to mandatory legal provisions, in particular
                  retention periods.
                  <br />
                </p>
                <p className="sub_heading">
                  Application by e-mail, telephone or fax
                </p>
                <p className="content">
                  If you contact us by e-mail, telephone or fax, your request,
                  including all resulting personal data (name, request) will be
                  stored and processed by us for the purpose of processing your
                  request. We do not pass on this data without your consent.
                  <br />
                  These data are processed on the basis of Art. 6(1)(b) GDPR if
                  your request is related to the performance of a contract or is
                  necessary for the execution of pre-contractual measures. In
                  all other cases, the data is processed on the basis of our
                  legitimate interest in the efficient handling of the enquiries
                  submitted to us (Art. 6(1)(f) GDPR) or on the basis of your
                  consent (Art. 6(1)(a) GDPR) if it has been obtained.
                  <br />
                  The data you submit to us through contact requests will remain
                  with us until you ask us to delete it, revoke your consent to
                  storage or the purpose of data storage expires (e.g. after
                  completion of your request). Mandatory legal provisions - in
                  particular statutory retention periods - remain unaffected.
                  <br />
                </p>
                <p className="heading">5. Analysis tools</p>
                <p className="sub_heading">Google Analytics</p>
                <p className="content">
                  Google Analytics is a web analytics service provided by
                  Google, Inc. a Delaware company with headquarters at 1600
                  Amphitheatre Parkway, Mountain View (California), CA 94043,
                  United States ("Google").
                  <br />
                  Google Analytics uses "cookies", which are text files placed
                  on your computer, to help the website analyze how users use
                  the site. The information generated by the cookie about your
                  use of the website (including your IP address) will be
                  transmitted to and stored by Google. Google will use this
                  information on our behalf for the purpose of evaluating your
                  use of the website, compiling reports on website activity for
                  website operators and providing other services relating to
                  website activity and internet usage.
                  <br />
                  Google may also transfer this information to third parties
                  where required to do so by law, or where such third parties
                  process the information on Google's behalf. Google will not
                  associate your IP address with any other data held by Google.
                  <br />
                  As a user, and in exercise of your rights, you may refuse the
                  processing of data or information by rejecting the use of
                  cookies by selecting the appropriate settings on your browser,
                  however, you should be aware that if you do so you may not be
                  able to use the full functionality of this website. By using
                  this website, according to the information provided in this
                  Privacy Policy, you agree to the processing of data by Google
                  in the manner and for the purposes indicated.
                  <br />
                  For more information, you can consult Google's privacy policy
                  at https://www.google.com/intl/en/policies/privacy/. <br />
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="container-fluid section__2 ">
          <div className="row d-flex justify-content-center">
            <div className="col-11 text-center">
              {lang ? (
                <h1>
                  ¿Interesado en <br /> trabajar conmigo?
                </h1>
              ) : (
                <h1>
                  Interseted in <br /> working with me
                </h1>
              )}
              <h4 className="bold blue__color text-center pt-5">
                <span onClick={() => setModal(!modal)}>
                  {lang ? "Contactame >" : "Contact me >"}{" "}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Policy;
