
import React from 'react';

interface WalletAuthProps {
  children: React.ReactNode;
}

const WalletAuth = ({ children }: WalletAuthProps) => {
  // Simple pass-through component - no auth required
  return <>{children}</>;
};

export default WalletAuth;
