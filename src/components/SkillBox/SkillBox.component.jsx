import React, { useState } from "react";
import "./SkillBox.styls.css";

const SkillBox = ({ skillBw, skillColor }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            className="skill-container"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img
                src={hover ? skillColor : skillBw}
                alt=""
                className={hover ? "skill-img-hover" : "skill-img"}
            />
        </div>
    );
};

export default SkillBox;
