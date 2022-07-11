import React from "react";
import Marquee from "react-fast-marquee";
import { testmonalData } from "../assets/data/authenticationItem";
import "../assets/styles/marqueeSlider.css";

const MarqueeSlider = () => {
  return (
    <div className="marquee_slider_container">
      <div className="mrquee_slider_info">
        <h2>Testimonials</h2>
        <h4>What Users Say About Us</h4>
      </div>
      <Marquee Speed={20} gradient={false}>
        {testmonalData.map((item, index) => {
          return (
            <div key={index}>
              <div className="testmonal_card">
                <div className="testimonal_img">
                  <img src={item.img} alt="" />
                </div>
                <div className="testimonal_info">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
