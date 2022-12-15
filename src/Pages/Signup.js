import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import images2 from '../images/images.png'
const Signup = () => {
  return (
    <>
    <Navbar/>
    <div className='contactlogo'>
  <img  src={images2} alt="say"/>
  </div>
     <div class="wrapper login">
        <div class="container">
            <div class="col-left">
                <div class="login-text">
                    <h2>Welcome!</h2>
                    <p>Create your account.<br/>For Free!</p>
                    <Link to="" class="btn">Sign Up</Link>
                </div>
            </div>

            <div class="col-right">
                <div class="login-form">
                    <h2>Login</h2>
                    <form action="">
                        <p>
                            <label>Username/Email address<span>*</span></label>
                            <input type="text" placeholder="Username or Email" required/>
                        </p>
                        <p>
                            <label>Password<span>*</span></label>
                            <input type="password" placeholder="Password" required/>
                        </p>
                        <p>
                            <input type="submit" value="Sign In"/>
                        </p>
                        <p>
                            <Link to="">Forgot password?</Link>
                        </p>

                    </form>
                </div>
            </div>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Signup

