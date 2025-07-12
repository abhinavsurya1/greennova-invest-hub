
import React, { useState } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { Loader2, AlertTriangle, Wallet, Coins } from "lucide-react";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
  tokenRate: number;
  image?: string;
}

const Project: React.FC<ProjectProps> = ({
  id,
  title,
  description,
  raised,
  goal,
  tokenRate,
  image
}) => {
  const [investAmount, setInvestAmount] = useState('');
  const { isConnected, address, ethBalance, gncBalance, investInProject, isLoading, error } = useWallet();
  
  const progress = Math.min(Math.round((raised / goal) * 100), 100);
  const estimatedTokens = parseFloat(investAmount) * tokenRate || 0;
  
  const handleInvest = async () => {
    if (!investAmount || parseFloat(investAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid investment amount",
        variant: "destructive",
      });
      return;
    }
    
    if (parseFloat(investAmount) > parseFloat(ethBalance)) {
      toast({
        title: "Insufficient funds",
        description: "You don't have enough ETH in your wallet",
        variant: "destructive",
      });
      return;
    }
    
    try {
      await investInProject(investAmount);
      toast({
        title: "Investment successful!",
        description: `You've successfully invested ${investAmount} ETH and received ${estimatedTokens} GNC tokens`,
        variant: "default",
      });
      setInvestAmount('');
    } catch (err) {
      console.error("Investment failed:", err);
    }
  };

  return (
    <Card className="w-full overflow-hidden">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Fundraising Progress</span>
            <span className="font-medium">{raised} ETH of {goal} ETH ({progress}%)</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
            <div className="text-gray-500 dark:text-gray-400">Token Rate</div>
            <div className="font-medium mt-1">1 ETH = {tokenRate} GNC</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
            <div className="text-gray-500 dark:text-gray-400">Your GNC Balance</div>
            <div className="font-medium mt-1 flex items-center">
              <Coins className="h-4 w-4 mr-1" />
              {parseFloat(gncBalance).toLocaleString()} GNC
            </div>
          </div>
        </div>
        
        {isConnected ? (
          <div className="space-y-4 pt-2">
            <div className="space-y-2">
              <label htmlFor="investAmount" className="text-sm font-medium">
                Investment Amount (ETH)
              </label>
              <div className="flex space-x-2">
                <Input
                  id="investAmount"
                  type="number"
                  placeholder="0.01"
                  value={investAmount}
                  onChange={(e) => setInvestAmount(e.target.value)}
                  min="0.001"
                  step="0.001"
                  disabled={isLoading}
                />
                <Button 
                  variant="outline" 
                  onClick={() => setInvestAmount(ethBalance)}
                  className="whitespace-nowrap"
                  disabled={isLoading}
                >
                  Max
                </Button>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Your balance: {parseFloat(ethBalance).toFixed(4)} ETH
              </div>
            </div>
            
            {parseFloat(investAmount) > 0 && (
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                <p className="text-sm text-green-700 dark:text-green-400">
                  You will receive approximately <strong>{estimatedTokens} GNC</strong> tokens
                </p>
              </div>
            )}
            
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-md flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="p-4 border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 rounded-md">
            <p className="text-sm text-amber-800 dark:text-amber-400 flex items-center">
              <Wallet className="h-4 w-4 mr-2" />
              Please connect your wallet to invest in this project
            </p>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-greennova-green hover:bg-greennova-green/90"
          disabled={!isConnected || isLoading || !investAmount || parseFloat(investAmount) <= 0}
          onClick={handleInvest}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            'Invest Now'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function TokenizedInvestment() {
  // Sample project data - in a real app, this would come from an API or blockchain
  const projects = [{
    id: "project-solar-1",
    title: "Solar Farm in Rajasthan",
    description: "Invest in a 100kW rooftop solar plant with tokenized ownership. Receive GNC tokens representing your share of the project.",
    raised: 3.2,
    goal: 10,
    tokenRate: 100,  // 1 ETH = 100 GNC
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2872&q=80"
  }];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Tokenized Investments</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Invest in renewable energy projects using cryptocurrency and receive GNC tokens
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
