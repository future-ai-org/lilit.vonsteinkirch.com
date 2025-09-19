'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/global.css';
import AnimatedStars from './components/AnimatedStars';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <main className="home-container">
      <AnimatedStars />
      <div className="home-hero-container">
        <div className="home-logo-group">
          <div className="home-logo-wrapper">
            <Image
              src="/logo.svg"
              alt="LILIT Logo"
              width={80}
              height={80}
              priority
              className="home-logo-image neon-crystal logo-glow"
            />
          </div>
        </div>
        <h1 className="home-title-text"><a href="https://youtube.com/playlist?list=PLwz2N11mD_-FK1NmVx3ZCvYZqV0IraEMz&si=SMHuqFLTk4Hfl9OX" target="_blank">LILIT</h1>
        <h2 className="home-subtitle-text">coming privately to shake your world like never before</h2>
        <p className="home-tagline">
          (we&apos;re building a new type of prediction platform, and it&apos;s absolutely awesome)
        </p>
        <div className="home-cta-container">
          <Link
            href="/waitlist"
            className="home-waitlist-link"
          >
            become one of our first private members  →
          </Link>
        </div>
      </div>

    </main>
  );
} 
