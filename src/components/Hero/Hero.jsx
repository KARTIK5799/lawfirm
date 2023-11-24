
import React from 'react';
import Navbar from '../NavBar/Navbar';
import HeroLeft from './HeroLeft/HeroLeft';
import HeroRight from './HeroRight/HeroRight';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <>
      <div>
        <Navbar />
        <div className={styles.heroSection}>
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </>
  );
}
