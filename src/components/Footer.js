import React, { useState } from 'react';
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Footer() {
  // const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Code Cats
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggleNavbar} className="me-2" /> */}
        {/* <Collapse isOpen={!collapsed} navbar> */}
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}
          </Nav>
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
}



export default Footer