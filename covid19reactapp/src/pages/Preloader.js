import React, { useEffect, useState } from 'react';
import '../css/Preloader.css'; // Import CSS if needed

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200); // Adjust the delay if needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      {!isLoaded && (
        <div id="loaded" style={{ height: '100vh', width: '100vw' }}>
          <div id="loader"></div>
        </div>
      )}
      {isLoaded && (
        <div id="myDiv" className="animate-bottom">
          {/* Your main content here */}
        </div>
      )}
    </div>
  );
};

export default Preloader;
