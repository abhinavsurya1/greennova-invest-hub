
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import PaymentProvider from './PaymentProvider';
import StripeCheckout from './StripeCheckout';

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
  projectTitle?: string;
  onPaymentSuccess?: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  open,
  onOpenChange,
  amount,
  projectTitle = 'Renewable Energy Project',
  onPaymentSuccess,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete Your Investment</DialogTitle>
          <DialogDescription>
            You're investing in {projectTitle}.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <PaymentProvider>
            <StripeCheckout 
              amount={amount} 
              description={`Investment in ${projectTitle}`} 
              onPaymentSuccess={() => {
                onPaymentSuccess?.();
                setTimeout(() => onOpenChange(false), 2000);
              }}
            />
          </PaymentProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
