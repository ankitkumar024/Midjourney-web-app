import './hero.css'
import backgroundimg from '../../assets/backgroundimg.png'
import circle from '../../assets/circle.png'
import star from '../../assets/star.svg'
import media from '../../assets/media.png'
import permutation from '../../assets/permutation.png'
import square from '../../assets/square.png'
import data from '../../assets/data.png'
import hand_point_up from '../../assets/hand_point_up.png'
import arrow from '../../assets/arrow.png'
import line from '../../assets/line.png'
import React from 'react'

const hero = () => {
  return (
    <div className='bgImg' style={{ backgroundimg: `url(${backgroundimg})` }}>

      <div className='hero_left'>
        <span className='hero_left_span'><img className='circle' src={circle} alt="circle" /> Introducing Image Feature</span>
        <h1 className='hero_left_head'>Imagine with Serendipity</h1>
        <p className='hero_left_para'>Discover a vibrant community of creators on Serendipity Connect with thousands of like-minded individuals on Discord or the web and unleash your imagination through collaborative storytelling. From vivid worlds to unforettable characters, bring your short text descriptions to life in new and exciting ways. Join serendipity today ans embark on a journey of endless creativity!</p>

        <div className='btn'>
          <button className='btn_generate_images'><img className='star' src={star} alt="star" /> Generate Images</button>
          <div className="glow1"></div>
        </div>
        <div className="glow2"></div>
      </div>

      <div className='hero_right'>
        <h3 className='hero_right_head'>Updates</h3>

        <div className='hero_cards'>
          <div className='card'>
            <img className='hero_card_img' src={media} alt="media"/>
            <div className='hero_card_text'>
              <p className='hero_card_title'>Upload Image</p>
              <span className='hero_card_subtitle'>New Feature - Apr 30, 2023</span>
            </div>
          </div>
          <div className='card'>
            <img className='hero_card_img' src={permutation} alt="permutation" />
            <div className='hero_card_text'>
              <p className='hero_card_title'>Permutation</p>
              <span className='hero_card_subtitle'>New Feature - Apr 30, 2023</span>
            </div>
          </div>
          <div className='card'>
            <img className='hero_card_img' src={square} alt="square" />
            <div className='hero_card_text'>
              <p className='hero_card_title'>Status Page</p>
              <span className='hero_card_subtitle'>New Feature - Apr 21, 2023</span>
            </div>
          </div>
          <div className='card'>
            <img className='hero_card_img' src={data} alt="data" />
            <div className='hero_card_text'>
              <p className='hero_card_title'>V2.1 Release</p>
              <span className='hero_card_subtitle'>New Feature - Apr 16, 2023</span>
            </div>
          </div>
          <div className='card'>
            <img className='hero_card_img' src={hand_point_up} alt="hand_point_up" />
            <div className='hero_card_text'>
              <p className='hero_card_title'>Linked Roles</p>
              <span className='hero_card_subtitle'>New Feature - Apr 15, 2023</span>
            </div>
          </div>

          <div className="hero_right_btn">
            <button className='explore_btn'><img src={arrow} alt="arrow" />Explore Now</button>
          </div>

          <div className="hero_right_card_line">
            <img className='line' src={line} alt="line" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default hero