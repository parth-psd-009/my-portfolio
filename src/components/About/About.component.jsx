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
                Hey there! I'm Parth Sarathi Dixit, currently progressing
                through my sophomore year at the LNM Institute of Information
                and Technology. With an insatiable curiosity for all things
                tech, I'm deeply passionate about exploring the dynamic realms
                of web development, machine learning, deep learning, UI/UX
                design, graphic design, and even dabble a bit in 3D modeling.
            </p>
            <MyCarousel />
{/*             <p className="section-text px-6 text-center text-sm mt-10 md:mt-10 md:px-36 md:text-xl">
                Learning never stops. I have always kept myself occupied with
                exploring and learning new things.
            </p> */}
        </div>
    );
};

export default About;
