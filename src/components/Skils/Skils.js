import React from 'react';
import { FaHtml5,FaCss3Alt,FaBootstrap,FaJsSquare,FaPhp,FaJava,FaReact,FaGithubSquare,FaWordpress,FaRocket } from 'react-icons/fa';
import {GrMysql} from 'react-icons/gr';
import {SiMicrosoftsqlserver, SiMongodb, SiGoogleanalytics, SiGooglesearchconsole,SiGoogletagmanager} from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan
} from './Skils.elements';

function Skils() {
  return (
    <IconContext.Provider value={{ color: '#E8175D', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Skills</PricingHeading>
          <PricingContainer>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaHtml5 />
                </PricingCardIcon>
                <PricingCardPlan>HTML 5</PricingCardPlan>
              
                
                
                
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaCss3Alt />
                </PricingCardIcon>
                <PricingCardPlan>CSS 3</PricingCardPlan>
                
                
                
                
              </PricingCardInfo>
            </PricingCard>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaBootstrap />
                </PricingCardIcon>
                <PricingCardPlan>Bootstrap</PricingCardPlan>
                
                
                
                
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaJsSquare />
                </PricingCardIcon>
                <PricingCardPlan>JavaScript</PricingCardPlan>
                
                
               
                
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
          <PricingContainer>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaPhp />
                </PricingCardIcon>
                <PricingCardPlan>PHP</PricingCardPlan>
              
                
                
                
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaJava />
                </PricingCardIcon>
                <PricingCardPlan>JAVA</PricingCardPlan>
                
                
                
                
              </PricingCardInfo>
            </PricingCard>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaReact />
                </PricingCardIcon>
                <PricingCardPlan>REACT.JS</PricingCardPlan>
                
                
                
                
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaGithubSquare />
                </PricingCardIcon>
                <PricingCardPlan>GIT HUB</PricingCardPlan>
                
                
               
                
              </PricingCardInfo>
            </PricingCard>
            
          </PricingContainer>
          <PricingContainer>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GrMysql />
                </PricingCardIcon>
                <PricingCardPlan>MYSQL</PricingCardPlan>
              
                
                
                
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiMicrosoftsqlserver />
                </PricingCardIcon>
                <PricingCardPlan>SQL SERVER</PricingCardPlan>
              
                
                
                
              </PricingCardInfo>
            </PricingCard>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                <SiMongodb />
                </PricingCardIcon>
                <PricingCardPlan>MONGO DB</PricingCardPlan>
              
                
                
                
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaWordpress />
                </PricingCardIcon>
                <PricingCardPlan>WORDPRESS</PricingCardPlan>
                
                
               
                
              </PricingCardInfo>
            </PricingCard>
            
          </PricingContainer>
          <PricingContainer>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiGoogleanalytics />
                </PricingCardIcon>
                <PricingCardPlan>GOOGLE ANALYTICS</PricingCardPlan>
              
                
                
                
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiGooglesearchconsole />
                </PricingCardIcon>
                <PricingCardPlan>GOOGLE SEARCH CONSOLE</PricingCardPlan>
              
                
                
                
              </PricingCardInfo>
            </PricingCard>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                <SiGoogletagmanager />
                </PricingCardIcon>
                <PricingCardPlan>GOOGLE TAG MANAGER</PricingCardPlan>
              
                
                
                
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaRocket />
                </PricingCardIcon>
                <PricingCardPlan>OPTIMIZACION WEB & ANÁLISIS SEO</PricingCardPlan>
                
                
               
                
              </PricingCardInfo>
            </PricingCard>
            
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Skils;