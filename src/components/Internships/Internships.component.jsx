import React from "react";
import Experience from "../Experience/Experience.component";
import TruEstate from "../../../public/assets/truestateindia_logo.png";

const Internships = () => {
    return (
        <div className="bg-black md:px-36 pb-8">
            <h1 className="text-2xl font-extrabold text-center mb-16 pt-12 md:pt-24 md:mb-16 md:text-6xl">
                Internships
            </h1>
            <div className="flex items-center justify-center flex-col md:flex-row">
                <Experience
                    logo={TruEstate}
                    heading="SDE Intern"
                    duration="January 2026 - Present"
                    description="Software Development Engineer Intern at TruEstate"
                />
            </div>
        </div>
    );
};

export default Internships;
