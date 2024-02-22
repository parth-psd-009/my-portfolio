import React from "react";
import SkillBox from "../SkillBox/SkillBox.component";
import PythonBW from "../../../public/assets/skill-python-bw.svg";
import PythonColor from "../../../public/assets/skill-python-color.svg";

import JavaBw from "../../../public/assets/skill-java-bw.svg";
import JavaColor from "../../../public/assets/skill-java-color.svg";

const Stacks = () => {
    return (
        <div className="stacks-container grid grid-cols-4 gap-3 px-36 mt-12">
            <SkillBox skillBw={PythonBW} skillColor={PythonColor} />
            <SkillBox skillBw={JavaBw} skillColor={JavaColor} />
            <SkillBox skillBw={PythonBW} skillColor={PythonColor} />
            <SkillBox skillBw={JavaBw} skillColor={JavaColor} />
        </div>
    );
};

export default Stacks;
