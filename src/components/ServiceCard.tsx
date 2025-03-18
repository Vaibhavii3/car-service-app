
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
  path?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, onClick, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (path) {
      navigate(path);
    }
  };

  return (
    <div 
      className="service-card animate-fade-in-up"
      onClick={handleClick}
    >
      <div className="service-card-icon">
        <Icon size={24} />
      </div>
      <span className="text-xs font-medium text-center leading-tight">{title}</span>
    </div>
  );
};

export default ServiceCard;
