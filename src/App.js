import React from 'react';
import { useState } from 'react';
import './App.css';

const App=()=>{
    const[email,setEmail]=useState('')
    const[isValidEmail,setisValidEmail]=useState(true)

    const[name,setName]=useState('')
    const[isValidName,setisValidName]=useState(true)

    const onchangeNameHandler=(e)=>{
        setName(e.target.value)
        setisValidName(e.target.value?.length>0)

    }

    const onchangeEmailHandler=(e)=>{
        const inputEmail=(e.target.value)
        const emailPattern=/^[a-zA-Z0-9._-]+@[[a-zA-Z0-9._-]+\.[a-zA-z]{2,4}$/;
        setisValidEmail(emailPattern.test(inputEmail))
        setEmail(inputEmail)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const emailPattern=/^[a-zA-Z0-9._-]+@[[a-zA-Z0-9._-]+\.[a-zA-z]{2,4}$/;
        setisValidEmail(emailPattern.test(email))
        setisValidName(name.length>0)

        isValidEmail && isValidName ? alert("Form submitted"):
        alert('form validation Failed')

    }


return( 
    <>
    <div className='container'>
        <h1>React Form Validation</h1>
        <form onSubmit={handleSubmit}>
            <div className='mail'>
               <label htmlFor='email'>Email:</label>
               <input type='text' id='email'name='email' value={email} onChange={onchangeEmailHandler}className={isValidEmail? 'valid' : 'invalid'}></input>
            </div>
            <div>
                {
                    !isValidEmail &&(<span>Enter valid email</span>)
                }
            </div>
            <div className='name'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' value={name} onChange={onchangeNameHandler} className={isValidName? 'valid' : 'invalid'}></input>
            </div>
            <div>
                {
                    !isValidName &&(<span>Enter valid name</span>)
                }
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </> 
    
);
}
export default App;