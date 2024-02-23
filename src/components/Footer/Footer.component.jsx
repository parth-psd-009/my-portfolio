import React, { useState } from "react";
import "./Footer.style.css";
import Linkedin from "../../../public/assets/linkedin.svg";
import Instagram from "../../../public/assets/insta.svg";
import Medium from "../../../public/assets/medium.svg";
import Github from "../../../public/assets/github.svg";
import Twitter from "../../../public/assets/twitter.svg";
import Heart from "../../../public/assets/heart.svg";
import LinkedinHover from "../../../public/assets/linkedin-fill.svg";

const Footer = () => {
    const [hover, setHover] = useState(false);
    return (
        <div className="flex-col justify-center items-center align-middle text-center px-36">
            <hr className="opacity-35 mb-36" />
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <div className="flex justify-center align-middle my-8 px-4">
                <a
                    href="https://www.linkedin.com/in/parth-sarathi-dixit/"
                    target="_blank"
                >
                    <img
                        src={Linkedin}
                        alt=""
                        className="social-img mx-2"
                        target="_blank"
                    />
                </a>
                <a href="https://www.instagram.com/parthsarathidixit/">
                    <img
                        src={Instagram}
                        alt=""
                        className="social-img mx-2"
                        target="_blank"
                    />
                </a>
                <a href="https://medium.com/@saarthee">
                    <img
                        src={Medium}
                        alt=""
                        className="social-img mx-2"
                        target="_blank"
                    />
                </a>
                <a href="https://twitter.com/parthsdixit">
                    <img
                        src={Twitter}
                        alt=""
                        className="social-img mx-2"
                        target="_blank"
                    />
                </a>
                <a href="https://github.com/parth-psd-009">
                    <img
                        src={Github}
                        alt=""
                        className="social-img mx-2"
                        target="_blank"
                    />
                </a>
            </div>
            {/* <div> */}
            <p className="font-extralight mt-16">
                Design and Developed by Parth Sarathi Dixit
            </p>
            {/* <img src={Heart} alt="" /> */}
            {/* </div> */}
        </div>
    );
};

export default Footer;
