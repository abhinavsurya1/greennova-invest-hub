
import { useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from '@/hooks/use-toast';

const WalletLoginButton = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();
  
  const handleAuth = async () => {
    if (!address) return;
    
    try {
      setIsAuthenticating(true);
      
      // Simulate wallet authentication
      setTimeout(() => {
        // Store wallet information locally
        localStorage.setItem('wallet_address', address);
        localStorage.setItem('wallet_connected', 'true');
        localStorage.setItem('user_type', 'investor');
        
        toast({
          title: "Wallet Connected",
          description: `Successfully authenticated with wallet ${address.slice(0, 6)}...${address.slice(-4)}`,
        });
        
        navigate('/dashboard');
        setIsAuthenticating(false);
      }, 1000);
    } catch (error) {
      console.error('Authentication error:', error);
      setIsAuthenticating(false);
    }
  };
  
  const handleDisconnect = () => {
    // Clear local storage
    localStorage.removeItem('wallet_address');
    localStorage.removeItem('wallet_connected');
    localStorage.removeItem('user_type');
    
    disconnect();
  };
  
  return (
    <div className="flex flex-col items-center">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
        }) => {
          return (
            <div
              className="w-full"
              {...(!mounted && {
                'aria-hidden': true,
                'style': {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!mounted || !account || !chain) {
                  return (
                    <Button
                      onClick={openConnectModal}
                      className="flex items-center justify-center gap-2 h-20 bg-amber-500 hover:bg-amber-600 w-full"
                      disabled={isAuthenticating}
                    >
                      <Wallet className="h-6 w-6" />
                      <div className="text-left">
                        <div className="font-semibold text-lg">Wallet Login</div>
                        <div className="text-sm opacity-90">Connect with MetaMask or other wallets</div>
                      </div>
                    </Button>
                  );
                }
                
                if (chain.unsupported) {
                  return (
                    <Button onClick={openChainModal} className="bg-red-500 hover:bg-red-600 h-20 w-full">
                      <div className="text-left">
                        <div className="font-semibold text-lg">Wrong Network</div>
                        <div className="text-sm opacity-90">Click to switch to a supported network</div>
                      </div>
                    </Button>
                  );
                }
                
                return (
                  <Button 
                    onClick={handleAuth}
                    className="flex items-center justify-between h-20 bg-green-600 hover:bg-green-700 w-full"
                    disabled={isAuthenticating}
                  >
                    <div className="flex items-center gap-2">
                      <Wallet className="h-6 w-6" />
                      <div className="text-left">
                        <div className="font-semibold text-lg">Wallet Connected</div>
                        <div className="text-sm opacity-90 truncate max-w-[200px]">
                          {account.displayName}
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDisconnect();
                      }}
                    >
                      Disconnect
                    </Button>
                  </Button>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
};

export default WalletLoginButton;
