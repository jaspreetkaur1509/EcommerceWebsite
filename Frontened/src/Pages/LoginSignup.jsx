import React from 'react'

const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p></p>
      </div>
    </div>
  )
}

export default LoginSignup