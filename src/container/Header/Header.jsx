import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The Key to find dining</h1>
      <p className="p__opensans" style={{ marginBottom: "1rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quia
        sint soluta alias voluptatum corrupti ab quibusdam a voluptates?
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
