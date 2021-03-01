import React,{useEffect} from 'react'
import About from './About';
import Axios from 'axios'
const App = () =>{
   
       useEffect (()=>{
           const request = async () =>{
                await Axios ({
                    method: "get",
                    url: 'https://jsonplaceholder.typicode.com/users'
                }).then(response=>{
                    console.log(response.data)
                })
           }
           request()
       },[])
       
  
    return (
        <>
            <h1>Hello world</h1>
           
            
            <About name="Rahim" dist="Rangpur" />
        </>
    )
}

export default App