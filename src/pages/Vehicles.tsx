
import React, { useState } from 'react';
import StatusBar from '../components/ui-components/StatusBar';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const Vehicles: React.FC = () => {
  const navigate = useNavigate();
  const [registrationId, setRegistrationId] = useState('');
  
  const vehicles = [
    {
      id: 1,
      name: 'Baleno',
      registrationNumber: 'MH 04 CD 1234',
      regId: '1421451223',
      image: '/lovable-uploads/a295580e-a693-46f1-babe-a3c8b0722977.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto">
      <StatusBar />
      <Header 
        userName="Kamal" 
        location="Mumbai" 
        state="Maharashtra" 
      />
      
      <div className="px-4 py-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex">
              <div className="flex-1">
                <h2 className="text-lg font-medium">{vehicle.name}</h2>
                <p className="text-service-gray">{vehicle.registrationNumber}</p>
                <p className="text-sm text-service-gray">Reg ID: {vehicle.regId}</p>
                
                <div className="flex space-x-2 mt-4">
                  <Button 
                    className="flex-1 bg-service-blue hover:bg-blue-700 text-sm"
                    onClick={() => navigate('/service/car-service')}
                  >
                    BOOK A SERVICE
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 text-red-500 border-red-500 hover:bg-red-50 text-sm"
                  >
                    DELETE
                  </Button>
                </div>
              </div>
              {vehicle.image && (
                <div className="ml-4 w-24">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        
        <div className="mt-6">
          <h3 className="text-service-gray mb-3">Add Another Car</h3>
          <div className="flex space-x-2">
            <Input 
              placeholder="Registration ID..." 
              className="flex-1"
              value={registrationId}
              onChange={(e) => setRegistrationId(e.target.value)}
            />
            <Button 
              variant="outline" 
              className="border-service-blue text-service-blue"
            >
              ADD CAR
            </Button>
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Vehicles;
