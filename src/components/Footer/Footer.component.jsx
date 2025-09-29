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
        <div className="flex-col -mt-1 justify-center items-center align-middle text-center px-36 bg-black">
            <hr className="opacity-35 mb-16 md:mb-28" />
            <h1 className="text-3xl align-middle font-bold md:text-4xl ">Get in Touch</h1>
            <div className="flex justify-center align-middle my-8 px-4 ">
                <a
                    href="https://www.linkedin.com/in/parth-sarathi-dixit/"
                    target="_blank"
                >
                    <img
                        src={Linkedin}
                        alt=""
                        className="social-img mx-4 md:mx-2"
                        target="_blank"
                    />
                </a>
                <a href="https://www.instagram.com/p_t__s_d/">
                    <img
                        src={Instagram}
                        alt=""
                        className="social-img mx-4 md:mx-2"
                        target="_blank"
                    />
                </a>
                <a href="https://medium.com/@saarthee">
                    <img
                        src={Medium}
                        alt=""
                        className="social-img mx-4 md:mx-2"
                        target="_blank"
                    />
                </a>
                <a href="https://x.com/parth_sd20_09">
                    <img
                        src={Twitter}
                        alt=""
                        className="social-img mx-4 md:mx-2"
                        target="_blank"
                    />
                </a>
                <a href="https://github.com/parth-psd-009">
                    <img
                        src={Github}
                        alt=""
                        className="social-img mx-4 md:mx-2"
                        target="_blank"
                    />
                </a>
            </div>
            {/* <div> */}
            <p className="font-extralight mt-12 md:mt-16 max-w-md mx-auto">
                Design and Developed by Parth Sarathi Dixit
            </p>
            {/* <img src={Heart} alt="" /> */}
            {/* </div> */}
        </div>
    );
};

export default Footer;
