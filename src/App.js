import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './reducers/counter';

const App=()=>{
    const {count} = useSelector(state=> state)
    const dispatch=useDispatch();
return( 
    <div className='container'>
       <div className='counter'>Counter:{count}</div>
       <button className='inc' onClick={()=>dispatch(increment(1))}>increment</button>
       <button className='dec' onClick={()=>dispatch(decrement(1))}>decrement</button>

    </div> 
    
);
}
export default App;