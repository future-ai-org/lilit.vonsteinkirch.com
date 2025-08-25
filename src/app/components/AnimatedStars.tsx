import React from 'react';

const AnimatedStars: React.FC = () => {
  const NUM_STARS = 22;
  const starSizes = ['12px', '16px', '20px', '24px', '28px', '32px', '36px', '40px'];
  
  const getRandomPositionInQuadrant = (quadrant: number) => {
    // Quadrant layout:
    // 0: top-left    1: top-right
    // 2: bottom-left 3: bottom-right
    const isLeft = quadrant % 2 === 0;
    const isTop = quadrant < 2;
    
    // Keep stars in the outer 30% of their quadrant
    const left = isLeft 
      ? `${Math.random() * 30}%` 
      : `${70 + Math.random() * 30}%`;
    const top = isTop 
      ? `${Math.random() * 30}%` 
      : `${70 + Math.random() * 30}%`;
    
    return { left, top };
  };
  
  const STARS_PER_QUADRANT = Math.ceil(NUM_STARS / 4);
  const positions = Array.from({ length: NUM_STARS }, (_, index) => {
    const quadrant = Math.floor(index / STARS_PER_QUADRANT);
    return getRandomPositionInQuadrant(quadrant);
  });
  
  return (
    <div className="stars-container">
      {positions.map((position, index) => (
        <div
          key={index}
          className="animated-star animate-star"
          style={{
            ['--left' as any]: position.left,
            ['--top' as any]: position.top,
            ['--delay' as any]: `${index * 1.5}s`,
            ['--size' as any]: starSizes[index % starSizes.length],
          }}
        >
          ★
        </div>
      ))}
    </div>
  );
};

export default AnimatedStars;
