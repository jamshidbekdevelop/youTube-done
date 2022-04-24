import React, {createContext, useState} from 'react'
import {muvies} from '../mock/data'

export const MovieContext= createContext()

export const Movie = ({children}) => {
    const [state, setState]= useState(muvies)
    return (
        <MovieContext.Provider value={[state, setState]}>
            {children}
        </MovieContext.Provider>
    )
}
export default Movie;