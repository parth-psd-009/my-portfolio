import React from "react";
import "./Hero.styles.css";
import ProfilePic from "../../../public/assets/Profile.svg";

const Hero = () => {
    return (
        <div className="hero-container flex px-36 mt-12 justify-between align-middle">
            <div className="heading-container flex-col justify-center">
                <div className="">
                    <h1 className="headline-container text-6xl">
                        Hi! I'm Parth
                    </h1>
                    <p className="description-container text-3xl mt-4">
                        A passionate learner and a tech enthusiast.
                    </p>
                    <p className="text-xl mt-8">Know more about me...</p>
                </div>
            </div>
            <div className="image-container">
                <img src={ProfilePic} alt="" className="profile-pic h-96" />
            </div>
        </div>
    );
};

export default Hero;
