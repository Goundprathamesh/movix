import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                <a href="https://www.facebook.com/profile.php?id=100008860903108&mibextid=ZbWKwL" target="_blank" className="icon">
                    <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/goundprathamesh_16/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/GoundPrathamesh?t=miYXtYW-PEnIfkBJjuRvmA&s=09" target="_blank" className="icon">

                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/prathmesh-gound-1a696b207" target="_blank" className="icon">

                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
