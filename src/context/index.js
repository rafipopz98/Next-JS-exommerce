'use client'

import {createContext,useState} from 'react'

export const GlobalContext=createContext(null)

export default function GlobalState({children}){
    const [commonLoader,setCommonLoader]=useState(false)
    return(
        <GlobalContext.Provider value={{commonLoader,setCommonLoader}}>
            {children}
        </GlobalContext.Provider>
    )
}