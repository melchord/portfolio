import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import './index.scss';

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar expand='md'>
      <NavbarBrand href='/'>MD</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink href='/portfolio'>Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/skill'>Skill</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/blog'>Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/contact'>Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

Component.displayName = 'Navbar';

export default Component;
