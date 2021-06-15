import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import { Button } from '../../globalStyles';
import {FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, 
       SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink} from './Footer.elements';
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Espero que mi portafolio te haya agradado y llamado la atención...
                    </FooterSubHeading>
                    <FooterSubText>
                        Te muestro algunos de mis contactos y mi CV listo para descargar...
                    </FooterSubText>
                    
                    <SocialIconLink download="CV Jaime Ivan Ramirez Osorio" href="https://3pistolasdigital.mx/pdf/data_3_pistolas.pdf" rel="noopener noreferrer" target="_blank" arial-label="Curriculum">
                        <Button download="CV Jaime Ivan Ramirez Osorio" href="https://3pistolasdigital.mx/pdf/data_3_pistolas.pdf" rel="noopener noreferrer" target="_blank">
                                Descargar CV

                            </Button>
                                </SocialIconLink>
                            
                   
                </FooterSubscription>
               
                <SocialMedia>
                    <SocialMediaWrap>
                        
                           
                            <SocialIcons>
                                <SocialIconLink href="https://www.facebook.com/profile.php?id=100003673726156" rel="noopener noreferrer" target="_blank" arial-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="https://www.linkedin.com/in/jaime-ramirez-041998/" rel="noopener noreferrer" target="_blank" arial-label="Linkedin">
                                    <FaLinkedin/>
                                </SocialIconLink>
                                <SocialIconLink href="https://github.com/Jaime-4-1998" rel="noopener noreferrer" target="_blank" arial-label="Facebook">
                                    <FaGithub/>
                                </SocialIconLink>
                                <SocialIconLink href="mailto:ramirezjaime648@gmail.com" target="_blank" arial-label="Facebook">
                                    <SiGmail/>
                                </SocialIconLink>
                            </SocialIcons>



                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </>
    )
}

export default Footer
