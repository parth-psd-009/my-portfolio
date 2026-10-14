import React from "react";
import "./About.styles.css";
import MyCarousel from "../Carousel/MyCarousel.component";

const About = () => {
    return (
        <div className="flex-col pt-32 justify-center align-middle bg-black text-white">
            <h1 className="section-heading text-2xl text-center mb-16 md:mb-24 md:text-6xl">
                About Me
            </h1>
            <p className="section-text px-6 text-base text-center md:px-36 md:text-xl md:my-10">
                Hi, I’m Parth Sarathi Dixit, a Software Engineer at TruEstate in Bangalore and a Computer Science graduate of the LNM Institute of Information Technology.
                I build end-to-end systems, from scalable backend services and cloud automation to responsive frontends. I also love exploring
                machine learning, deep learning, UI/UX design, graphic design, and 3D modeling.
            </p>
            <MyCarousel />
        </div>
    );
};

export default About;
