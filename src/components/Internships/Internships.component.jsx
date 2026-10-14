import React from "react";
import Experience from "../Experience/Experience.component";
import TruEstate from "../../../public/assets/truestateindia_logo.png";

const Internships = () => {
    return (
        <div className="bg-black md:px-36 pb-8">
            <h1 className="text-2xl font-extrabold text-center mb-16 pt-12 md:pt-24 md:mb-16 md:text-6xl">
                Work Experience
            </h1>
            <div className="flex items-center justify-center flex-col lg:flex-row lg:justify-between lg:gap-8">
                <Experience
                    logo={TruEstate}
                    heading="SDE"
                    duration="July 2026 - Present"
                    description="WhatsApp chat service, headless CMS backend and Typesense search on GCP at TruEstate"
                />
                <Experience
                    logo={TruEstate}
                    heading="SDE Intern"
                    duration="January 2026 - July 2026"
                    description="Shipped 5+ CRM modules used by 200+ internal users and calling webhooks at TruEstate"
                />
            </div>
        </div>
    );
};

export default Internships;
