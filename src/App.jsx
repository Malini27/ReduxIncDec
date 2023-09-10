import './App.css'
function  App(){
    document.addEventListener('DOMContentLoaded',()=>{
        let burger=document.querySelector(".burger");
        let links=document.querySelector(".nav_links");
        let txtarea=document.querySelector(".text_area");

        burger.addEventListener('click',()=> {
           links.classList.toggle("nav_show");
           txtarea.classList.toggle("textareahide");

    })

    })
    return(
        <>
        <header>
            <div className='header_content'>
            <div className='logo'>
                <img src='th.png' alt=''></img>
            </div>
            <ul className='nav_links'>
                <li><a href='a'>Home</a></li>
                <li><a href='a'>About</a></li>
                <li><a href='a'>Courses</a></li>
                <li><a href='a'>Contact</a></li>
            </ul>
            <div className='burger'>
            <i className="fa-solid fa-bars" style={{color: "#f7f7f7",}} />
               
            </div>

            </div>
            <div className='text_center'>
                <h3>Welcome To</h3>
                <h1>RJ College Of Engineering</h1>
                <a className='btn' href="a">Register Here</a>
            </div>
        </header>

        <main>
            <section className='wwa content mt mb'>
                <div className='wwa_heading'>
                    <h2>About Us</h2>
                </div>
                <div className='wwa_content flex_design'>
                    <div className='vision wwa_box'>
                        <h3>Vision</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                    </div>
                    <div className='mission wwa_box'>
                        <h3>Mission</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='whoweare wwa_box'>
                        <h3>Who We Are</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </section>
        </main>
        </>

        
    
    

        
    )
}
export default App;