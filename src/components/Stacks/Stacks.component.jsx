import React from "react";
import SkillBox from "../SkillBox/SkillBox.component";
import "./Stacks.style.css";

// To add a skill: drop its logo in public/assets/skills/ and add a line here.
// `invert: true` is for logos that are solid black (they'd vanish on the dark tile).
const SKILL_GROUPS = [
    {
        title: "Languages",
        skills: [
            { name: "C++", icon: "cplusplus" },
            { name: "JavaScript", icon: "javascript" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Python", icon: "python" },
            { name: "Java", icon: "java" },
        ],
    },
    {
        title: "Frameworks and Technologies",
        skills: [
            { name: "ReactJS", icon: "react" },
            { name: "NextJS", icon: "nextjs", invert: true },
            { name: "NodeJS", icon: "nodejs" },
            { name: "ExpressJS", icon: "express", invert: true },
            { name: "NestJS", icon: "nestjs" },
            { name: "Spring Boot", icon: "spring" },
            { name: "MySQL", icon: "mysql" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "Firebase", icon: "firebase" },
        ],
    },
    {
        title: "Developer Tools",
        skills: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github", invert: true },
            { name: "GCP", icon: "googlecloud" },
            { name: "Postman", icon: "postman" },
            { name: "Linux", icon: "linux" },
            { name: "Docker", icon: "docker" },
            { name: "Redis", icon: "redis" },
            { name: "Algolia", icon: "algolia" },
            { name: "Typesense", icon: "typesense" },
        ],
    },
];

const Stacks = () => {
    return (
        <div className="bg-black text-white px-4 pb-8">
            <h1 className="text-2xl font-extrabold text-center mb-12 pt-12 md:pt-24 md:mb-16 md:text-6xl">
                Skills
            </h1>
            <div className="flex flex-col items-center gap-12 md:gap-16">
                {SKILL_GROUPS.map(({ title, skills }) => (
                    <section key={title} aria-label={title} className="w-full">
                        <h2 className="skill-group-title">{title}</h2>
                        <ul className="skill-grid">
                            {skills.map(({ name, icon, invert }) => (
                                <SkillBox
                                    key={name}
                                    name={name}
                                    icon={`/assets/skills/${icon}.svg`}
                                    invert={invert}
                                />
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Stacks;
