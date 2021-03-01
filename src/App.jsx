import React,{useState} from 'react'

const App = () =>{
    const [number1,setnumber1] = useState(0)
    const [number2,setnumber2] = useState(0)
    const [result,setnumber] = useState(0)
    const addNumber = ()=>{
        const resltData = parseInt(number1) +parseInt(number2)
        setnumber(resltData)
    }
    return (
        <>
            <h1>Hello world</h1>
            <input type="number" onChange={(e)=>setnumber1(e.target.value)}  />
            <input type="number" onChange={(e)=>setnumber2(e.target.value)}  />
            <button onClick={addNumber} >Add</button>
            <p>{number1}</p>
            <p>{number2}</p>
            <p>Reselt: {result}</p>
        </>
    )
}

export default App