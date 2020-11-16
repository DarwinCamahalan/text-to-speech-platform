import React, { useState } from "react";
import classnames from "classnames";
import "../styles/style.css";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);

    if (scroll && !isOpen) {
      setScroll(!scroll);
    }
  };

  return (
    <Navbar
      className={classnames(
        "m-0 p-0 nav ",
        scroll ? "bg-transparent" : "bg-transparent"
      )}
      style={!scroll ? { opacity: 0.95 } : null}
      dark={scroll}
      light={!scroll}
      expand="md"
    >
      <Container fluid className="nav mx-3">
        <NavbarBrand className="brand pt-4 text-white" href="/">
          <h2>
            {" "}
            <strong>Text to Speech</strong>
          </h2>
          <p>2077</p>
        </NavbarBrand>
        <NavbarToggler
          onClick={toggle}
          style={{ background: "#fff", color: "#000" }}
        />
        <Collapse className="text-center py-1" isOpen={isOpen} navbar>
          <Nav className="navtxt ml-auto" navbar>
            <NavItem>
              <NavLink
                className={classnames(scroll ? "text-white" : "text-white")}
                data-page="about"
                // href="/about"
                href="/take-notes"
              >
                About{" "}
                <i style={{ fontSize: "20px" }} className="fas fa-robot"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames(scroll ? "text-white" : "text-white")}
                data-page="team"
                // href="/team"
                href="/take-notes"
              >
                Team{" "}
                <i
                  style={{ fontSize: "20px" }}
                  className="fas fa-user-friends"
                ></i>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames(scroll ? "text-white" : "text-white")}
                data-page="contact"
                // href="/contact"
                href="/take-notes"
              >
                Contact
                <i
                  style={{ fontSize: "20px" }}
                  className="fas fa-phone ml-2"
                ></i>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
