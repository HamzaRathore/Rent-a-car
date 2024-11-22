import React from 'react';

const ScrollingText = () => {
  return (
    <>
      {/* Fixed Scrolling Text */}
      <div className="w-full bg-gray-900 fixed top-0 left-0 z-40">
        <div className="overflow-hidden">
          <p className="text-white text-xl animate-marquee whitespace-nowrap">
            🚗 Rent Out Cars for 1 Week and Get 🔥 40% OFF on all rentals!
          </p>
        </div>
      </div>
    </>
  );
};

export default ScrollingText;
