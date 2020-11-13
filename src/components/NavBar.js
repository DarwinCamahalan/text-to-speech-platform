import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 10;
      setIsOpen(false);

      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [scroll, setScroll]);

  return (
    <Navbar
      className={classnames(scroll ? "bg-transparent" : "bg-light shadow-lg")}
      style={!scroll ? { opacity: 0.95 } : null}
      dark={scroll}
      light={!scroll}
      expand="md"
    >
      <Container className="nav">
        <NavbarBrand
          className="brand pt-3"
          href="/"
          style={{ fontFamily: "Quantico, sans-serif" }}
        >
          <h2>
            {" "}
            <strong>Text to Speech</strong>{" "}
            <img className="pb-1" src="/logo.png" alt="logo" width="60px" />
          </h2>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="text-center" isOpen={isOpen} navbar>
          <Nav className="navtxt ml-auto" navbar>
            <NavItem>
              <NavLink
                className={classnames(scroll ? "text-white" : "text-dark")}
                data-page="about"
                href="/about"
              >
                About{" "}
                <i style={{ fontSize: "20px" }} className="fas fa-robot"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames(scroll ? "text-white" : "text-dark")}
                data-page="team"
                href="/team"
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
                className={classnames(scroll ? "text-white" : "text-dark")}
                data-page="contact"
                href="/contact"
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
