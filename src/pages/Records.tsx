
import React, { useState } from 'react';
import StatusBar from '../components/ui-components/StatusBar';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const Records: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const upcomingBookings = [
    {
      id: '123456789',
      service: 'Basic Service',
      status: 'CONFIRMED',
      date: '21st Sept 2021, Monday',
      time: '9:00-9:30am',
      vendor: 'General Motors',
      rating: 4
    },
    {
      id: '123456790',
      service: 'Standard Service',
      status: 'ON GOING',
      date: '21st Sept 2021, Monday',
      time: '9:00-9:30am',
      vendor: 'General Motors',
      rating: 4
    }
  ];
  
  const pastBookings = [
    {
      id: '123456789',
      service: 'Basic Service',
      status: 'COMPLETED',
      date: '9th Jan 2021, Monday',
      vendor: 'General Motors',
      rating: 4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONFIRMED': return 'bg-green-100 text-green-800';
      case 'ON GOING': return 'bg-yellow-100 text-yellow-800';
      case 'COMPLETED': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto">
      <StatusBar />
      <Header 
        userName="Kamal" 
        location="Mumbai" 
        state="Maharashtra" 
      />
      
      <div className="px-4 pt-2 pb-24">
        <div className="flex border border-service-blue rounded-lg overflow-hidden mb-6">
          <button
            className={`flex-1 py-2 text-center ${activeTab === 'upcoming' ? 'bg-service-blue text-white' : 'bg-white text-service-blue'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            UPCOMING
          </button>
          <button
            className={`flex-1 py-2 text-center ${activeTab === 'past' ? 'bg-service-blue text-white' : 'bg-white text-service-blue'}`}
            onClick={() => setActiveTab('past')}
          >
            PAST
          </button>
        </div>
        
        {activeTab === 'upcoming' ? (
          <>
            {upcomingBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-medium">{booking.service}</h2>
                    <p className="text-service-gray text-sm">Booking ID: {booking.id}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>
                
                <h3 className="text-md font-medium mt-2">{booking.vendor}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < booking.rating ? 'text-yellow-300' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 mb-3">
                  <div>
                    <p className="text-xs text-service-gray uppercase">DATE</p>
                    <p className="text-sm">{booking.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-service-gray uppercase">PICK-UP TIME</p>
                    <p className="text-sm">{booking.time}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2 border-t border-gray-100 pt-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-service-blue text-service-blue hover:bg-blue-50"
                  >
                    CALL
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-red-500 text-red-500 hover:bg-red-50"
                  >
                    CANCEL
                  </Button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {pastBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-medium">{booking.service}</h2>
                    <p className="text-service-gray text-sm">Booking ID: {booking.id}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>
                
                <h3 className="text-md font-medium mt-2">{booking.vendor}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < booking.rating ? 'text-yellow-300' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <div className="mb-3">
                  <p className="text-xs text-service-gray uppercase">DATE</p>
                  <p className="text-sm">{booking.date}</p>
                </div>
                
                <div className="flex justify-center border-t border-gray-100 pt-3">
                  <Button 
                    className="bg-service-blue hover:bg-blue-700 px-8"
                    onClick={() => navigate('/service/car-service')}
                  >
                    BOOK AGAIN
                  </Button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Records;
