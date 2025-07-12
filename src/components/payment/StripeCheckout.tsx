
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { initiatePayment } from '@/services/stripeService';

interface StripeCheckoutProps {
  amount: number;
  currency?: string;
  description?: string;
  onPaymentSuccess?: () => void;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({
  amount,
  currency = 'inr',
  description = 'Investment payment',
  onPaymentSuccess
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // This would typically get a payment intent from your backend
      const paymentData = await initiatePayment({
        amount,
        currency,
        description
      });

      // In a real app with a backend, you would use the clientSecret from your backend
      // For this demo, we'll simulate a successful payment
      
      // Simulate payment process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demonstration - in a real app you would confirm the payment with stripe
      // const result = await stripe.confirmCardPayment(paymentData.clientSecret, {
      //   payment_method: {
      //     card: elements.getElement(CardElement)!,
      //   }
      // });

      // Simulate successful payment
      toast({
        title: "Payment successful",
        description: `Your payment of ${(amount / 100).toFixed(2)} ${currency.toUpperCase()} has been processed.`,
      });

      if (onPaymentSuccess) {
        onPaymentSuccess();
      }
    } catch (error) {
      setError('An error occurred while processing your payment. Please try again.');
      toast({
        title: "Payment failed",
        description: "An error occurred while processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Payment Details</h3>
        <p className="text-sm text-gray-500">Enter your card details to complete the payment.</p>
      </div>
      
      <div className="border p-4 rounded-md">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#EF4444',
              },
            },
          }}
        />
      </div>
      
      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}
      
      <Button 
        type="submit" 
        disabled={!stripe || isLoading}
        className="bg-greennova-purple hover:bg-greennova-purple/90 w-full"
      >
        {isLoading ? 'Processing...' : `Pay ${(amount / 100).toFixed(2)} ${currency.toUpperCase()}`}
      </Button>
    </form>
  );
};

export default StripeCheckout;
