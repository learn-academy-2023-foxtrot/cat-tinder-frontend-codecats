// import hidden-cat from ".assets/hidden-cat.jpg";
import React from "react"
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <>
        <h1 className="notfound">Error: Page not Found</h1>
        <div className="image"></div>
        
        <Link className="not-found-link" to="/"> Home</Link>
        
        </>
    )
}

export default NotFound