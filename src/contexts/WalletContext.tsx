
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet, sepolia } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { 
  connectorsForWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme
} from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
  injectedWallet,
} from '@rainbow-me/rainbowkit/wallets';
import '@rainbow-me/rainbowkit/styles.css';
import { useTheme } from './ThemeContext';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';

const { chains, publicClient } = configureChains(
  [mainnet, sepolia],
  [publicProvider()]
);

const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'; // Optional: replace with your WalletConnect project ID

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains, projectId }),
      coinbaseWallet({ chains, appName: 'GreenNova' }),
      walletConnectWallet({ chains, projectId }),
      injectedWallet({ chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

// Smart contract details
const GNC_CONTRACT_ADDRESS = '0xYourContractAddressHere'; // Replace with actual deployed contract address
const GNC_TOKEN_RATE = 100; // 1 ETH = 100 GNC

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  ethBalance: string;
  gncBalance: string;
  investInProject: (amount: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const WalletContext = createContext<WalletContextType>({
  isConnected: false,
  address: null,
  ethBalance: '0',
  gncBalance: '0',
  investInProject: async () => {},
  isLoading: false,
  error: null
});

export const useWallet = () => useContext(WalletContext);

// Create a provider without wagmi hooks
const WalletProviderInner = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useTheme();
  
  // Use wagmi hooks
  const { address, isConnected } = useAccount();
  const { data: ethBalanceData } = useBalance({
    address: address,
  });
  
  const [gncBalance, setGncBalance] = useState('0');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch GNC token balance
  useEffect(() => {
    const fetchGncBalance = async () => {
      if (!isConnected || !address) {
        setGncBalance('0');
        return;
      }

      try {
        // In a real app, we would fetch balance from the contract
        // This is a placeholder - you would use contract.balanceOf(address)
        const storedBalance = localStorage.getItem(`gnc_balance_${address}`);
        if (storedBalance) {
          setGncBalance(storedBalance);
        } else {
          setGncBalance('0');
        }
      } catch (err) {
        console.error("Failed to fetch GNC balance:", err);
        setGncBalance('0');
      }
    };

    fetchGncBalance();
  }, [isConnected, address]);

  // Invest in project function
  const investInProject = async (amount: string) => {
    if (!isConnected || !address) {
      setError("Please connect your wallet first");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // In a real app, we would call the smart contract here
      // This is a placeholder - simulating the transaction
      console.log(`Investing ${amount} ETH from ${address}`);
      
      // Convert ETH to GNC tokens based on rate
      const ethAmount = parseFloat(amount);
      const gncAmount = ethAmount * GNC_TOKEN_RATE;
      
      // Simulate successful transaction
      // Wait for 2 seconds to simulate transaction time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update local storage with new GNC balance (for demo purposes)
      const currentBalance = parseFloat(localStorage.getItem(`gnc_balance_${address}`) || '0');
      const newBalance = (currentBalance + gncAmount).toString();
      localStorage.setItem(`gnc_balance_${address}`, newBalance);
      
      setGncBalance(newBalance);
      
      console.log(`Successfully invested! Received ${gncAmount} GNC tokens`);
    } catch (err: any) {
      console.error("Investment failed:", err);
      setError(err.message || "Investment failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const contextValue = {
    isConnected,
    address: address || null,
    ethBalance: ethBalanceData ? formatEther(ethBalanceData.value) : '0',
    gncBalance,
    investInProject,
    isLoading,
    error
  };

  return (
    <RainbowKitProvider 
      chains={chains}
      theme={isDarkMode ? darkTheme() : lightTheme()}
    >
      <WalletContext.Provider value={contextValue}>
        {children}
      </WalletContext.Provider>
    </RainbowKitProvider>
  );
};

// Outer provider that includes WagmiConfig
export const WalletProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <WalletProviderInner>
        {children}
      </WalletProviderInner>
    </WagmiConfig>
  );
};
