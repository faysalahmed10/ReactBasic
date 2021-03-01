import React,{useState} from 'react'

const App = () =>{
   
        const [number,setNumber] = useState(0)
       
  
    return (
        <>
            <h1>Hello world</h1>
           
            <button onClick={()=> setNumber(number+1)} >+</button>
            <p>{number}</p>
            <button onClick={()=>setNumber(number-1)} >-</button>
            
        </>
    )
}

export default App