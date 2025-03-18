
import React, { useState } from 'react';
import StatusBar from '../components/ui-components/StatusBar';
import BackButton from '../components/BackButton';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(2); // Default to 9:00-9:30am (index 2)
  
  const dates = [
    { day: 'Today', date: '21' },
    { day: 'Tomorrow', date: '22' },
    { day: 'Wed', date: '23' },
    { day: 'Thu', date: '24' },
  ];
  
  const timeSlots = [
    '8:00 - 8:30am',
    '8:30 - 9:00am',
    '9:00 - 9:30am',
    '9:30 - 10:00am',
    '10:00 - 10:30am',
    '10:30 - 11:00am',
    '11:00 - 11:30am',
    '11:30 - 12:00pm',
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto pb-20">
      <StatusBar />
      <BackButton title="Checkout" />
      
      {!address ? (
        <div className="bg-white rounded-lg mx-4 p-4 my-4 flex items-center">
          <div className="w-8 h-8 bg-service-blue rounded-full flex items-center justify-center mr-3">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <Button 
              variant="outline" 
              className="w-full justify-start border-2 border-service-blue text-service-blue hover:bg-blue-50"
              onClick={() => setAddress("B/62, Bhaweshwar Darshan, Altamount Road, Peddar Road, Mumbai, Maharashtra - 400002")}
            >
              Add Pick-up Address
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg mx-4 p-4 my-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-service-blue rounded-full flex items-center justify-center mr-3 mt-1">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium">Pick-up Address</p>
                <p className="text-sm text-service-gray mt-1">{address}</p>
              </div>
            </div>
            <button className="text-service-blue text-sm font-medium" onClick={() => setAddress(null)}>
              CHANGE
            </button>
          </div>
        </div>
      )}
      
      <div className="mx-4 mt-6">
        <h2 className="text-lg font-medium mb-3">When do you want the service?</h2>
        <h3 className="font-medium mb-2">Select Date</h3>
        <div className="flex space-x-3 mb-6">
          {dates.map((date, idx) => (
            <button
              key={idx}
              className={`flex-1 py-2 px-3 rounded-lg border ${
                selectedDate === idx 
                  ? 'bg-service-blue text-white border-service-blue' 
                  : 'bg-white text-service-dark border-gray-200'
              }`}
              onClick={() => setSelectedDate(idx)}
            >
              <p className="font-medium">{date.day}</p>
              <p className="text-lg">{date.date}</p>
            </button>
          ))}
        </div>
        
        <h3 className="font-medium mb-2">Select Pick-up Time Slot</h3>
        <div className="grid grid-cols-2 gap-3">
          {timeSlots.map((time, idx) => (
            <button
              key={idx}
              className={`py-3 px-4 rounded-lg border ${
                selectedTime === idx 
                  ? 'bg-service-blue text-white border-service-blue' 
                  : 'bg-white text-service-dark border-gray-200'
              }`}
              onClick={() => setSelectedTime(idx)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
        <div>
          <p className="text-sm font-medium">Basic Service</p>
          <p className="text-lg font-bold">Rs. 2,599</p>
        </div>
        <Button 
          className={`${address ? 'bg-service-blue hover:bg-blue-700' : 'bg-gray-300'} px-6`}
          onClick={() => address && navigate('/payment')}
          disabled={!address}
        >
          PROCEED
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
