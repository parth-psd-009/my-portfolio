import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import Hero from "./components/Hero/Hero.component";
import About from "./components/About/About.component";
import Stacks from "./components/Stacks/Stacks.component";
import Experiences from "./components/Experiences/Experiences.component";
import Footer from "./components/Footer/Footer.component";
// import BlobBackground from "./components/BlobBackground/BlobBackground.component"; 

function App() {
    return (
        <Router>
            <div className="main-div bg-black text-white">
                {/* Blob background */}
                {/* <BlobBackground /> */}

                <Navbar />

                <div id="hero">
                    <Hero />
                </div>

                <div id="about">
                    <About />
                </div>

                {/* <div id="stacks">
                    <Stacks />
                </div> */}

                <div id="experiences">
                    <Experiences />
                </div>

                <div id="footer">
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
