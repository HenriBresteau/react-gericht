import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we belive in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            eum quos! Quas, at quidem. Eveniet atque totam at necessitatibus
            illum cupiditate similique eius corporis, explicabo deserunt amet
            suscipit. In dignissimos aliquam similique. Omnis, mollitia nulla!
          </p>
        </div>
        <div className="p__opensans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
          excepturi natus officiis porro explicabo nulla.
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
