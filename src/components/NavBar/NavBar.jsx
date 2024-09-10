import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { WiTime4 } from "react-icons/wi";
import { BsPhone } from "react-icons/bs";
import Button from "../Boutton/Button";

const NavBar = () => {
  return (
    <nav className="fixed-top">
      <div className="header bg-primary">
        <div className="container p-2 d-flex justify-content-center justify-content-md-between">
          <div className=" d-none d-md-flex gap-2 align-items-center white-text fs-6 ">
            <WiTime4 size={22} />
            Monday - Saturday, 8AM to 10PM
          </div>
          <div className="d-flex gap-2 align-items-center white-text fs-6">
            <BsPhone size={22} />
            Call us now +1 5589 55488 55
          </div>
        </div>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-white shadow d-flex flex-column"
      >
        <Container>
          <Navbar.Brand href="#home" className="w-25">
            <img src="/assets/images/logo.png" alt="logo" className="mw-100" />
          </Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto fs-7 fw-medium">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#Aboaut">ABOUT</Nav.Link>
              <Nav.Link href="#Servicis">SERVICIS</Nav.Link>
              <Nav.Link href="#Departmnts">DEPARTMNTS</Nav.Link>
              <Nav.Link href="#Doctors">DOCTORS</Nav.Link>
              <NavDropdown title="DROPDOWN" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Dropdown1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Dropdown2
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button text="Make an Appointment" className='navBtn' />
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavBar;
