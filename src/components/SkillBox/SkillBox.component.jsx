import React, { useState } from "react";
import "./SkillBox.style.css"; // Assuming you have a CSS file for styling

const SkillBox = ({ skillBw, skillColor }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="skill-container bg-black"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img
                src={skillBw}
                alt=""
                className={
                    hover
                        ? "skill-img-hidden  rounded-md"
                        : "skill-img  rounded-md"
                }
            />
            <img
                src={skillColor}
                alt=""
                className={
                    hover
                        ? "skill-img  rounded-md"
                        : "skill-img-hidden  rounded-md"
                }
            />
        </div>
    );
};

export default SkillBox;
