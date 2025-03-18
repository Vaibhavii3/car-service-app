
import React from 'react';
import StatusBar from '../components/ui-components/StatusBar';
import BackButton from '../components/BackButton';
import { Button } from '@/components/ui/button';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const services = [
    {
      id: 'basic',
      name: 'Basic Service',
      price: 2599,
      details: [
        'Every 5000 Kms/3 Months',
        'Takes 4 Hours',
        '1 Month Warranty',
        'Includes 9 Services'
      ],
      image: '/lovable-uploads/f7676c96-2567-4608-a1a5-6b60e5439501.png'
    },
    {
      id: 'standard',
      name: 'Standard Service',
      price: 3799,
      details: [
        'Every 10000 Kms/6 Months',
        'Takes 6 Hours',
        '1 Month Warranty',
        'Includes 15 Services'
      ],
      image: '/lovable-uploads/897a6622-d64d-4285-8181-e2d0f26f94e7.png'
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive Service',
      price: 5699,
      details: [
        'Every 20000 Kms/1 Year',
        'Takes 8 Hours',
        '1 Month Warranty',
        'Includes 20 Services'
      ],
      image: '/lovable-uploads/d66af29a-759b-4426-a2bb-91ae81beffda.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      <StatusBar />
      <BackButton title="Car Service" />

      {services.map((service) => (
        <Card key={service.id} className="mx-4 mb-4 overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <ul className="mt-2">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-start py-1">
                  <span className="text-service-gray mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-semibold">Rs. {service.price.toLocaleString()}</p>
              <Button 
                className="bg-service-blue hover:bg-blue-700" 
                onClick={() => navigate(`/basic-service`)}
              >
                ADD
              </Button>
            </div>
          </div>
          {service.image && (
            <div className="relative h-24 w-24 absolute top-4 right-4">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover rounded"
              />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ServiceDetails;
