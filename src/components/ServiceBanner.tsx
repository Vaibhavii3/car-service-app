
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ServiceBanner: React.FC = () => {
  const [activeDot, setActiveDot] = useState(0);
  
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 5);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-4 my-3 relative overflow-hidden rounded-xl animate-fade-in">
      <div className="relative h-48 bg-service-dark flex items-center justify-between p-6">
        {/* Background overlay image */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-fade-in" 
          style={{ 
            backgroundImage: `url('/lovable-uploads/d942b7ee-f1ca-401f-99b0-c4fbf0550a66.png')`,
            opacity: 0.2 
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-[60%]">
          <div className="text-white">
            <h2 className="text-xl font-bold mb-1">BASIC SERVICE</h2>
            <h2 className="text-2xl font-bold text-service-red mb-1">MAINTENANCE</h2>
            <p className="text-sm font-medium mb-1">— START FROM</p>
            <p className="text-xl font-bold text-white mb-4">₹199</p>
            <Button 
              className="bg-service-red hover:bg-red-600 text-white px-6 transition-all duration-300 transform hover:scale-105"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
        
        {/* Service icons */}
        <div className="relative z-10 flex flex-col space-y-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              {/* Icon placeholder */}
              <div className={`w-6 h-6 rounded-full ${
                i === 0 ? 'bg-red-500' : 
                i === 1 ? 'bg-service-blue' : 
                i === 2 ? 'bg-green-500' : 
                'bg-yellow-500'
              }`}></div>
            </div>
          ))}
        </div>
        
        {/* Dots indicator */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`banner-dot ${i === activeDot ? 'banner-dot-active' : 'banner-dot-inactive'}`}
              onClick={() => setActiveDot(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
