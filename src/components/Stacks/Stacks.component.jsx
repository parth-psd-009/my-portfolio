import React from "react";
import SkillBox from "../SkillBox/SkillBox.component";
import PythonBW from "../../../public/assets/skill-python-bw.svg";
import PythonColor from "../../../public/assets/skill-python-color.svg";

import JavaBw from "../../../public/assets/skill-java-bw.svg";
import JavaColor from "../../../public/assets/skill-java-color.svg";

import CBw from "../../../public/assets/skill-c-bw.svg";
import CColor from "../../../public/assets/skill-c-color.svg";

import JsBw from "../../../public/assets/skill-js-bw.svg";
import JsColor from "../../../public/assets/skill-js-color.svg";

import MongoBw from "../../../public/assets/skill-mongo-bw.svg";
import MongoColor from "../../../public/assets/skill-mongo-color.svg";

import NodeBw from "../../../public/assets/skill-node-bw.svg";
import NodeColor from "../../../public/assets/skill-node-color.svg";

// import MongoBw from "../../../public/assets/skill-mongo-bw.svg";
// import MongoColor from "../../../public/assets/skill-mongo-color.svg";

import ReactBw from "../../../public/assets/skill-react-bw.svg";
import ReactColor from "../../../public/assets/skill-react-color.svg";

const Stacks = () => {
    return (
        <div className="stacks-container bg-black h-full text-white pt-48">
            <h1 className="section-heading text-6xl text-center mb-24">
                My Tech Stacks
            </h1>
            <div className="flex justify-between align-middle">
                <SkillBox skillBw={PythonBW} skillColor={PythonColor} />
                <SkillBox skillBw={PythonBW} skillColor={PythonColor} />
                <SkillBox skillBw={PythonBW} skillColor={PythonColor} />
            </div>
        </div>
    );
};

export default Stacks;
