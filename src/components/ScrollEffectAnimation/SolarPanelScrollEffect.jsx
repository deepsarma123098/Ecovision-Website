import React, { useEffect, useRef } from 'react';

const SolarPanelScrollEffect = () => {
  const panelRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const panel = panelRef.current;

      // Calculate the new position and rotation based on scroll position
      const maxScroll = 800; // Adjust this value based on your layout
      const translateY = Math.min(scrollPosition, maxScroll);
      const rotation = Math.min((scrollPosition / maxScroll) * 90, 90); // Rotate up to 90 degrees

      if (panel) {
        panel.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="relative h-screen bg-gray-200">
        <div
          ref={panelRef}
          className="absolute right-0 top-1/4 transform transition-transform duration-300"
          style={{
            transformOrigin: 'bottom right',
            width: '100px', // Adjust the width of the solar panel
            height: '50px', // Adjust the height of the solar panel
            backgroundColor: 'yellow', // Change to your solar panel color
            borderRadius: '5px',
          }}
        />
      </div>
      <div className="h-screen bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-5xl">Scroll Down to See the Effect</h1>
      </div>
      <div className="h-screen bg-gray-300 flex items-center justify-center">
        <h1 className="text-black text-5xl">Final Position</h1>
      </div>
    </div>
  );
};

export default SolarPanelScrollEffect;