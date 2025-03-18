
import React, { useEffect, useState } from 'react';
import StatusBar from '../components/ui-components/StatusBar';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ServiceBanner from '../components/ServiceBanner';
import ServiceGrid from '../components/ServiceGrid';
import BottomNavigation from '../components/BottomNavigation';

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-service-blue/30 rounded-full mb-4"></div>
          <div className="h-2 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto overflow-hidden">
      {/* Mobile frame wrapper */}
      <div className="relative w-full h-full flex flex-col animate-fade-in">
        {/* Status Bar */}
        <StatusBar />
        
        {/* Header with User Info */}
        <Header 
          userName="Kamal" 
          location="Mumbai" 
          state="Maharashtra" 
        />
        
        {/* Search Bar */}
        <SearchBar />
        
        {/* Service Banner */}
        <ServiceBanner />
        
        {/* Service Grid */}
        <ServiceGrid />
        
        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Index;
