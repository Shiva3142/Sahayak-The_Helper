import React from 'react'
import { NavLink } from 'react-router-dom'
import { ErrorPage404 } from './ImageImports'
function ErrorPage() {
    return (
        <div className="ErrorPage">
            <img src={ErrorPage404} alt="ErrorPageImage" />
            <div>
                <section> ¯\_(ツ)_/¯  <span>Page Not Found</span> ¯\_(ツ)_/¯ </section>
                <NavLink to="/">Go To Homepage</NavLink>
            </div>
        </div>
    )
}

export default ErrorPage