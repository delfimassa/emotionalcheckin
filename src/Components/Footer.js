import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bgNavbar mt-4">
      <div className="row no-gutters">
        <div className="col-sm-12 col-md-4 text-center d-flex justify-content-center align-items-center  p-4">
          <Nav.Link exact={true} href="/#inicio" className=" p-0">
            <FontAwesomeIcon
              className=""
              icon={faBrain}
              color="#9E7777"
              size="5x"
            />
          </Nav.Link>
        </div>
        <div className="col-sm-12 col-md-8 text-light  p-4">
          <div className="text-light pt-0 pb-1 justificadoFooter d-flex">
            <p className="mb-0 ">
              <FontAwesomeIcon
                icon={faUserAstronaut}
                color="#F5E8C7"
                size="1x"
              />{" "}
              Delfina Massa
            </p>
          </div>
          <a
            href="https://wa.me/5493815854257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light pt-0 pb-1 justificadoFooter d-flex"
          >
            <p className="mb-0">
              <FontAwesomeIcon icon={faWhatsapp} color="#F5E8C7" size="1x" />{" "}
              +5493815854257
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/delfinamassa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light pt-0 pb-1 justificadoFooter d-flex"
          >
            <p className="mb-0">
              <FontAwesomeIcon icon={faLinkedin} color="#F5E8C7" size="1x" />{" "}
              Linkedin profile
            </p>
          </a>
          <a
            href="https://github.com/delfimassa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light pt-0 pb-1 justificadoFooter d-flex"
          >
            <p className="mb-0">
              <FontAwesomeIcon icon={faGithub} color="#F5E8C7" size="1x" />{" "}
              Github profile
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
