import React from 'react';
import Head from 'next/head';
import { Hero, NewTracks, About1, About2, About3, Testimonials, Pricing } from './Components';
import { Header, Footer } from './Layouts';

import styles from '@/styles/pages/home/Home.module.css';

function Home( { session, tracks }) {
  if (session) {
    router.push('/app');
    return null;
  } else {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          <Hero />
          <NewTracks tracks={tracks} />
          <About1 />
          <About2 />
          <About3 tracks={tracks} />
          <Testimonials />
          <Pricing />
          <Footer />
        </div>
      </main>
    </div>
  )}
};

export default Home;