import React from "react";
import Experience from "../Experience/Experience.component";
// import Quizzinga from "../../../public/assets/Quizzinga.png";
import IEEE from "../../../public/assets/ieee.svg";
import GDSC from "../../../public/assets/gdsc_logo.svg";

const Experiences = () => {
    return (
        <div className="bg-black md:px-36 -mt-1 pb-8">
            {/* <h1 className="text-2xl font-extrabold text-center mb-24 pt-24 md:pt-48 md:mb-24 md:font-extrabold md:text-6xl">
                Experiences
            </h1> */}
            <h1 className="text-2xl font-extrabold text-center mb-16 pt-12 md:pt-24 md:mb-16 md:text-6xl">
                Experiences
            </h1>
            <div className="flex items-center flex-col md:flex-row md:justify-evenly lg:justify-between">
                <Experience
                    logo={IEEE}
                    heading="Member of The IEEE"
                    duration="April 2023 - April 2024"
                    description="Web developer at IEEE"
                />
{/*                 <Experience
                    logo={Quizzinga}
                    heading="Member of Quizzinga"
                    duration="August 2023 - Present"
                    description="Member of Quizzinga"
                /> */}
                <Experience
                    logo={GDSC}
                    heading="Member of GDSC"
                    duration="August 2023 - Present"
                    description="Member of GDSC"
                />
            </div>
        </div>
    );
};

export default Experiences;
