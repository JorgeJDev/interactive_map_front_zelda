import { useState } from 'react';
import { MarkerContext } from './MarkerContext';

export const MarkerProvider = ({ children }) => {

    const [marker, setMarker] = useState();
    
    return (

        <MarkerContext.Provider value={{marker, setMarker}}>

            { children }
            
        </MarkerContext.Provider>

    )
};