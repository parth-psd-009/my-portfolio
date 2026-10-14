import React from "react";
import "./Experience.style.css";

const Experience = ({ logo, heading, duration, description, links, className = "" }) => {
    return (
        <div className={`exp-container px-8 py-4 w-52 min-h-[32rem] mb-48 md:min-h-96 rounded-md text-center md:w-96 lg:w-auto lg:flex-1 ${className}`}>
            {logo && <img src={logo} alt="" className="my-5 bg-transparent h-16 w-auto object-contain grayscale brightness-150" />}
            <h1 className="text-2xl font-normal my-5 bg-transparent">
                {heading}
            </h1>
            <p className="text-xl font-thin my-5 bg-transparent">{duration}</p>
            <h2 className="my-5 bg-transparent">{description}</h2>
            {links && (
                <div className="flex flex-wrap justify-center gap-4 mb-5 bg-transparent">
                    {links.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-medium bg-transparent hover:opacity-70 transition duration-300 ease-in-out"
                        >
                            {label}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Experience;
