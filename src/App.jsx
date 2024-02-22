import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import Hero from "./components/Hero/Hero.component";
import About from "./components/About/About.component";
import Stacks from "./components/Stacks/Stacks.component";

function App() {
    return (
        <Router>
            <div className="main-div bg-black text-white">
                <Navbar />
                <div id="hero">
                    <Hero />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="stacks">
                    <Stacks />
                </div>
            </div>
        </Router>
    );
}

export default App;
