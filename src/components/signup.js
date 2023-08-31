import { Link } from 'react-router-dom';
import '../App';
import '../index.css'

export default function Signup(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='form-container'>
                    <div className='form-body'>
                <h2>Create account</h2>
                        <p> Please enter your details</p>
                        <form className ='form'>
                        <div className='form-input'>
                            <label>First name</label>
                            <input placeholder='Enter your first'></input>
                            </div>
                            <div className='form-input'>
                            <label>Last name</label>
                            <input placeholder='Enter your Last name'></input>
                            </div>
                        <div className='form-input'>
                            <label>Email</label>
                            <input placeholder='Enter your email'></input>
                            </div>
                        <div className='form-input'>

                            <label>Password</label>
                            <input></input>
                            </div>
                            <div>
                            <span className='checkbox-container'><input type='checkbox' className='checkbox'></input>
                            <label>I agree to recieve news updates and newsletters from the email provided</label>
                            </span>
                            </div>
                            

                            <button className='signin'>Create account</button>
                            <button className ='witgoogle'><span className='google-container'><img src='images/google.png'/> <span className='signgoogle'>Sign up with Google</span></span></button>
                            <p>Already have an account ? <Link to="/login">Log in</Link></p>
                        </form>
                </div></div>
                <div className='options'>
                   
                
                </div>
            </div>

        </div>

    )
}