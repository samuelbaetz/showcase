import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="faded" light expand="md">
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/showcase">Showcase</NavLink>
            </NavItem>
           
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
