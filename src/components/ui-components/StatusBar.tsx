
import React from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';

const StatusBar: React.FC = () => {
  // Get current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="flex justify-between items-center py-1 px-4 text-service-dark animate-fade-in">
      <div className="font-semibold">{getCurrentTime()}</div>
      <div className="flex items-center space-x-1">
        <Signal className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <Battery className="w-5 h-5" />
      </div>
    </div>
  );
};

export default StatusBar;
