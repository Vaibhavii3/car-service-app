
import React from 'react';
import { ChevronDown, UserRound } from 'lucide-react';

interface HeaderProps {
  userName: string;
  location: string;
  state: string;
}

const Header: React.FC<HeaderProps> = ({ userName, location, state }) => {
  return (
    <div className="flex justify-between items-start px-4 pt-2 pb-4 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-service-dark">Hello {userName}</h1>
        <div className="flex items-center text-service-gray mt-1">
          <span>{location}, {state}</span>
          <ChevronDown className="ml-1 w-4 h-4" />
        </div>
      </div>
      <div className="rounded-full bg-gray-200 w-10 h-10 overflow-hidden">
        <UserRound className="w-full h-full text-service-gray p-2" />
      </div>
    </div>
  );
};

export default Header;
