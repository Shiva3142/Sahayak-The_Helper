import React, { useContext } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { userContext } from '../../App'

function Header() {
    let { login } = useContext(userContext)
    let [window_width, updateWindowWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        updateWindowWidth(window.innerWidth);
    })
    let [toggleOptions, updateToggleOptions] = useState(false);
    let [toggleNavbar, updateToggleNavbar] = useState(false);
    return (
        <>
            <header>
                <DehazeIcon className={`${window_width < 786 ? "display_flex" : "display_none"}`} onClick={() => { updateToggleNavbar(true) }} />
                <div className="header">
                    <h1>
                        <NavLink to="/">Sahayak-The Helper</NavLink>
                    </h1>
                </div>
                <div className=""></div>
                <div className=""></div>
                <nav className={`DesktopNav ${window_width > 786 ? "display_flex" : "display_none"}`}>
                    <NavLink to="/texthelper">Text-Helper</NavLink>
                    <NavLink to="/mathhelper">Mathematics-Helper</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/references">References</NavLink>
                </nav>
                {
                    login.user ? (
                        <>
                            <div className="user">
                                <div className="name" onClick={() => { updateToggleOptions(!toggleOptions) }}>
                                    Hello Shivkumar
                                </div>
                                {
                                    toggleOptions ? (<>
                                        <div className="options">
                                            <NavLink to="/account">Account</NavLink>
                                            <NavLink to="/logout">Logout</NavLink>
                                        </div>
                                    </>) : (
                                        <></>
                                    )
                                }
                            </div>
                        </>
                    ) : (
                        <>
                            <button> <NavLink to="/login">Login</NavLink></button>
                        </>
                    )
                }
                <nav className={`MobileNav ${toggleNavbar ? "display_flex" : ""}`}>
                    <CloseIcon onClick={() => { updateToggleNavbar(false) }} />
                    <NavLink to="/texthelper">Text-Helper</NavLink>
                    <NavLink to="/mathhelper">Mathematics-Helper</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/references">References</NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header