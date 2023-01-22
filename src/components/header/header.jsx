import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    {/* Since it's require inside src, the image is only rendering when the component is getting loaded (rather than static loading) */}
                    <Link to="/"> <img src={require('../../images/icon.png')} alt="logo" />
                    <span class="instaclone">InstaClone</span>
                    </Link>

                </div>

                <div className="camera-icon">
                    <Link to="addpost">
                    <img src={require('../../images/camera.png')} alt="camera-icon" />
                        {/* <i className="fa-solid fa-camera camera"></i> */}
                        </Link>
                    
                </div>

            </div>
        </>
    )
}

export default Header;