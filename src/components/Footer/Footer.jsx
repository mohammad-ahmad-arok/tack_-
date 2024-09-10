import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="Appointment pt-5 pb-3">
      <Container>
        <Row>
          <Col lg={2} xs={12} className="fs-7 fw-light">
            <h2>Medicio</h2>
            <p className="mt-5">A108 Adam Street New York, NY 535022</p>
            <p>
              <span className="fw-medium">Phone:</span>+1 55895548855
            </p>
            <p>
              <span className="fw-medium">Email:</span>info@example.com
            </p>
            <div className="social-media my-4">
              <ul className="list-group d-flex flex-row gap-1 ">
                <li className="icon-box d-flex justify-content-center align-items-center black-text border-1 rounded-circle">
                  <BsTwitterX size={16} />
                </li>
                <li className="icon-box d-flex justify-content-center align-items-center black-text border-1 rounded-circle">
                  <BsFacebook size={16} />
                </li>
                <li className="icon-box d-flex justify-content-center align-items-center black-text border-1 rounded-circle">
                  <BsInstagram size={16} />
                </li>
                <li className="icon-box d-flex justify-content-center align-items-center black-text border-1 rounded-circle">
                  <BsLinkedin size={16} />
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2} xs={12}></Col>
          {footerLinks.map((el, index) => {
            return (
              <Col lg={2} xs={12} className="mt-sm-0 mt-5" key={index}>
                <h6>{el.header}</h6>
                <ul className="list-group">
                  {el.links.map((link, index) => {
                    return (
                      <li key={index} className=" mt-2">
                        <a
                          className="black-text fw-light fs-7 text-decoration-none"
                          href={link.href}
                        >
                          {link.content}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            );
          })}
        </Row>
        <Row className="border-top mt-4 pt-4">
          <Col className="text-center fs-7">
            <p>
              &copy;<span>Copyright</span> <strong>Medicio</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
            <div className="Designed ">
              Designed by{" "}
              <a className="text-decoration-none" href="#">
                BootstrapMade
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
