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
                <div className="card_overlay">
                  <div className="testimonal_card_header">
                    <div className="testimonal_img">
                      <img src={item.img} alt="" />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "24px",
                          fontWeight: "600",
                          color: "grey",
                          fontFamily: "monospace",
                          margin: "7px 0px",
                        }}
                      >
                        {item.name}
                      </p>
                    </div>
                    <div className="testimonal_card_text">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In officia sapiente consectetur? Ipsam reprehenderit
                        porro qui minus natus recusandae molestias amet ea. Amet
                        sunt voluptatum numquam ipsum! Quidem provident mollitia
                        quasi expedita facere repellendus. Magnam qui nihil ab
                        sint tenetur reiciendis nemo, itaque iure debitis
                        molestiae, mollitia officia maxime aperiam.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="testimonal_info">
                  <p>{item.text}</p>
                </div> */}
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
