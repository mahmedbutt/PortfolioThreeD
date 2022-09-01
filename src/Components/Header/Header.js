import React, { useState } from "react";
import "./Header.css";
import { Collapse, Navbar, Nav, NavItem } from "reactstrap";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import Contect from "../../Pages/Contect/Contect";
function Header({ lang, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  return (
    // this theme is used to convert theme to baack for white.
    <div className={`${theme?'light':'dark'}`}>
      <Contect lang={lang} theme={theme} modal={modal} toggle={Toggle} />
      <Navbar
        expand={"lg"}
        container="fluid sticky top-0"
        className="py-1"
        color={`${theme?'light':'dark'}`}
        onClick={toggle}
        
      >
        <div className="col-lg ">
          <NavItem>
            <NavLink
              onClick={toggle}
              className={"nav-link order-0 text-lg-center"}
              to={"/"}
            >
              {" "}
              {<h6>Miguel González</h6>}
            </NavLink>
          </NavItem>
        </div>
        <Collapse
          isOpen={isOpen}
          navbar
          className="col-lg-3 order-2  order-lg-1 "
        >
          <Nav
            className=" d-flex align-items-between align-items-center w-100 flex-row"
            navbar
          >
            <div className="col-lg d-lg-flex justify-content-lg-center">
              <NavItem className='px-4'>
                <NavHashLink
                  onClick={toggle}
                  className={"nav-link text-lg-center"}
                  to="/#aboutus"
                >
                  {" "}
                  {lang ? <h6>Sobre Mí</h6> : <h6>About</h6>}
                </NavHashLink>
              </NavItem>
              <NavItem  className='px-4'>
                <NavHashLink
                  onClick={toggle}
                  className={"nav-link text-lg-center"}
                  to="/#myskill"
                >
                  {" "}
                  {lang ? <h6>Mis Habilidades</h6> : <h6>My Skill</h6>}
                </NavHashLink>
              </NavItem>
              <NavItem  className='px-4'>
              <NavHashLink
                  onClick={toggle}
                  className={"nav-link text-lg-center"}
                  to="/#mywork"
                >
                  {" "}
                  {lang ? <h6>Trabajos</h6> : <h6>Works</h6>}
                  </NavHashLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
        <div className="col-lg order-1 order-lg-2 text-lg-center"  onClick={() => setModal(true)}>
          <NavItem>
            {" "}
            <h6 >
              {" "}
              <span className="blue__color">
                {lang ? "Contacto >" : "Contect >"}{" "}
              </span>
            </h6>
          </NavItem>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
