
import React from "react";
import { DollarSign, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface InvestmentPanelProps {
  funded: number;
  fundingCurrent: string;
  fundingGoal: string;
  minInvestment: string;
  returnRate: string;
  riskLevel: string;
  onInvestClick: () => void;
  onDownloadProspectus: () => void;
  isGeneratingPDF: boolean;
}

const InvestmentPanel = ({ 
  funded,
  fundingCurrent,
  fundingGoal,
  minInvestment,
  returnRate,
  riskLevel,
  onInvestClick,
  onDownloadProspectus,
  isGeneratingPDF
}: InvestmentPanelProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Investment Details</h3>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Funding Progress</span>
          <span className="font-medium">{funded}%</span>
        </div>
        <Progress value={funded} className="h-2" />
        <div className="flex justify-between text-sm mt-2">
          <span>{fundingCurrent}</span>
          <span>{fundingGoal}</span>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm text-gray-500">Minimum Investment</p>
          <p className="font-semibold">{minInvestment}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Expected Returns</p>
          <p className="font-semibold text-greennova-green">{returnRate} per annum</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Risk Level</p>
          <p className="font-semibold flex items-center">
            <span className={`inline-block h-3 w-3 rounded-full mr-2 ${
              riskLevel === 'low' ? 'bg-green-500' :
              riskLevel === 'medium' ? 'bg-orange-500' :
              'bg-red-500'
            }`}></span>
            {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        <Button 
          className="w-full bg-greennova-green hover:bg-greennova-green/90 flex items-center justify-center gap-2"
          onClick={onInvestClick}
        >
          <DollarSign className="h-4 w-4" />
          Invest Now
        </Button>
        <Button 
          variant="outline" 
          className="w-full border-greennova-purple text-greennova-purple hover:bg-soft-purple flex items-center justify-center gap-2"
          onClick={onDownloadProspectus}
          disabled={isGeneratingPDF}
        >
          <FileDown className="h-4 w-4" />
          {isGeneratingPDF ? "Generating PDF..." : "Download Prospectus"}
        </Button>
      </div>
    </div>
  );
};

export default InvestmentPanel;
