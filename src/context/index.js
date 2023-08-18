'use client'

import {createContext,useContext,useState} from 'react'
const GlobalContext=createContext(null)
export default function GlobalState({children}){
    const [commonLoader,setCommonLoader]=useState(false)
    return(
        <GlobalContext.Provider value={{commonLoader,setCommonLoader}}>
            {children}
        </GlobalContext.Provider>
    )
}