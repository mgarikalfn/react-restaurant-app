import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus__overlay flex__center'>
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="about_spoon" />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a alias officia, ipsum amet iusto harum eligendi quia nisi porro..</p>
        <button className='custom__button' type='button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spon" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nihil accusamus omnis quam culpa ut quasi architecto? Perferendis, illo recusandae.</p>
        <button className='custom__button' type='button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
