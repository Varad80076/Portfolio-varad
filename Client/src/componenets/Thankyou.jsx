import React, { useEffect, useState } from 'react';

function ThankYouPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex  items-center justify-center  min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className={`text-center transform transition duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-bounce">
          Thank You!
        </h1>
        <p className="text-lg md:text-xl text-white">
          We appreciate your response. We'll get back to you soon!
        </p>
      </div>
    </div>
  );
}

export default ThankYouPage;
