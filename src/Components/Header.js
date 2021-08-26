import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div id="inicio" className="sticky-top mb-4">
      <Navbar className="bgNavbar px-2" id="basic-navbar-nav">
        <Nav.Link exact={true} href="/">
          <FontAwesomeIcon
            className=""
            icon={faBrain}
            color="#DEBA9D"
            size="2x"
          />
        </Nav.Link>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse  */}
          {/* <Nav> */}
            <Nav.Link exact={true} href="/" className="nav-link text-light">
              <h5 className="mb-0">
                Emotional check-in <br className="nomd nolg noxl"></br><span className="lead">by Delfi Massa</span>
              </h5>
            </Nav.Link>
          {/* </Nav> */}
        {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default Header;
