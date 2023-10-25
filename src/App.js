import React from 'react';
import { useState } from 'react';
import './App.css';

const App=()=>{
    const[display,setDisplay]=useState(0)
    const[operand,setOperand]=useState('')
    const[operator,setOperator]=useState('')

    const handleOperandClick=(digit)=>{
        if(display=== '0'||operator){
            setDisplay(digit)
        }
        else{
            setDisplay(display+digit)
        }

    }
    const handleEqualClick=()=>{
        console.log(`${operand} ${operator} ${display}`)
        const result = eval(`${parseFloat(operand)} ${operator}${parseFloat(display)}`);
        setDisplay(String(result));
        setOperand('');
        setOperator('')
    }
    const handleOperatorClick=(SelectedOperator)=>{
        if(!operator){
            setOperand(display);
            setOperator(SelectedOperator);
        }

    }

    
    
return( 
    <div className='container'>
    <div className='calculator'>
        <div className='display'>{display}</div>
        <div className='buttons'>
            {
                [7,8,9,'+',4,5,6,'-',1,2,3,'*',0,'=','/'].map(items=>{
                    return<button key={items}
                    onClick={()=>{
                        if(typeof items ==='number'){
                            handleOperandClick(String(items));
                        }
                        else if(items === '='){
                            handleEqualClick();
                        }
                        else{
                            handleOperatorClick(items);
                        }
                    }}
                    >{items}</button>
                })
            }
            {
                <button onClick={()=>{setDisplay('0');setOperand('')}}>AC</button>
            }
        </div>
    </div>
    </div>
    
);
}
export default App;