import React from "react";
import "./Hero.styles.css";
import ProfilePic from "../../../public/assets/Profile.svg";
import FloatingVector from "../../../public/assets/vector-bg-top-left.svg";

const Hero = () => {
    return (
        <div className="hero-container flex flex-col items-center px-6 mt-12 md:flex-row md:px-36 md:justify-between">
            {/* <img src={FloatingVector} alt="" className="absolute opacity-10" /> */}
            <div className="heading-container flex flex-col items-center md:items-start z-10 relative text-center md:text-left">
                <h1 className="headline-container text-2xl mt-12 pt-5 text-black md:text-white md:text-6xl md:mt-4">
                    Hi! I'm Parth
                </h1>
                <p className="description-container text-black text-lg font-medium mt-4 md:font-light md:mt-4 md:text-white md:text-3xl">
                    A passionate learner and a tech enthusiast.
                </p>
                <p className="text-sm mt-2 text-black md:text-white md:mt-8 md:text-xl">
                    Know more about me...
                </p>
                <a
                    href="https://drive.google.com/file/d/1kipeCJeivZDjKvwFIa6CpDKu5Fz06UGo/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-white text-blue-600 border border-blue-600 
                               px-4 py-1.5 text-sm rounded-lg shadow-md 
                               hover:bg-blue-600 hover:text-white 
                               transition duration-300 ease-in-out
                               md:px-6 md:py-2 md:text-base"
                >
                    My Resume
                </a>
            </div>

            <div className="image-container mt-10 md:mt-0 md:py-10">
                <img src={ProfilePic} alt="" className="profile-pic h-64 md:h-96" />
            </div>
        </div>
    );
};

export default Hero;
