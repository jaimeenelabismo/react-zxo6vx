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
              JAIME RAMIREZ
            </NavLogo>
            <MoblieIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaAlignRight />}
            </MoblieIcon>
            
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>
                  $ Inicio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Acerca'>
                  $ Acerca de Jaime
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Habilidades'>
                  $ Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Portafolio'>
                  $ Portafolio
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink download="CV Jaime Ivan Ramirez Osorio" href="https://3pistolasdigital.mx/pdf/data_3_pistolas.pdf" rel="noopener noreferrer" target="_blank" arial-label="Curriculum">
                    <Button primary download="CV Jaime Ivan Ramirez Osorio" href="https://3pistolasdigital.mx/pdf/data_3_pistolas.pdf" rel="noopener noreferrer" target="_blank" arial-label="Curriculum">Descargar CV</Button>

                  </NavBtnLink>
                ) :( <NavBtnLink download="CV Jaime Ivan Ramirez Osorio" href="https://3pistolasdigital.mx/pdf/data_3_pistolas.pdf" rel="noopener noreferrer" target="_blank" arial-label="Curriculum">
                <Button download="CV Jaime Ivan Ramirez Osorio" href="https://3pistolasdigital.mx/pdf/data_3_pistolas.pdf" rel="noopener noreferrer" target="_blank" arial-label="Curriculum" fontBig primary>Descargar CV</Button>

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
