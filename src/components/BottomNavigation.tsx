
import React, { useState } from 'react';
import { Home, Car, FileText } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const tabItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'vehicles', icon: Car, label: 'Vehicles' },
    { id: 'records', icon: FileText, label: 'Records' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 px-4 z-50 animate-fade-in">
      {tabItems.map((item) => (
        <button
          key={item.id}
          className={`flex flex-col items-center py-1 px-3 ${activeTab === item.id ? 'bottom-nav-active' : ''}`}
          onClick={() => handleTabChange(item.id)}
        >
          <item.icon className="bottom-nav-icon w-6 h-6" />
          <span className="bottom-nav-text">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavigation;
