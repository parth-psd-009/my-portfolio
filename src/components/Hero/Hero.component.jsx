import React from "react";
import "./Hero.styles.css";
import ProfilePic from "../../../public/assets/Profile.svg";
import FloatingVector from "../../../public/assets/vector-bg-top-left.svg";

const Hero = () => {
    return (
        <div className="hero-container flex px-36 mt-12 justify-center align-middle md:justify-between">
            {/* <img src={FloatingVector} alt="" className="absolute opacity-10" /> */}
            <div className="heading-container flex-col justify-center z-10 relative ">
                <div className="" >
                    <h1 className="headline-container text-2xl text-center mt-12 pt-5 text-black ml-9 w-72 md:text-white md:text-6xl md:w-auto md:text-left md:ml-0 md:mt-4">
                        Hi! I'm Parth
                    </h1>
                    <p className="description-container text-black ml-20 w-52 text-lg font-medium mt-4 md:font-light md:ml-0 md:w-auto md:mt-4 md:text-white md:text-3xl ">
                        A passionate learner and a tech enthusiast.
                    </p>
                    <p className="text-sm mt-2 mb-52 text-black ml-24 md:mb-20 md:text-white md:mt-8 md:text-xl md:ml-0">Know more about me...</p>
                </div>
            </div>
            <div className="image-container absolute md:relative md:py-10 ">
                <img src={ProfilePic} alt="" className="profile-pic h-96" />
            </div>
        </div>
    );
};

export default Hero;
