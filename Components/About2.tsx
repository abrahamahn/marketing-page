import React from 'react'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components';

import styles from '@/styles/pages/home/About2.module.css'

export default function About2() {
  const waveAnimation = keyframes`
    0% {
      d: path("M0 75 Q50 125 100 75 Q150 25 200 75 L200 150 L0 150 Z");
    }
    50% {
      d: path("M0 75 Q50 25 100 75 Q150 125 200 75 L200 150 L0 150 Z");
    }
    90% {
      d: path("M0 75 Q50 125 100 75 Q150 25 200 75 L200 150 L0 150 Z");
    }
  `;

  const Wave = styled.svg`
    width: 100%;
    height: 500px;
    overflow: hideen;

    path {
      fill: skyblue;
      animation: ${waveAnimation} 10s linear infinite;
    }
  `;

  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.motion_container}>
          <Wave className={styles.motion_lines} viewBox="0 0 200 150">
            <path d="M0 75 Q50 125 100 75 Q150 25 200 75 L200 150 L0 150 Z" />
          </Wave>
        </div>
        <div className={styles.about_text}>
          <h2 className={styles.about_title}>See the difference</h2>
          <p className={styles.about_description}>Break free from creative constraints with our all-in-one platform. From idea to finished track, our powerful tools and user-friendly interface make music production effortless and fun.</p>
        </div>
        <div className={styles.button}>
          <button className={styles.about_button_text}>
            <p>Explore Tracks</p>
          </button>
        </div>
      </div>
    </>
  );
};