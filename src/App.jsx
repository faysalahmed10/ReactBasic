import React,{useState} from 'react'
import About from './About';

const App = () =>{
   
        const [number,setNumber] = useState(0)
       
  
    return (
        <>
            <h1>Hello world</h1>
           
            <button onClick={()=> setNumber(number+1)} >+</button>
            <p>{number}</p>
            <button onClick={()=>setNumber(number-1)} >-</button>
            <About name="tohin" dist="Cumilla" />
            <hr/>
            <About name="Rahim" dist="Rangpur" />
        </>
    )
}

export default App