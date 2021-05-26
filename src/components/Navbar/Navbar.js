import React, { useState, useEffect } from 'react';
import { FaTimes, FaAlignRight } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MoblieIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn, NavBtnLink
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const showButton = () =>{
    if(window.innerWidth<=960){
      setButton(false)

    }else{
      setButton(true)
    }
  }

  useEffect(()=>{
    showButton()
  }, [])
  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              JAIME
            </NavLogo>
            <MoblieIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaAlignRight />}
            </MoblieIcon>
            
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>
                  home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services'>
                  hola
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products'>
                  adios
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary >Entrar</Button>

                  </NavBtnLink>
                ) :( <NavBtnLink to="/sign-up">
                <Button fontBig primary>Entrar</Button>

              </NavBtnLink>)}
              </NavItemBtn>
            </NavMenu>

            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
