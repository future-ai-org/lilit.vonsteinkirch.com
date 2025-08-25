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

          <div className="careers-apply-section">
            <h2 className="values-title title-glow careers-subtitle">
              <span className="values-title-text">how to apply</span>
              <div className="values-title-glow title-bg" />
            </h2>
            <div className="values-card-text">
              <p>
                to apply for either position, please send an introduction letter (in plain text) to{' '}
                <span className="careers-highlight-wrapper">
                  <a href="mailto:hello@lilit.ai" className="careers-highlight-link">
                    hello@lilit.ai
                  </a>
                  <div className="values-title-glow title-bg overlay-fill" />
                </span> with the following:
              </p>
              <ul className="careers-list">
                <li>your relevant experience and expertise</li>
                <li>links to your online presence (personal website, youtube, github, etc.)</li>
                <li>why you&apos;re interested in joining our mission and which of our values resonate most with you</li>
                <li>your birth chart or big 3, and anything you think is interesting about your avatar</li>
              </ul>
              <p className="careers-compensation-text">
                we look forward to connecting with you and hopefully welcoming you to our team!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
