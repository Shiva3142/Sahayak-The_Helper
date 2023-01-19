import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App'

function Logout() {
    let { updateLoginState } = useContext(userContext)
    let navigate = useNavigate()
    useEffect(()=>{
        updateLoginState({type:"LOGOUT",user:false,username:null})
        navigate('/login')
    })
    return (
        <div>Terminating The Session</div>
    )
}

export default Logout