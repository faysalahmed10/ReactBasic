import React,{useEffect} from 'react'
import About from './About';

const App = () =>{
   
       useEffect (()=>{
           console.log('Hello effect sunny')
       },[])
       
  
    return (
        <>
            <h1>Hello world</h1>
           
            
            <About name="Rahim" dist="Rangpur" />
        </>
    )
}

export default App