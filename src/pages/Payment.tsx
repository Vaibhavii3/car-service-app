
import React, { useState } from 'react';
import StatusBar from '../components/ui-components/StatusBar';
import BackButton from '../components/BackButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('later');
  const [couponCode, setCouponCode] = useState('');
  
  const serviceDetails = {
    serviceTotal: 2499,
    convenienceCharges: 100,
    totalAmount: 2599,
  };
  
  const paymentMethods = [
    { id: 'paytm', name: 'PayTM', logo: '/lovable-uploads/8c6712e7-ab76-467c-8233-e0b605c22682.png', description: 'Pay Via PayTM' },
    { id: 'gpay', name: 'Google Pay', logo: '/lovable-uploads/7f3e2822-7697-4800-9a93-7a74b1a67828.png', description: 'Pay Via Google Pay' },
    { id: 'card', name: 'Card', logo: '/lovable-uploads/eae65790-eb3c-4147-b85f-ec52a70b17db.png', description: 'Pay Via Debit/Credit Card' },
    { id: 'later', name: 'Later', logo: '/lovable-uploads/243f8655-ead0-4dca-bee1-c6baaa6b4c49.png', description: 'Pay after the service' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto pb-20">
      <StatusBar />
      <BackButton title="Payment" />
      
      <div className="bg-white px-4 py-3">
        <div className="flex justify-between items-center py-2">
          <span>Service Total</span>
          <span>Rs. {serviceDetails.serviceTotal}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span>Convenience Charges</span>
          <span>Rs. {serviceDetails.convenienceCharges}</span>
        </div>
        <div className="border-t border-gray-200 my-2"></div>
        <div className="flex justify-between items-center py-2 font-medium">
          <span>Service Amount Payable</span>
          <span>Rs. {serviceDetails.totalAmount}</span>
        </div>
      </div>
      
      <div className="bg-white mt-4 px-4 py-3">
        <div className="flex justify-between items-center">
          <span className="font-medium">Apply Coupon</span>
          <div className="flex">
            <Input
              placeholder="Coupon Code"
              className="mr-2 h-10"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button variant="outline" className="text-service-blue border-service-blue">
              APPLY
            </Button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 mt-4 pt-2 px-4 py-3 bg-white">
        <div className="flex justify-between items-center py-2 font-medium">
          <span>Amount Payable</span>
          <span>Rs. {serviceDetails.totalAmount}</span>
        </div>
      </div>
      
      <div className="mt-4 px-4">
        <h2 className="font-medium mb-3">Pay Using</h2>
        {paymentMethods.map((method) => (
          <div 
            key={method.id} 
            className="flex items-center bg-white p-4 rounded-lg mb-3 cursor-pointer"
            onClick={() => setPaymentMethod(method.id)}
          >
            <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3">
              {paymentMethod === method.id && (
                <div className="w-3 h-3 rounded-full bg-service-blue"></div>
              )}
            </div>
            <div className="w-8 h-8 mr-3">
              <img src={method.logo} alt={method.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-sm">{method.description}</span>
          </div>
        ))}
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
        <div>
          <p className="text-sm font-medium">Basic Service</p>
          <p className="text-lg font-bold">Rs. {serviceDetails.totalAmount}</p>
        </div>
        <Button 
          className="bg-service-blue hover:bg-blue-700 px-6"
          onClick={() => navigate('/order-success')}
        >
          PAY
        </Button>
      </div>
    </div>
  );
};

export default Payment;
