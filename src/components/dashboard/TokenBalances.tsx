
import { useWallet } from "@/contexts/WalletContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import WalletLoginButton from "../auth/WalletLoginButton";

export default function TokenBalances() {
  const { isConnected, address, gncBalance } = useWallet();
  const navigate = useNavigate();
  
  const handleNavigateToInvest = () => {
    navigate('/projects/tokenized');
  };
  
  if (!isConnected) {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">GNC Token Balance</CardTitle>
          <CardDescription>Connect your wallet to see your token balance</CardDescription>
        </CardHeader>
        <CardContent>
          <WalletLoginButton />
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">GNC Token Balance</CardTitle>
        <CardDescription>Your tokenized investments on GreenNova</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-greennova-green/20 p-2 rounded-full">
              <Coins className="h-5 w-5 text-greennova-green" />
            </div>
            <div>
              <p className="text-sm font-medium">GreenNova Coin (GNC)</p>
              <p className="text-xs text-gray-500 truncate max-w-[200px]">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{parseFloat(gncBalance).toLocaleString()}</p>
            <p className="text-xs text-gray-500">GNC Tokens</p>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center"
          onClick={handleNavigateToInvest}
        >
          Invest to get more tokens <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
