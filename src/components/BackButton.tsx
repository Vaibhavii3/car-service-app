
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  title: string;
}

const BackButton: React.FC<BackButtonProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center p-4 bg-white">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center"
      >
        <ArrowLeft className="h-5 w-5 text-service-dark mr-2" />
        <span className="text-lg font-medium text-service-dark">{title}</span>
      </button>
    </div>
  );
};

export default BackButton;
