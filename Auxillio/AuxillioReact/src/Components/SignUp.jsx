import React, { useState } from 'react'

function SignUp() {
    const [formData, setFormData] = useState(
       { name:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
  return (
    <div>
        <h1>Sign Uo To AUXILLIO</h1>
        <p>Already have an account? <span>Login</span></p>
      <div>
        <button onClick={()=>validationCheck()}
        ></button>
      </div>
    </div>
  )
}

export default SignUp
