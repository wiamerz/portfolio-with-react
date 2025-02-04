import React, { useState } from 'react';

const HoverCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
    setHasAnimated(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    setHasAnimated(false);
  };

  return (
    <div className="relative w-64 h-80">
      {/* Main Card */}
      <div 
        className="absolute inset-0 bg-white rounded-lg shadow-lg p-4"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="w-full h-40 bg-blue-200 rounded-md mb-4"></div>
        <h3 className="text-lg font-bold mb-2">Main Card Title</h3>
        <p className="text-gray-600">
          This is the main card content. Hover over this card to see the overlay animation.
        </p>
      </div>

      {/* Overlay Card */}
      <div 
        className={`absolute inset-0 bg-black/70 rounded-lg p-4 text-white
          transform transition-all duration-300 ease-in-out
          ${isHovered 
            ? 'opacity-100 translate-y-0' 
            : hasAnimated 
              ? 'opacity-0 translate-y-0' 
              : 'opacity-0 translate-y-full'
          }`}
      >
        <h3 className="text-lg font-bold mb-2">Overlay Content</h3>
        <p className="text-gray-200">
          This overlay slides up once and stays until you move your mouse away.
        </p>
      </div>
    </div>
  );
};

export default HoverCard;