import React from 'react';
import Image from 'next/image';
import styles from '@/styles/pages/home/Hero.module.css';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();

  const handleTryFree = () => {
    router.push('/accounts/verify');
  }

  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_image_container}>
        <Image className={styles.hero_image} src="/images/hero-image.jpg" alt="hero image" width="2000" height="500"/>
      </div>
      <div className={styles.hero_text_container}>
        <div className={styles.hero_text}>
          <h1 className={styles.hero_title}>Music for artists.</h1>
          <p className={styles.hero_description}>
            Elevate your music game with our all-in-one beat studio - find the perfect sound, create your masterpiece, and share it with the world.
          </p>
        </div>
        <div className={styles.hero_buttons}>
          <button>Explore</button>
          <button onClick={handleTryFree}>Try Free</button>
        </div>
      </div>
    </div>
  );
};