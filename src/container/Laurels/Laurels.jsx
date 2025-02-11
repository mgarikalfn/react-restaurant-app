import React from "react";
import { SubHeading } from "../../components";
import LaurelsItem from '../../components/Laurelsitem/LaurelsItem'
import { images,data } from "../../constants";
import "./Laurels.css";

const Laurels = () => (
  <div className="section__padding flex__center app__wrapper app__bg">

    <div className="app__wrapper_info">

      <SubHeading title="Awards & Recognition" />

      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels-grid ">
        {data.awards.map((award,index) =>(<LaurelsItem key={index} award={award} />))

        }
      </div>
    </div>

    <div className="app__laurels-img-container app__wrapper_img">
      <img src={images.laurels} alt="laurels-img" />
    </div>
  </div>
);

export default Laurels;
