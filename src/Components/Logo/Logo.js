import React from 'react'
import LogoImg from '../../images/logo1.png'
import "./Logo.css"

const Logo = (props) => {
    return (
        <div>
            <img className="logo" src={LogoImg} alt="mart" />
        </div>
    )
}

export default Logo