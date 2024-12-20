"use client";

import React, { useEffect, useState } from 'react';
import { Container, Dropdown, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';
import Image from 'next/image';
import logo from "../asserts/logo.jpg";
import { usePathname } from 'next/navigation';

const DropdownSubMenu = ({ title, children }) => {
  const [dropdownShow, setDropdownShow] = useState(false);

  const onDropdownEnter = () => setDropdownShow(true);
  const onDropdownLeave = () => setDropdownShow(false);

  return (
    <Dropdown
      onMouseEnter={onDropdownEnter}
      onMouseLeave={onDropdownLeave}
      show={dropdownShow}
      drop="right"
      className="dropend"
    >
      <Dropdown.Toggle as="a" href="#" className="dropdown-item">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  );
};

const Navbar9 = () => {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: '0', 
        zIndex: '999', 
        width: '100%',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease'
      }}
    >
      <Container>
        <Navbar
          expand="lg"
          style={{
            backgroundColor: '#FFF',
            color: '#000',
            borderBottomLeftRadius: '22px',
            borderBottomRightRadius: '22px',
            marginTop: '-10px',
            padding: "0px 15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Navbar.Brand href="#">
            <Image src={logo} alt="Logo" style={{ width: 'auto', height: '100px' }} className='img_logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink className={pathname === "/" ? "design" : ""} href="/" active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={pathname === "/about" ? "design" : ""} href="/about">About Us</NavLink>
              </NavItem>
              <Dropdown as={NavItem} >
                <Dropdown.Toggle as={NavLink} id="offeringDropdown">
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
        <Dropdown.Item href="/Penetrationtesting">Automotive Penetration Testing</Dropdown.Item>
        <Dropdown.Item href="/CyberSecurityArchitecture">Cyber Security Architecture Design</Dropdown.Item>
        <Dropdown.Item href="/UNRSecurityCompliance">UNR 155 and
ISO 21434 Cyber
Security Compliance</Dropdown.Item>
        <Dropdown.Item href="/UNRMotorcycles">UNR 155 Compliance for Motorcycles</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              <Dropdown as={NavItem} >
                <Dropdown.Toggle as={NavLink} id="offeringDropdown">
                  Offering
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <DropdownSubMenu title="Embedded Product Engineering">
                    <Dropdown.Item href="/autosar">AUTOSAR</Dropdown.Item>
                    <Dropdown.Item href="/Infotainment">Infotainment</Dropdown.Item>
                    <Dropdown.Item href="/ev-tmc&bms">EV - TMC & BMS</Dropdown.Item>
                  </DropdownSubMenu>


                  <DropdownSubMenu title="Automotive Cyber Security Engineering">
                    <Dropdown.Item href="/subcybersecurity">Sub cyber security concept phase</Dropdown.Item>
                    <Dropdown.Item href="/productdevelopmentphase">Product development phase</Dropdown.Item>
                    <Dropdown.Item href="/threadanalysis">Thread analysis and risk assessment methods</Dropdown.Item>
                  </DropdownSubMenu>

                  

                  <DropdownSubMenu title="Training">
                    <Dropdown.Item href="/cybersecurity">Cyber security</Dropdown.Item>
                    <Dropdown.Item href="/validation">Validation</Dropdown.Item>
                    <Dropdown.Item href="/systemrequirment">System requirements</Dropdown.Item>
                  </DropdownSubMenu>


                  <DropdownSubMenu title="AI & Computer Vision">
                    <Dropdown.Item href="/action-recognition-and-localization">Action Recognition and Localization</Dropdown.Item>
                    <Dropdown.Item href="/attention-maps">Attention Maps</Dropdown.Item>
                  </DropdownSubMenu>

                

                  <DropdownSubMenu title="Tools & Automation">
                    <Dropdown.Item href="/data_analytics_tools">Data Analytics Tools</Dropdown.Item>
                    <Dropdown.Item href="/test-author">Test Authoring Tool</Dropdown.Item>
                  </DropdownSubMenu>

                 

                  <DropdownSubMenu title="Verification & Validation">
                    <Dropdown.Item href="system-validation">System Validation - ADAS</Dropdown.Item>
                    <Dropdown.Item href="softwaretesting">Software Testing</Dropdown.Item>
                  </DropdownSubMenu>
                </Dropdown.Menu>
              </Dropdown>
             
              <Dropdown as={NavItem} >
                <Dropdown.Toggle as={NavLink} id="offeringDropdown">
                  Solutions
                </Dropdown.Toggle>
                <Dropdown.Menu>
        <Dropdown.Item href="/Fraud">  Fraud Detection</Dropdown.Item>
        <Dropdown.Item href="/Ethernet">  Ethernet Switch Protection</Dropdown.Item>
        <Dropdown.Item href="Vehicle_Infotainment">  In-Vehicle Infotainment Cyber Guard</Dropdown.Item>
        <Dropdown.Item href="/zonecontrolunit">  Zone Control Unit Protection</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              <NavItem>
                <NavLink className={pathname === "/career" ? "design" : ""} href="/career">Careers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={pathname === "/blogs" ? "design" : ""} href="/blogs">Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={pathname === "/contact" ? "design" : ""} href="/contact">Contact Us</NavLink>
              </NavItem>
             
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navbar9;
