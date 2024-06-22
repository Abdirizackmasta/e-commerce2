import React from "react";
import styles from './Hero.module.css'
import handIcon from "../Assets/hand_icon.png";
import ArrowIcon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={styles.hero_hand_icon}>
            <p>New</p>
            <img src={handIcon} alt="icon" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className={styles.hero_latest_btn}>
          <div>Latest Collection</div>
          <img src={ArrowIcon} alt="arrow-icon" />
        </div>
      </div>
      <div className={styles.hero_right}>
        <img src={hero_img} alt="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
