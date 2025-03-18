
import React from 'react';
import StatusBar from '../components/ui-components/StatusBar';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto flex flex-col">
      <StatusBar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-32 h-56">
            <div className="absolute left-0 top-0 w-16 h-32 border-2 border-service-blue rounded-xl flex items-center justify-center">
              <div className="w-10 h-10 bg-service-blue rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
            </div>
            <img 
              src="/lovable-uploads/97986c95-173a-4602-8922-c9f1f2f796df.png" 
              alt="Success illustration" 
              className="absolute right-0 h-56 object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-xl font-bold text-service-blue mb-2">Order was placed Successfully!</h1>
        <p className="text-service-gray mb-12 max-w-xs">
          We've received your order and our team is working to get it to you as quick and safe as possible.
        </p>
        
        <Button 
          className="bg-service-blue hover:bg-blue-700 w-full py-6"
          onClick={() => navigate('/')}
        >
          GO TO HOME
        </Button>
      </div>
    </div>
  );
};

export default OrderSuccess;
