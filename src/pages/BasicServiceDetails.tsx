
import React from 'react';
import StatusBar from '../components/ui-components/StatusBar';
import BackButton from '../components/BackButton';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Car, Shield, Clock, Truck } from 'lucide-react';
import { Check } from 'lucide-react';

const BasicServiceDetails: React.FC = () => {
  const navigate = useNavigate();
  
  const features = [
    { icon: Car, text: '4 Hrs Taken' },
    { icon: Shield, text: '1000 Kms or 1 Month Warranty' },
    { icon: Clock, text: 'Every 5000 Kms or 3 Months' },
    { icon: Truck, text: 'Free Pick-up or Drop' },
  ];
  
  const includedServices = [
    'Engine Oil Replacement',
    'Oil Filter Replacement',
    'Air Filter Cleaning',
    'Coolant Top up',
    'Wiper Fluid Replacement',
    'Battery Water Top up',
    'Heater/Spark Plugs Checking',
    'Car Wash',
    'Interior Vacuuming (Carpet & Seats)',
  ];
  
  const reviews = [
    {
      name: 'Gautaum Singh',
      rating: 5,
      comment: 'The Basic Service package is a good choice to keep normal things in check. Highly recommended!'
    },
    {
      name: 'Dhruv Kumar',
      rating: 4,
      comment: 'The Basic Service package is a good choice to keep normal things in check.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto pb-20">
      <StatusBar />
      <BackButton title="Basic Service" />
      
      <div className="bg-white p-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-service-blue">
              <feature.icon size={20} />
            </div>
            <span className="ml-3 text-service-dark">{feature.text}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 px-4">
        <h2 className="text-xl font-semibold mb-3">What's included?</h2>
        <div className="bg-white rounded p-4">
          {includedServices.map((service, index) => (
            <div key={index} className="flex items-center py-2 border-b border-gray-100 last:border-0">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 px-4">
        <h2 className="text-xl font-semibold mb-3">Customer Reviews</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-sm w-64 flex-shrink-0">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-300' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold mb-1">{review.name}</p>
                <p className="text-sm text-service-gray">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium">Basic Service</h3>
          <p className="text-lg font-bold">Rs. 2,599</p>
        </div>
        <Button 
          className="bg-service-blue hover:bg-blue-700 px-8" 
          onClick={() => navigate('/checkout')}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};

export default BasicServiceDetails;
