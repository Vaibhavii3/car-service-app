
import React, { useState } from 'react';
import { Home, Car, FileText } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const tabItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'vehicles', icon: Car, label: 'Vehicles', path: '/vehicles' },
    { id: 'records', icon: FileText, label: 'Records', path: '/records' },
  ];

  const handleTabChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 px-4 z-50 animate-fade-in">
      {tabItems.map((item) => (
        <button
          key={item.id}
          className={`flex flex-col items-center py-1 px-3 ${currentPath === item.path ? 'bottom-nav-active' : ''}`}
          onClick={() => handleTabChange(item.path)}
        >
          <item.icon className="bottom-nav-icon w-6 h-6" />
          <span className="bottom-nav-text">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavigation;
