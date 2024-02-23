import React from "react";
import Experience from "../Experience/Experience.component";
import IEEE from "../../../public/assets/ieee.svg";

const Experiences = () => {
    return (
        <div className="px-36">
            <h1 className="text-6xl font-extrabold text-center mb-24 pt-48">
                Experiences
            </h1>
            <div className="flex justify-between">
                <Experience
                    logo={IEEE}
                    heading="Member of The IEEE"
                    duration="April 2023 - Present"
                    description="Web developer at IEEE"
                />
                <Experience
                    logo={IEEE}
                    heading="Member of GDSC"
                    duration="August 2023 - Present"
                    description="Member of GDSC"
                />
            </div>
        </div>
    );
};

export default Experiences;
