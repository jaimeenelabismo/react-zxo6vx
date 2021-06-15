import styled from 'styled-components';

export const PortoContainer =styled.div`
margin-top: -7rem;
background:#0d0d0d;
max-width: 100%;
@media screen and (min-width: 768px) {
    margin-left: auto;
margin-right: auto;
padding-top: 0rem;
}
`;
export const PortoTitle = styled.h1`
color: #fff;
  font-size: 48px;
  margin-bottom: 35px;
  text-align: center;
`;

export const PortoGrid = styled.div`
display: grid;
justify-content: center;

gap: 0.5rem;
grid-template-columns: repeat(2,170px);
padding-bottom: 2rem;
padding-left: 0.8rem;
padding-right: 0.5rem;
@media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 224px);
        justify-content: center;
}

`;
export const PortoVisu = styled.div`
 position: relative;
    display: grid;
    padding: .25rem .75rem .75rem;
    box-shadow: 0 2px 6px rgba(65, 11, 16, .15);
    border-radius: 1rem;
    &:nth-child(1) {
      transition: .3s ease-in;
      background-color: #d2ff52;
     &:hover{
      background-color: #d2ff52;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(2) {
      transition: .3s ease-in;
      background-color: #f9273c;
     &:hover{
      background-color: #f9273c;
      transition: .3s ease-in-out;
     }
  }&:nth-child(3) {
      transition: .3s ease-in;
      background-color: #fdc318;
     &:hover{
      background-color: #fdc318;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(4) {
    background-color: #002739;
      transition: .3s ease-in;
     &:hover{
      background-color: #002739;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(5) {
      transition: .3s ease-in;
      background-color: #6b6be5;
     &:hover{
      background-color: #6b6be5;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(6) {
      transition: .3s ease-in;
      background-color: #fff200;
     &:hover{
      background-color: #fff200;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(7) {
      transition: .3s ease-in;
      background-color: #6b6b6b;
     &:hover{
      background-color: #6b6b6b;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(8) {
      transition: .3s ease-in;
      background-color: #ee3237;
     &:hover{
      background-color: #ee3237;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(9) {
      transition: .3s ease-in;
      background-color: #231f20;
     &:hover{
      background-color: #231f20;
      transition: .3s ease-in-out;
     }
  }
    &:nth-child(10) {
      transition: .3s ease-in;
      background-color:#059eae;
     &:hover{
      background-color:#059eae;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(11) {
      transition: .3s ease-in;
      background-color: #7d7d7d;
     &:hover{
      background-color: #7d7d7d;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(12) {
      transition: .3s ease-in;
      background-color: #143f2e;
     &:hover{
      background-color: #143f2e;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(13) {
      transition: .3s ease-in;
      background-color: #c9920e;
     &:hover{
      background-color: #c9920e;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(14) {
      transition: .3s ease-in;
      background-color: #c39b7c;
     &:hover{
      background-color: #c39b7c;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(15) {
      transition: .3s ease-in;
      background-color: #ee0000;
     &:hover{
      background-color: #ee0000;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(16) {
      transition: .3s ease-in;
      background-color: #324668;
     &:hover{
      background-color: #324668;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(17) {
    background-color: #338c3f;
      transition: .3s ease-in;
     &:hover{
      background-color: #338c3f;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(18) {
      transition: .3s ease-in;
      background-color: #324c96;
     &:hover{
      background-color: #324c96;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(19) {
      transition: .3s ease-in;
      background-color: #004948;
     &:hover{
      background-color: #004948;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(20) {
      transition: .3s ease-in;
      background-color: #ee0000;
     &:hover{
      background-color: #ee0000;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(21) {
      transition: .3s ease-in;
      background-color: #39a2b0;
     &:hover{
      background-color: #39a2b0;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(22) {
      transition: .3s ease-in;
      background-color: #87754e;
     &:hover{
      background-color: #87754e;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(23) {
      transition: .3s ease-in;
      background-color: #014fbb;
     &:hover{
      background-color: #014fbb;
      transition: .3s ease-in-out;
     }
  }
  &:nth-child(24) {
      transition: .3s ease-in;
      background-color: #5d6572;
     &:hover{
      background-color: #5d6572;
      transition: .3s ease-in-out;
     }
  }
    @media screen and (min-width: 768px) {
        padding: .5rem 1.5rem 1.5rem;
    }
`;
export const PortoEspacio = styled.h3`
height: 2rem;
@media screen and (max-width: 768px) {
  height: 1.5rem;
    }
`;
export const PortoEspaciouno = styled.h4`
height: 1rem;
`;
export const Portooye = styled.a`
text-decoration: none;
`;
export const PortoTitulo = styled.h3`
margin-bottom: 5px;
  font-size: 22px;
  color: #fff;
  text-align: center;
  
  @media screen and (min-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
`;
export const PortoTituloNegro = styled.h3`
margin-bottom: 5px;
  font-size: 22px;
  color: #000;
  text-align: center;
  
  @media screen and (min-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
`;
export const PortoSubTitulo = styled.h3`
margin-bottom: 0px;
  font-size: 20px;
  color: #000;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: center;
    font-size: 22px;
  }
`;