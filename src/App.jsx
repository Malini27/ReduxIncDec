import './App.css'
function  App(){
    
    return(
        <>
        <main>
        <div id='landing'>
            <div id='landing_text'>
                <div id='landing_text_inner'>
                    <h1>My Photography Website</h1>
                    
                </div>
            

            </div>
        </div>
            <div id='images'>
                <div id='header'>
                        <h3>My Work</h3>

                </div>
                    <img src='photo1.png' alt='natural image' className='image_class'></img>
                    <div className='caption'>
                        <h3>Photo 1</h3>
                        <p>Sunset Beach View</p>
                    </div>
                    <img src='photo2.png'alt='natural image'className='image_class'></img>
                    <div className='caption'>
                        <h3>Photo 2</h3>
                        <p>Beautiful Blue Ocean</p>
                    </div>
                    <img src='photo3.png'alt='natural image' className='image_class'></img>
                    <div className='caption'>
                        <h3>Photo 3</h3>
                        <p>Autumn Fall</p>
                    </div>
                    <img src='photo4.png'alt='natural image'className='image_class'></img>
                    <div className='caption'>
                        <h3>Photo 4</h3>
                        <p>Lovable Lavender Field</p>
                    </div>
                    <img src='photo5.png'alt='natural image' className='image_class'></img>
                    <div className='caption'>
                        <h3>Photo5</h3>
                        <p>Full Moon View</p>
                    </div>

            </div>

        </main>
        
            <footer>
                <h3 className='foot'>Get In Touch</h3>
                <p className='foot1'>Email or Call me to set up a consult</p>
                <p className='foot2'>hello@gmail.com</p>
                <p className='foot2'>8928738974</p>
            </footer>
        

        </>
        
    )
}
export default App;