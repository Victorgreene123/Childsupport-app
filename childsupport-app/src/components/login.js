import { Link } from 'react-router-dom';
import './App';
import './index.css'
import React from 'react';

export default function Login(){
    const [formData,setFormdata] = React.useState({
        email : '',
        password: '',
        rememberPassword : true
    })
    const [talk,setTalk] = React.useState('')
    const [emailtalk,setemailtalk] = React.useState('')
    function handleChange(e){
        const {name,value,checked,type} = e.target
        setFormdata(prevState => {
            return {...prevState, [name] : [type] == 'checkbox' ? checked : value }
        });
        switch (name) {
            case 'email':
                if(/^.+@+..+com/.test(value)){
                    setemailtalk('Valid email')
                }
                else{
                    setemailtalk('Invalid email')
                }
            case "password":
                if (value.length < 8 ){
                    setTalk('password must be greater then 8 characters')
                }
                else{
                    if(/\d/.test(value)){
                        setTalk('Valid password')
                    }
                    else{
                        setTalk('Must contains a number and a symbol')
                    }
                   
                    
                }
                
                break;
        
            default:
                break;
        }
        // console.log(formData)
    }
    function handleSubmit(){

    }
    return(
        <div className='container'>
            <div className='row'>
                <div className='form-container'>
                    <div className='form-body'>
                <h2>Welcome back</h2>
                        <p>Welcome back please enter your details</p>
                        <form className ='form' 
                         onSubmit={handleSubmit}
                        >
                        <div className='form-input'>
                            <label>Email</label>
                            <input 
                            name='email'
                            placeholder='Enter your email' type='email' 
                            onChange={handleChange}
                            value={formData.email}   

                            />
                            <p>{emailtalk}</p>

                            </div>
                        <div className='form-input'>

                            <label>Password</label>
                            <input 
                            name='password'
                            type='password' 
                            onChange={handleChange}
                            value={formData.password}       
                            />
                            <p>{talk}</p>
                            </div>
                            <div>
                            <span className='checkbox-container'>
                            <input 
                            name='rememberPassword'
                            type='checkbox' 
                            className='checkbox'
                            onChange={handleChange}
                            checked={formData.rememberPassword} 
                            />
                            <label>Remember for 30 days</label>
                            </span>
                            </div>
                            <Link to='/forgotpassword' className='forgotpassword'>Forgot Password</Link>

                            <button className='signin'>Sign in</button>
                            <button className ='witgoogle'><span className='google-container'><img src='images/google.png'/> <span className='signgoogle'>Sign in with Google</span></span></button>
                            <p>Dont have an account ? <Link to="/signup">Sign up</Link></p>
                        </form>
                </div></div>
                <div className='options'>

                   <img src='images/children.png' className='other-img'></img>
                   <br></br>
                   <span className='quote-box'><img src='images/left-quote.png' className='quote' /><blockquote className="quote-content">Childhood is a precious chapter in every life story, and it is our collective responsibility to ensure that every child's journey is filled with love,care, and unwavering support.</blockquote>
                <br></br>
                <img src='images/right-quote.png' className='quote' />
                </span></div>
            </div>

        </div>

    )
}