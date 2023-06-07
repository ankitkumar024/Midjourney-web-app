import React from 'react';
import './cards.css';

import image from '../../assets/image.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import card_icon from '../../assets/card_icon.png';
import card_icon1 from '../../assets/card_icon1.png';
import card_icon2 from '../../assets/card_icon2.png';
import card_btn_icon from '../../assets/card_btn_icon.png'
import card_btn_icon1 from '../../assets/card_btn_icon1.png'
import card_btn_icon2 from '../../assets/card_btn_icon2.png'

const Cards = () => {
  return (
    <div className='cards'>
      <div className='three_cards_container'>
        <div className='card_container'>

          <img className='card_img' src={image} alt="image" />
          <div className='card_content'>
            <img className='card_icon' src={card_icon} alt="card_icon" />
            <h2 className="card_main_heading">Using Discord</h2>
            <h3 className="card_heading">Mastering the Art of Prompt Writing</h3>
            <p className="card_paragraph">Prompt writing involves crafting clear and engaging prompts, while using images to create a visual representation of the idea or... </p>
            <div className='card_btn'><img className='card_btn_icon' src={card_btn_icon} alt="card_btn_icon" />Join Discord</div>
            <div className='blur_rectangle'></div>
          </div>
        </div>

        <div className='card_container'>

          <img className='card_img' src={image1} alt="image1" />
          <div className='card_content'>
            <img className='card_icon' src={card_icon1} alt="card_icon1" />
            <h2 className="card_main_heading">Getting Started</h2>
            <h3 className="card_heading">Streamlining Collaborative Workflows</h3>
            <p className="card_paragraph">Use the Midjourney Bot on Discord to effortlessly generate designs and artworks for your project. Simply enter a command...</p>
            <div className='card_btn'><img className='card_btn_icon' src={card_btn_icon1} alt="card_btn_icon1" />Explore Now</div>
            <div className='blur_rectangle'></div>
          </div>
        </div>

        <div className='card_container'>

          <img className='card_img' src={image2} alt="image2" />

          <div className='card_content'>
            <img className='card_icon' src={card_icon2} alt="card_icon2" />
            <h2 className="card_main_heading">User Guide</h2>
            <h3 className="card_heading">Unraveling the Mystery of Version</h3>
            <p className="card_paragraph">Explore key concepts like versions and parameters when using Midjourney. Versions refer to different variations of a design...</p>
            <div className='card_btn'><img className='card_btn_icon' src={card_btn_icon2} alt="card_btn_icon2" />View Documents</div>
            <div className='blur_rectangle'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
