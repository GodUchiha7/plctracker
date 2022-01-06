import React from 'react'
import './Login.css'
// import Splash from './Splash.js'
const Login = () => {
    return (
        <>
            {/* <Splash /> */}
            <div className='vjitimg'>
                <img src="VJIT.png" alt="logo" width="450" height="450" />
            </div>
            <div className='Line'>
            </div>
            <div className="loginH1">
                <h1>Welcome TO CScope VJIT</h1>
            </div>
            <div className='Form'>
                <form >
                    <label >email:
                        <input type="text" name="" id="" />
                    </label>
                    <br /><br />
                    <label >password:
                        <input type="text" />
                    </label>
                    <br /> <br />
                    <button id='b1' onClick={'./Dashboard.js'}>Sign in</button>
                    <button id='b2' onClick={'./Register.js'}>Sign up</button>

                </form>
            </div>
        </>
    )
}
export default Login
