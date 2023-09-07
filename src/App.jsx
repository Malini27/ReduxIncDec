import './App.css'
function  App(){
    return(
        <div className="container">
            <h1 className="heading">SURVEY FORM</h1>
            <hr></hr>
            <form className='form_class'method='get'>
                <div className='heading_field'>
                <h3>First Name</h3>
                <input type="text"className='field' required></input>
            </div>
            <div className='heading_field'>
                <h3>Last Name</h3>
                <input type="text" className='field'required></input>
            </div>
            <div className='heading_field'>
                <h3>Gender</h3>
                <input type="radio" name="gender"id="male"></input>
                <label for="male">Male</label><br></br>
                <input type="radio" name="gender"id="female"></input>
                <label for="female">Female</label>
            </div>
            <div className='form_control'>
                <div className='heading_field'>
                    <h3>Address</h3>
                </div>
                <div>
                   <div className='input_div'>
                   <input type="text" className='form_control_input'required></input>
                   </div>
               </div>
            </div>
            <div className='form_control'>
                <div className='heading_field'>
                    <h3>City</h3>
                </div>
                <input type="text"className='field'></input>
                <div className='heading_field'>
                    <h3>State</h3>
                </div>
                <input type="text"className='field'></input>
                <div className='heading_field'>
                    <h3>Pincode</h3>
                </div>
                <input type="text"className='field'></input>
            </div>
            <div className='form_control'>
                <div className='heading_field'>
                    <h3>Country</h3>
                </div>
                <select className='field' >
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="India">India</option>

        
                 </select>
                 <div className='heading_field'>
                    <h3>Phone Number</h3>
                 </div>
                 <input type="text"className='field'></input>
                 <div className='heading_field'>
                    <h3>Email</h3>
                 </div>
                 <input type="email"className='field'></input>
            </div>
            <div className='form_control'>
                <div className='heading_field'>
                <div className='input_field'>
                    <h4>Product1</h4>
                    <div class="input-div">
                        <input type="radio" id="bad" name="rating1" value="bad"></input>
                        <label for="bad">Bad</label><br></br>
                        <input type="radio" id="bad" name="rating1" value="good"></input>
                        <label for="bad">Good</label><br></br>
                        <input type="radio" id="bad" name="rating1" value="excellence"></input>
                        <label for="bad">Excellent</label>

                    </div>
                    

                </div>
                <div className='heading_field'>
                <div className='input_field'>
                    <h4>Product2</h4>
                    <div class="input-div">
                        <input type="radio" id="bad2" name="rating2" value="bad"></input>
                        <label for="bad2">Bad</label><br></br>
                        <input type="radio" id="good2" name="rating2" value="good"></input>
                        <label for="good2">Good</label><br></br>
                        <input type="radio" id="ex2" name="rating2" value="excellence"></input>
                        <label for="ex2">Excellent</label>

                    </div>
                    

                </div>

                </div>
                <div className='heading_field'>
                <div className='input_field'>
                    <h4>Product3</h4>
                    <div class="input-div">
                        <input type="radio" id="bad3" name="rating3" value="bad"></input>
                        <label for="bad3">Bad</label><br></br>
                        <input type="radio" id="good3" name="rating3" value="good"></input>
                        <label for="good3">Good</label><br></br>
                        <input type="radio" id="ex3" name="rating3" value="excellence"></input>
                        <label for="ex3">Excellent</label>

                    </div>
                    

                </div>

                </div>
                <div className='heading_field'>
                <div className='input_field'>
                    <h4>Product4</h4>
                    <div class="input-div">
                        <input type="radio" id="bad4" name="rating4" value="bad"></input>
                        <label for="bad4">Bad</label><br></br>
                        <input type="radio" id="good4" name="rating4" value="good"></input>
                        <label for="good4">Good</label><br></br>
                        <input type="radio" id="ex4" name="rating4" value="excellence"></input>
                        <label for="ex4">Excellent</label>

                    </div>
                    

                </div>

                </div>
                <div className='heading_field'>
                <div className='input_field'>
                    <h4>Product5</h4>
                    <div class="input-div">
                        <input type="radio" id="bad5" name="rating5" value="bad"></input>
                        <label for="bad5">Bad</label><br></br>
                        <input type="radio" id="good5" name="rating5" value="good"></input>
                        <label for="good5">Good</label><br></br>
                        <input type="radio" id="ex5" name="rating5" value="excellence"></input>
                        <label for="ex5">Excellent</label>

                    </div>
                    

                </div>

                </div>

                

                    

                </div>
            </div>
            <div className='heading_field'>
                <button type='submit' className='button'>Submit</button>

            </div>
        
            

        
            
                

            </form>
           

        </div>    
    )
}
export default App;