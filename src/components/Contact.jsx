import React, { useState } from 'react'
import { TextField,Button } from '@mui/material'
import './Contact.css'

function Contact() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [message,setMessage] = useState("")
  const [isNameValid,setIsNameValid] = useState(true)
  const [isEmailValid,setIsEmailValid] = useState(true)
  const [isPhoneValid,setIsPhoneValid] = useState(true)
  const [isMessageValid,setIsMessageValid] = useState(true)

  // Name Validation
  const validateName = (e)=>{
    const {value} = e.target

    if(!! value.match(/^[A-Za-z\s.'-]+$/))
    {
      setName(value)
      setIsNameValid(true)
    }
    else
    {
      setName(value)
      setIsNameValid(false)
    }
  }

  // email validation
  const validateEmail = (e)=> {
    const {value} = e.target

    if(!! value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/))
    {
      setEmail(value)
      setIsEmailValid(true)
    }
    else
    {
      setEmail(value)
      setIsEmailValid(false)
    }
  }

  // Phone validation
  const validatePhone = (e)=>{
    const {value} = e.target

    if(!! value.match(/^\(?(\d{3})\)?[-.]?(\d{3})[-.]?(\d{4})$/))
    {
      setPhone(value)
      setIsPhoneValid(true)
    }
    else{
      setPhone(value)
      setIsPhoneValid(false)
    }
  }

  // Message Validation
  const validateMessage = (e)=>{
    const {value} = e.target

    if(value.length<=200)
    {
      setMessage(value)
      setIsMessageValid(true)
    }
    else{
      setMessage(value)
      setIsMessageValid(false)
    }
  }

  const handleSubmit =(e)=>{

    e.preventDefault()
    
    if(name && email && phone && message)
    {
      if(isNameValid && isEmailValid && isPhoneValid && isMessageValid)
      {
        alert(`
          Your Response submitted successfully...!
        `)
      }
      else
      {
        alert("Please fill the form completely!!!")
      }
    }
    else{
      alert("Please fill the form completely!!!")
    }
  }



  return (
    <div className='contact-form shadow rounded-3 bg-light'>
        <div className='img-container w-100 rounded-top-3'>
          <img className='w-100 rounded-top-3' src="/contact-us-profile.jpg" alt="Contact Profile Img" />
          <div className='profile-head text-white text-center'>
            <h2>Contact Us</h2>
            <p>Feel free to drop a line below</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className='d-flex flex-column px-5 py-3'>
            <TextField name='name' id="standard-basic" label="Full Name" variant="standard" className='mb-4' value={name || ""} onChange={(e)=>validateName(e)} />

            {
              !isNameValid && 
              <div className='mb-1 text-danger fw-bold'>
                Invalid User name
              </div>
            }

            <TextField name='email' id="standard-basic" label="Email" variant="standard" className='mb-4' value={email || ""} onChange={(e)=>validateEmail(e)} />

            {
              !isEmailValid &&
              <div className='mb-1 text-danger fw-bold'>
              Invalid Email
              </div>
            }

            <TextField name='phone' id="standard-basic" label="Phone" variant="standard" className='mb-4' value={phone || ""} onChange={(e)=>validatePhone(e)} />

            {
              !isPhoneValid &&
              <div className='mb-1 text-danger fw-bold'>
              Invalid Phone Number
              </div>
            }

            <TextField
              id="standard-multiline-static"
              label="Message"
              multiline
              rows={3}
              variant="standard"
              className='mb-2'
              name='message'
              value={message || ""}
              onChange={(e)=>validateMessage(e)}
            />

            {
              !isMessageValid &&
              <div className='mb-1 text-danger fw-bold'>
                Message is too long. Maximum message length is 200 characters
              </div>
            }
          <div className='d-flex justify-content-center align-content-center mb-2'>
            <Button type='submit' className='bg-success px-4 py-2 mt-4 mb-2' variant="contained">submit</Button>
          </div>  
        </form> 
        
    </div>
  )
}

export default Contact