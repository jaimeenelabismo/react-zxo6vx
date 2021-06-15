import React from 'react';
import { Container } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper,
        Topline, Heading, Subtitle, ImgWrapper, Img, Espacio
        } from './InfoSection.elements'
const InfoSection = ({lightBg,imgStart,lightTopLine,lightTextDesc,description,description1,description2,description3,headline,lightText,topLine,img,alt,start}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <Topline lightTopLine={lightTopLine}>
                                    {topLine}
                                </Topline>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>
                                    {description}
                                    {description1}
                                    {description3}
                                    <Espacio/>
                                    {description2}
                                </Subtitle>
                                
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>

                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>

                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
