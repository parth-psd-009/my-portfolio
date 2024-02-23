import React from "react";
import "./Experience.style.css";

const Experience = ({ logo, heading, duration, description }) => {
    return (
        <div className="exp-container px-8 mb-48 rounded-md">
            <img src={logo} alt="" className="my-5 bg-transparent" />
            <h1 className="text-2xl font-normal my-5 bg-transparent">
                {heading}
            </h1>
            <p className="text-xl font-thin my-5 bg-transparent">{duration}</p>
            <h2 className="my-5 bg-transparent">{description}</h2>
        </div>
    );
};

export default Experience;
