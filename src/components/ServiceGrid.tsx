
import React from 'react';
import ServiceCard from './ServiceCard';
import { 
  Battery, 
  Car, 
  Shield, 
  Wrench, 
  Droplet, 
  Hammer, 
  LayoutGrid, 
  CircleDashed,
  Fuel // Replacing Oil with Fuel which is available in lucide-react
} from 'lucide-react';

const ServiceGrid: React.FC = () => {
  // Define service data
  const services = [
    { title: 'Car Service', icon: Car },
    { title: 'Tyres & Wheel Care', icon: CircleDashed },
    { title: 'Denting & Painting', icon: Hammer },
    { title: 'AC Service & Repair', icon: Droplet },
    { title: 'Car Spa & Cleaning', icon: Car },
    { title: 'Batteries', icon: Battery },
    { title: 'Insurance Claims', icon: Shield },
    { title: 'Windshield & Lights', icon: LayoutGrid },
    { title: 'Clutch & Brakes', icon: Wrench },
    { title: 'Dryclean', icon: Car },
    { title: 'Car Wash', icon: Droplet },
    { title: 'Oiling', icon: Fuel }, // Updated from Oil to Fuel
  ];

  return (
    <div className="px-4 pb-20"> {/* Add padding at bottom for the nav bar */}
      <h2 className="text-xl font-semibold mb-4 text-service-dark">Select Service</h2>
      <div className="grid grid-cols-4 gap-3">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            onClick={() => console.log(`Selected service: ${service.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
