import React, { useState, useEffect } from "react";
import "./Navbar.styles.css";
import PSD from "../../../public/assets/PSD_logo.svg";

const NAV_LINKS = [
    { label: "About", id: "about" },
    { label: "Internships", id: "internships" },
    { label: "Experiences", id: "experiences" },
    { label: "Contact", id: "footer" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const observers = [];

        NAV_LINKS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.4 }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <div className="navbar-container flex justify-center md:justify-between p-12 px-20 align-middle fixed top-0 left-0 w-full bg-black z-50">
            <div className="navbar-logo-container">
                <img src={PSD} alt="" className="navbar-logo-img h-8" />
            </div>
            <div className="navbar-links-container hidden md:flex md:justify-between">
                {NAV_LINKS.map(({ label, id }) => (
                    <div key={id} className="navbar-link">
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(id);
                            }}
                            className={`text-lg transition duration-300 ease-in-out ${
                                activeSection === id
                                    ? "text-white font-semibold"
                                    : "text-gray-400 hover:text-gray-200"
                            }`}
                            style={activeSection === id ? { textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)" } : {}}
                        >
                            {label}
                        </a>
                    </div>
                ))}
                <div className="navbar-link text-gray-400">
                    <a
                        href="https://medium.com/@saarthee"
                        className="text-lg hover:text-gray-200 transition duration-300 ease-in-out flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Blog
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
                <div className="navbar-link text-gray-400">
                    <a
                        href="https://buymeacoffee.com/parthsarathidixit"
                        className="text-lg hover:text-gray-200 transition duration-300 ease-in-out flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Buy me a coffee
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
