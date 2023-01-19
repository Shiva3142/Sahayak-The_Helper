import React from 'react'
import { motion } from "framer-motion"
import { useState } from 'react'

function ForgotPassword(object) {
    let [otpTime,updateOTPTime]=useState(false)
    let [temporaryText,updateTemporaryText]=useState("")
    function submitTheForm(event) {
        event.preventDefault()
        updateTemporaryText("OTP is sent on Registered Email")
        updateOTPTime(true)
    }
    let [loginDetails,updateLoginDetails]=useState({
        "email":"",
        "otp":""
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='Recovery_Container'>
                <form onSubmit={submitTheForm} id='Login_Form'>
                    <h1>
                        Recover Here
                    </h1>
                    {
                        otpTime?(
                            <>
                            <p className='green_color'>{temporaryText}</p>
                            <input type="number" value={loginDetails.otp} onChange={updateDetails} name="otp" id="" placeholder='Enter OTP' required/>
                            </>
                        ):(<>
                            <input type="email" value={loginDetails.email} onChange={updateDetails} name="email" id="email" placeholder='Enter Your Registered Email' required/>
                        </>)
                    }
                    <button type='submit'>{otpTime?("Submit"):("Get OTP")}</button>
                    <p>or</p>
                    <p>Remember the Password? , <span className="blue_color" onClick={() => {
                        object.changeLoginType(0)
                    }}>Login Here</span></p>
                </form>
            </div>
        </motion.div>
    </>
    )
}

export default ForgotPassword