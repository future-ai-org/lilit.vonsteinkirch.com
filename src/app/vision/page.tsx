'use client';

import AnimatedStars from '../components/AnimatedStars';
import Link from 'next/link';

export default function VisionPage() {
  return (
    <div className="values-page">
      <AnimatedStars />
      <div className="values-container">
        <h1 className="values-title title-glow vision-title">
          <span className="values-title-text">ancient wisdom meets the AI era</span>
          <div className="values-title-glow title-bg" />
        </h1>
        <div className="values-card vision-card">
          <p className="values-card-text vision-card-text">
            for millennia, scientists have studied the stars in an effort to comprehend reality and foresee the future. now, for the first time, 
            a rigorous language has been invented, and aided by artificial intelligence, we are beginning to truly grasp their nature and significance.
            <br /><br />
            our protocol integrates real-time celestial pattern analysis with aggregated data from multiple sources to deliver actionable insights for 
            personal growth, decision-making, social compatibility, and financial planning — decentralized and crypto-native by design.
            <br /><br />
            but you don&apos;t need to worry about the science behind our groundbreaking technology — we&apos;ve wrapped that wisdom in an intuitive, safe, 
            and user-friendly platform, so you can simply sit back and enjoy your new magical powers. 
            <br /><br />
            (privately available now to a select group of anons)
          </p>
          
          <div className="vision-cta-container">
            <Link href="/careers" className="vision-cta-link title-glow">
              join our spaceship →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
