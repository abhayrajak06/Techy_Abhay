import React from 'react';
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <h1>TechyAbhay</h1>
            <p>@all rights reserved</p>
        </div>

        <div>
            <h5>Follow Us</h5>
            <div>
                <a href="https://www.facebook.com/" target={"blank"}>Facebook</a>
                <a href="https://www.instagram.com/abhay_rajak6/" target={"blank"}>Instagram</a>
                <a href="https://github.com/" target={"blank"}>Github</a>
            </div>
        </div>
    </div>
  );
};

export default Footer;