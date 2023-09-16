import { useState } from 'react';
import './App.css'
function  App(){
    const[num1,setnum1]=useState('');
    const[num2,setnum2]=useState('');
    const[sum,setsum]=useState('');
    
    const calculateSum=()=>{
         const result=Number(num1)+Number(num2)
         setsum(result)

    }

    
    return(
        <div className='div1'>
            <h2>sum calculator:</h2>
            <div className='div2'>
               
                <input type="Number" value={num1} className="n1"onChange={(e) => setnum1(e.target.value)}></input>
                <input type="Number" value={num2} className='n1' onChange={(e) => setnum2(e.target.value)}></input>
            
            <button className='btn' onClick={calculateSum}>+</button>
            <p >Sum: {sum}</p>
            </div>
        </div>
        

    )
        
}
export default App;