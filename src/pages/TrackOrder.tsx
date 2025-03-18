
import React from 'react';
import StatusBar from '../components/ui-components/StatusBar';
import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';
import { Check, Circle } from 'lucide-react';

const TrackOrder: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Status steps data
  const statusSteps = [
    { 
      id: 'parts', 
      title: 'New Parts Arrived', 
      completed: true, 
      date: '21st Sept, 2021 | 11:02', 
      current: false 
    },
    { 
      id: 'installation', 
      title: 'Installation', 
      completed: false, 
      date: 'In Progress', 
      current: true 
    },
    { 
      id: 'inspection', 
      title: 'Final Inspection', 
      completed: false, 
      date: '', 
      current: false 
    },
    { 
      id: 'ready', 
      title: 'Ready for Drop', 
      completed: false, 
      date: '', 
      current: false 
    },
    { 
      id: 'dropped', 
      title: 'Dropped', 
      completed: false, 
      date: '', 
      current: false 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      <StatusBar />
      <BackButton title="Track Order" />
      
      <div className="bg-white rounded-lg mx-4 p-4 mb-4 shadow-sm">
        <h2 className="text-lg font-semibold">Basic Service</h2>
        <p className="text-service-gray text-sm">Booking ID: {id || '123456789'}</p>
        <h3 className="text-md font-medium mt-2">General Motors</h3>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        
        <div className="grid grid-cols-2 mt-3">
          <div>
            <p className="text-xs text-service-gray uppercase">DATE</p>
            <p className="text-sm">21st Sept 2021, Monday</p>
          </div>
          <div>
            <p className="text-xs text-service-gray uppercase">PICK-UP TIME</p>
            <p className="text-sm">9:00-9:30am</p>
          </div>
        </div>
        
        <p className="mt-3 text-sm">
          <span className="text-service-gray">Estimated Completion:</span> Tomorrow, 12:30pm
        </p>
      </div>
      
      <div className="relative pl-8 ml-8">
        {statusSteps.map((step, index) => (
          <div key={step.id} className="mb-8 relative">
            {/* Vertical line */}
            {index < statusSteps.length - 1 && (
              <div className={`absolute left-[-24px] top-6 w-0.5 h-16 ${
                step.completed ? 'bg-service-blue' : 
                step.current ? 'bg-service-blue' : 'bg-gray-300'
              }`}></div>
            )}
            
            {/* Step indicator */}
            <div className={`absolute left-[-30px] top-0 flex items-center justify-center w-12 h-12 rounded-full 
              ${step.completed ? 'bg-service-blue text-white' : 
                step.current ? 'bg-service-blue text-white border-4 border-blue-100' : 
                'bg-white border-2 border-gray-300'}`}
            >
              {step.completed ? (
                <Check className="h-6 w-6" />
              ) : step.current ? (
                <div className="w-3 h-3 bg-white rounded-full"></div>
              ) : (
                <Circle className="h-6 w-6 text-gray-300" />
              )}
            </div>
            
            {/* Step content */}
            <div className="ml-4">
              <h3 className={`font-medium ${
                step.completed || step.current ? 'text-service-dark' : 'text-gray-500'
              }`}>{step.title}</h3>
              <p className={`text-sm ${
                step.completed || step.current ? 'text-service-gray' : 'text-gray-400'
              }`}>{step.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackOrder;
