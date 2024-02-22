import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Design from "../../../public/assets/design.svg";
import Robot from "../../../public/assets/machine.svg";
import Brain from "../../../public/assets/deep.svg";
import Cube from "../../../public/assets/3d.svg";
import Web from "../../../public/assets/web.svg";

const MyCarousel = () => {
    return (
        <Carousel
            className="p-10 m-20"
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            autoPlay={true}
            interval={1000}
            stopOnHover={true}
        >
            <div>
                <div>
                    <img src={Web} className="h-20" alt="" />
                </div>
                <div className="mt-10">Web Development</div>
            </div>
            <div>
                <div>
                    <img src={Robot} className="h-20" alt="" />
                </div>
                <div className="mt-10">Machine Learning</div>
            </div>
            <div>
                <div>
                    <img src={Brain} className="h-20" alt="" />
                </div>
                <div className="mt-10">Deep Learning</div>
            </div>
            <div>
                <div>
                    <img src={Design} className="h-20" alt="" />
                </div>
                <div className="mt-10">Designing and UI/UX</div>
            </div>
            <div>
                <div>
                    <img src={Cube} className="h-20" alt="" />
                </div>
                <div className="mt-10">3D modelling</div>
            </div>
        </Carousel>
    );
};

export default MyCarousel;
