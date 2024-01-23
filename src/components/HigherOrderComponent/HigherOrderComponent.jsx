import React, { useState } from 'react'

const HigherOrderComponent=(PassedComponent)=>{
 const NewComponent =()=>{
    let [count,setCount]=useState(0);
    const IncrementCount=()=>{
        setCount(count+1)
    }
    return(
        <>
            <PassedComponent count={count} IncrementCount={IncrementCount}/>
        </>
    )
 }
 return NewComponent;
}

export default HigherOrderComponent;