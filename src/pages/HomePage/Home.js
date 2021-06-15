import React from 'react';
import { homeObjOne, homeObjTwo} from './Data';
import { InfoSection, Skils, Porto } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Skils/>
           <Porto/>

        </>
    )
}

export default Home
