import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Staj Projesi</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Kütüphane Listesi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/LibaryBooks">Kütüphane Kitap Listesi</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Kitaplar
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/book" right>
                  Kitap Kayıt
                </DropdownItem>
                <DropdownItem href="/writer">
                  Yazar Kayıt
                </DropdownItem>
                <DropdownItem href="/type">
                  Tür Kayıt
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Mustafa Onur Çiçekalan</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;