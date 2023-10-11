import react,{createContext, useState } from 'react';
import { Namecard } from './component/Namecard';
import './App.css';

export const ReusableFunction=createContext();   //creating the context (this will be shared among children)


const App=()=>{
    const[name,setname]=useState('')
    const[age,setage]=useState('')

    const getInfo={
        getName:()=>{
            return `Name: ${name} Age: ${age}`
        },
        getResult:()=>{
            return `Your name is ${name} and your age is ${age}`
        }

    }
    
return(  
    <div className='container'>
    <input type='text' className='input1' value={name} placeholder='Enter your name'onChange={(e)=>setname(e.target.value)}></input><br></br>
    <input type='Number'className='input2'value={age} placeholder='Enter your age'onChange={(e)=>setage(e.target.value)}></input>
    <ReusableFunction.Provider value={getInfo}>
    <Namecard name={name} age={age} />
    </ReusableFunction.Provider>
    
</div>
);
}
export default App;