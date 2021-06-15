import React from 'react';
import { homeObjOne,homeObjTwo, homeObjFour } from './Data';
import { InfoSection } from '../../components';

const Acerca = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjFour} />
          
            
           

        </>
    )
}

export default Acerca
