import React from 'react';
import './Footer.css'
function Footer(props) {
    return (
        <footer className="row align-items-center m-0">
            <div className="btn btn-danger col-2 offset-2">
                <p className="text-center m-0">Send me an <span className="email text-uppercase">email</span></p>
            </div>
        </footer>
    );
}

export default Footer;