import React, { useState } from 'react'
import { motion } from "framer-motion"
function SignIn(object) {
    function submitTheForm(event) {
        event.preventDefault()
    }
    let [loginDetails,updateLoginDetails]=useState({
        "email":"",
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
    return (
        <>
            <motion.div initial={{ y: "100vh" }} animate={{ y: "0" }} exit={{ y: "100vh" }}>
                <div className='SignIn_Container'>
                    <form onSubmit={submitTheForm} id='Login_Form'>
                        <h1>
                            Login Here
                        </h1>
                        <input type="email" value={loginDetails.email} onChange={updateDetails} name="email" id="email" placeholder='Enter Your Email' required/>
                        <input type="password" value={loginDetails.password} onChange={updateDetails} name="password" id="password" placeholder='Enter Your Password' required/>
                        <button type='submit'>Submit</button>
                        <span className="red_color" onClick={() => {
                            object.changeLoginType(2)
                        }}>Forgot Password ?</span>
                        <p>Don't have an Account? , <span className="blue_color" onClick={() => {
                            object.changeLoginType(1)
                        }}>Register Here</span></p>
                    </form>
                </div>
            </motion.div>
        </>
    )
}

export default SignIn