
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
    { title: 'Car Service', icon: Car, path: '/service/car-service' },
    { title: 'Tyres & Wheel Care', icon: CircleDashed, path: '/service/tyres' },
    { title: 'Denting & Painting', icon: Hammer, path: '/service/denting' },
    { title: 'AC Service & Repair', icon: Droplet, path: '/service/ac' },
    { title: 'Car Spa & Cleaning', icon: Car, path: '/service/spa' },
    { title: 'Batteries', icon: Battery, path: '/service/batteries' },
    { title: 'Insurance Claims', icon: Shield, path: '/service/insurance' },
    { title: 'Windshield & Lights', icon: LayoutGrid, path: '/service/windshield' },
    { title: 'Clutch & Brakes', icon: Wrench, path: '/service/clutch' },
    { title: 'Dryclean', icon: Car, path: '/service/dryclean' },
    { title: 'Car Wash', icon: Droplet, path: '/service/wash' },
    { title: 'Oiling', icon: Fuel, path: '/service/oiling' }, 
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
            path={service.path}
            onClick={() => console.log(`Selected service: ${service.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
