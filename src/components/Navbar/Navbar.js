import React, { useState } from 'react';
import { FaTimes, FaAlignRight } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MoblieIcon
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            JAIME
          </NavLogo>
          <MoblieIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaAlignRight />}
          </MoblieIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
