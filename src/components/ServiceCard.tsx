
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, onClick }) => {
  return (
    <div 
      className="service-card animate-fade-in-up"
      onClick={onClick}
    >
      <div className="service-card-icon">
        <Icon size={24} />
      </div>
      <span className="text-xs font-medium text-center leading-tight">{title}</span>
    </div>
  );
};

export default ServiceCard;
