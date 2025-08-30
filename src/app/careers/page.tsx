'use client';

import AnimatedStars from '../components/AnimatedStars';

export default function JobsPage() {
  return (
    <div className="values-page">
      <AnimatedStars />
      <div className="values-container">
        <h1 className="values-title title-glow careers-title">
          <span className="values-title-text">be part of our stellar team</span>
          <div className="values-title-glow title-bg" />
        </h1>
        <div className="careers-sections">

          <div className="values-card">
            <h2 className="values-card-title">researcher-software-engineers</h2>
            <p className="values-card-text">
              we are looking for talented humans who can bridge the gap between research and software development. 
              this role combines scientific analysis with implementation of our pioneering technology ( 
              <a 
                href="https://www.youtube.com/watch?v=7s9C92Pkcc0&t=14s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="careers-highlight-link"
              >
                 and it&apos;s a lot of fun
              </a>
              ). this is an ongoing opportunity.
            </p> 
          </div>
        </div>
      </div>
    </div>
  );
} 
