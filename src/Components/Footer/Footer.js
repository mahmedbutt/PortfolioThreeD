import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom'
function Footer({ lang, theme }) {
  return (
    <div className={`${theme ? "light" : "dark"}`}>
      <div className="container-fluid Footer">
        <div className="row  ">
          <div className="row  d-flex justify-content-center">
            <div className="col-lg-11 border__footer">
              <div className="row py-4 ">
                <div className="col-lg-4 col-12  text-lg-start text-center order-1 order-md-0">
                  © 2022 Miguel González. All rights reserved.
                </div>
                <div className="col-12 col-lg-8 col-xl-8 py-2 py-md-0 order-0 order-md-1">
                  <div className="row d-flex justify-content-end">
                  <div className="col-12 text-center text-lg-start col-lg-5"> <Link to='/reason'> 
                      {lang
                        ? "8 Razones para trabajar con Miguel"
                        : "8 Reasons to work with Miguel"}</Link>
                    </div>
                    <div className="col-12  text-lg-start text-center col-lg-2 py-2 py-md-0">
                   < Link to='/legal'  >  {lang ? "Aviso Legal" : "Legal Notice"}</Link>
                    </div>
                    <div className=" col-12 text-lg-start text-center col-lg-2 py-2 py-md-0">
                  <Link to='/policy'>    {lang ? "Política de Privacidad" : "Privacy Policy"}</Link>
                    </div>
                    <div className=" col-12  text-lg-start text-center col-lg-2 py-2 py-md-0">
                   < Link to='/cookie'>   {lang ? " Política de Cookies" : "Cookie Policy"}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
