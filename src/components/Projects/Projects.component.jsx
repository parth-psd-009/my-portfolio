import React from "react";
import Experience from "../Experience/Experience.component";

const Projects = () => {
    return (
        <div className="bg-black md:px-36 pb-8">
            <h1 className="text-2xl font-extrabold text-center mb-16 pt-12 md:pt-24 md:mb-16 md:text-6xl">
                Projects
            </h1>
            <div className="flex items-center justify-center flex-col lg:flex-row lg:items-stretch lg:gap-8">
                <Experience
                    heading="Auralis"
                    className="themed-card theme-auralis"
                    duration="React, Node.js, JWT"
                    description="Social media app with timelines, threaded replies and community-targeted posts"
                    links={[
                        { label: "Live", href: "https://auralis-frontend-fdj1.onrender.com/" },
                        { label: "GitHub", href: "https://github.com/ezio-da-firenze/auralis" },
                    ]}
                />
                <Experience
                    heading="Lobbie"
                    className="themed-card theme-lobbie"
                    duration="React, Node.js, MySQL, Redis"
                    description="College event management platform with role-based access and Redis caching"
                    links={[
                        { label: "Live", href: "https://lobster-assignment-frontend.onrender.com/" },
                        { label: "GitHub", href: "https://github.com/ezio-da-firenze/Lobster-Assignment/" },
                        { label: "Docs", href: "https://app.eraser.io/workspace/j02EOSVDs5ox5Hb0d6NW" },
                    ]}
                />
                <Experience
                    heading="LinkedIn Clone"
                    className="themed-card theme-linkedin"
                    duration="Spring Boot, Kafka, Neo4j"
                    description="Event-driven microservices backend with an API gateway and a connection graph"
                    links={[
                        { label: "GitHub", href: "https://github.com/ezio-da-firenze/linkedin_micro" },
                    ]}
                />
            </div>
        </div>
    );
};

export default Projects;
