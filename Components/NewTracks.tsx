import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/pages/home/NewTracks.module.css';

export default function NewTracks({ tracks }) {
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

  if (!tracks) {
    return null;
  }

  return (
    <div className={styles.newtracks_container}>
      <div className={styles.newtracks_title_container}>
        <h2 className={styles.newtracks_maintitle}>
          New Release
        </h2>
      </div>
      <div className={styles.newtracks_scroll_container}>
        <div 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={styles.newtracks}>
          {recentTracks.map((track) => (
            <div key={track.id} className={styles.newtracks_card}>
              <div className={styles.newtracks_image_container}>
                <Image className={styles.newtracks_image} src={`/images/artwork/${track.metadata.catalog}.jpg`} alt={track.metadata.title} width="100" height="100"/>
              </div>
              <div className={styles.newtracks_text}>
                <h3 className={styles.newtracks_title}>{track.metadata.title}</h3>
                <p className={styles.newtracks_description}>
                  {track.info.genre[1].maingenre}, {track.info.bpm}BPM, {track.info.key.note}{track.info.key.scale.substring(0,3)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};