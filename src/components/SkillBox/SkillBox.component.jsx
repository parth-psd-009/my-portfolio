import React from "react";
import "./SkillBox.style.css";

// One skill tile: the logo shows in grayscale by default and turns to full
// colour on hover. `invert` is for logos that are solid black (e.g. Express),
// so they stay visible on the dark tile.
const SkillBox = ({ name, icon, invert = false }) => {
    return (
        <li className="skill-tile">
            <img
                src={icon}
                alt=""
                loading="lazy"
                draggable="false"
                className={
                    invert
                        ? "skill-tile__logo skill-tile__logo--invert"
                        : "skill-tile__logo"
                }
            />
            <span className="skill-tile__name">{name}</span>
        </li>
    );
};

export default SkillBox;
