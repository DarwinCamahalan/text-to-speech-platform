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

export default () => {
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
      fixed="top"
      expand="sm"
    >
      <Container>
        <NavbarBrand className="pt-3 logo-mobile font-weight-bold" href="/">
          <h3>
            {" "}
            <strong>Text to Speech</strong>
          </h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="text-center" isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                className={classnames(scroll ? "text-white" : "text-dark")}
                data-page="about"
                href="/about"
              >
                <strong> About</strong>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames(scroll ? "text-white" : "text-dark")}
                data-page="events"
                href="/events"
              >
                <strong> Team</strong>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames(scroll ? "text-white" : "text-dark")}
                data-page="contact"
                href="/contactus"
              >
                <strong> Contact</strong>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
