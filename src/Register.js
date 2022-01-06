import React from 'react'
import './Register.css'
// import Form from 'react-bootstrap/form';
// import Button from 'react-bootstrap/button';
const Register = () => {
    return (
        <>
            <div className='vjitimg'>
                <img src="VJIT.png" alt="logo" width="450" height="450" />
            </div>
            <div className='Line'>
            </div>
            <div className="regisH1">
                <h1>Sign up </h1>
            </div>

            <div className='regisform'>
                <input placeholder="First name" />
                <br />
                <input placeholder='Last name' />
                <br />
                <input placeholder='Email' />
                <br />
                <input placeholder='Your password' />
                <br />
            </div>
        </>
    )

}

export default Register
