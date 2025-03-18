
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative mx-4 my-3 animate-fade-in transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-service-gray" />
      </div>
      <input
        type="text"
        placeholder="Search for a car service"
        className="search-input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchBar;
