
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/services/stripeService';

interface PaymentProviderProps {
  children: React.ReactNode;
}

const PaymentProvider: React.FC<PaymentProviderProps> = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
};

export default PaymentProvider;
