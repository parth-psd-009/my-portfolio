import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import Vector1 from "../public/assets/vector-bg-top-left.svg";
import Hero from "./components/Hero/Hero.component";
import About from "./components/About/About.component";

function App() {
    return (
        <div className="main-div bg-black text-white">
            {/* <img
                src={Vector1}
                alt=""
                className="vector-top-right absolute z-10 opacity-25 "
            /> */}
            <Navbar />
            <Hero />
            <About />
        </div>
    );
}

export default App;
