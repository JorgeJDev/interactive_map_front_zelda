import { useState } from "react";
import {FilterContext} from './FilterContext'

export const FilterProvider = ({children}) => {
    
    const [filter, setFilter] = useState();
    
    return (

        <FilterContext.Provider value={{filter, setFilter}}>

            { children }
            
        </FilterContext.Provider>

    )
}
