import React, { useContext, useEffect } from 'react'
import Header from '../Templates/Header'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App'
import { useState } from 'react';
import SignIn from './SignIn';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Footer from '../Templates/Footer';
function Login() {
    let { login } = useContext(userContext)
    let navigate = useNavigate()
    useEffect(() => {
        if (login.user) {
            navigate("/")
        }
    })
    let [toggleLoginPage, updateToggleLoginPage] = useState(0)
    function updateLoginType(pageNo) {
        updateToggleLoginPage(pageNo)
    }
    return (

        <div id="loginPageContainer">
            <Header />
            <div className="loginFormContainer">
                {
                    toggleLoginPage === 0 ? (
                        <>
                            <SignIn changeLoginType={updateLoginType} />
                        </>
                    ) : (
                        <>
                            {
                                toggleLoginPage === 1 ? (
                                    <>
                                        <Register changeLoginType={updateLoginType} />
                                    </>
                                ) : (
                                    <>
                                        <ForgotPassword changeLoginType={updateLoginType} />
                                    </>
                                )
                            }
                        </>
                    )
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Login