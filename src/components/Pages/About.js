import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'
export default function Index(){

    const { value ,setValue } = useContext(UserContext) 
    
    return(
        <div>
            <h1>Home</h1>
            <h3>{value}</h3>
            <button onClick={() => setValue("hello bro")}>Change</button>
        </div>
    )
}