import React from 'react';
import { BrowserRouter,Route,Link, Routes } from 'react-router-dom';
import './App.css';

const Menu=()=>{
    return (
    <div>
        <ul className='ul1'>
            <li>Chicken Briyani</li>
            <li>Mutton Briyani</li>
            <li>Chicken Pasta</li>
            <li>Veg Pasta</li>
            <li>Pizza</li>
            <li>Burger</li>
        </ul>
    </div>
    )
}
const ComboOffer=()=>{
    return (
    <div>
        <ul className='ul2'>
            <li>Chicken Briyani+Chicken lollipop</li>
            <li>Mutton Briyani+Tandoori</li>
            <li>Pizza+Coke</li>
            <li>Burger+ThumbsUP</li>
        </ul>
    </div>
    )
}
const About=()=>{
    return (
        <div className='ul3'>
            <p>For Order Contact Us : 7823781234 </p>
            <p>Email : kenrestaurant@gmail.com</p>
        </div>
    )
}

const Navigation=()=>{
    return (
    <div className='container'>
        <p><b>KEN RESTAURANT</b></p>
        <hr></hr>
    <nav>
        <ul className='navi'>
            <li className='li2'><Link to='/menu'>Menu</Link></li>
            <li className='li2'><Link to='/combo'>Combo Offer</Link></li>
            <li className='li2'><Link to='/about'>About</Link></li>

        </ul>
    </nav>
    </div>
    );
};

const App=()=>{
return(  
    <>
    <BrowserRouter>
      <div>
        <Navigation/>
        <Routes>
            <Route path='/menu' element={<Menu/>} />
            <Route path='/combo' element={<ComboOffer/>} />
            <Route path='/about' element={<About/>} />

        </Routes>
        
      </div>
    </BrowserRouter>
    </>
    
);
}
export default App;