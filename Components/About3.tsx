import React, { useState, useRef } from 'react';
import Image from 'next/image';

import styles from '@/styles/pages/home/About3.module.css';

export default function About3({tracks}) {
  const imageContainerRef = useRef(null);
  const [startX, setStartX] = useState(null);

  function handleMouseDown(event) {
    setStartX(event.clientX);
  }

  function handleMouseMove(event) {
    if (startX === null) {
      return;
    }

    const difference = startX - event.clientX;
    imageContainerRef.current.scrollLeft += difference;
    setStartX(event.clientX);
  }

  function handleMouseUp() {
    setStartX(null);
  }
  
  const recentTracks = tracks.slice(-5);
  function renderValue(value: string) {
    return value && value !== "n/a" && value !== "" ? value : null;
  };
  const recentTracks2 = tracks.slice(5, 10);
  function renderValue(value: string) {
    return value && value !== "n/a" && value !== "" ? value : null;
  };


  if (!tracks) {
    return null;
  }

  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.tracks_cards}>
          <div className={styles.tracks_container}>
            {recentTracks.map((track) => (
              <div key={track.id} className={styles.tracks}>
                <div className={styles.tracks_image_container}>
                  <Image className={styles.tracks_image} src={`/images/artwork/${track.metadata.catalog}.jpg`} alt={track.metadata.title} width="100" height="100"/>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.tracks_container2}>
            {recentTracks2.map((track) => (
              <div key={track.id} className={styles.tracks2}>
                <div className={styles.tracks_image_container}>
                  <Image className={styles.tracks_image} src={`/images/artwork/${track.metadata.catalog}.jpg`} alt={track.metadata.title} width="100" height="100"/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.about_text}>
          <h2 className={styles.about_title}>Curated to inspire</h2>
          <p className={styles.about_description}>Experience the ultimate music discovery platform curated by industry experts. Our daily updates and mood-based categories make it easy to find the perfect sound to match your vision.</p>
        </div>
        <div className={styles.about_button}>
          <button className={styles.about_button_text}>
            <p>Explore Selections</p>
          </button>
        </div>
      </div>
    </>
  );
};