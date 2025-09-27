import React from "react";
import "./About.styles.css";
import MyCarousel from "../Carousel/MyCarousel.component";

const About = () => {
    return (
        <div className="flex-col pt-28 justify-center align-middle bg-black text-white">
            <h1 className="section-heading text-2xl text-center mb-16 md:mb-24 md:text-6xl">
                About Me
            </h1>
            <p className="section-text px-6 text-base text-center my-10 md:px-36 md:text-xl md:my-10">
                Hi, I’m Parth Sarathi Dixit, a final-year student at the LNM Institute of Information Technology. 
                I have a strong interest in technology and love learning by exploring different fields. My main focus areas are web development, 
                machine learning, and deep learning, but I also enjoy working on UI/UX design, graphic design, and 3D modeling.
            </p>
            <MyCarousel />
            <p className="section-text px-6 text-center text-sm mt-10 md:mt-10 md:px-36 md:text-xl">
                
            </p>
        </div>
    );
};

export default About;
