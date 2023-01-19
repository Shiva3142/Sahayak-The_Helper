import React, { useState } from 'react'
import { motion } from "framer-motion"

function Register(object) {
    function submitTheForm(event) {
        event.preventDefault()
    }
    let [loginDetails,updateLoginDetails]=useState({
        "name":"",
        "email":"",
        "phone":"",
        "password":""
    })
    function updateDetails(event) {
        updateLoginDetails((preValue)=>{
            return({
                ...preValue,
                [event.target.name]:event.target.value
            })
        })
    }
    return (<>
        <motion.div initial={{ y: "-100vh" }} animate={{ y: "0"}} exit={{ y: "0" }}>
            <div className='Register_Container'>
                <form onSubmit={submitTheForm} id='Login_Form'>
                    <h1>
                        Register Here
                    </h1>
                    <input type="text" value={loginDetails.name} onChange={updateDetails} name="name" id="name" placeholder='Enter Your Name' required/>
                    <input type="email" value={loginDetails.email} onChange={updateDetails} name="email" id="email" placeholder='Enter Your Email' required/>
                    <input type="number" value={loginDetails.phone} onChange={updateDetails} name="phone" id="phone" placeholder='Enter Your Phone Number' required/>
                    <input type="password" value={loginDetails.password} onChange={updateDetails} name="password" id="password" placeholder='Enter Your Password' required/>
                    <button type='submit'>Submit</button>
                    <p>Already have an Account? , <span className="blue_color" onClick={() => {
                        object.changeLoginType(0)
                    }}>Login Here</span></p>
                </form>
            </div>
        </motion.div>
    </>
    )
}

export default Register