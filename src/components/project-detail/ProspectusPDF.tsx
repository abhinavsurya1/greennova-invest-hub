
import React, { forwardRef } from "react";

interface ProspectusPDFProps {
  project: {
    title: string;
    icon: React.ReactNode;
    image: string;
    fullDescription: string;
    location: string;
    power: string;
    duration: string;
    investors: number;
    minInvestment: string;
    returnRate: string;
    riskLevel: string;
    fundingGoal: string;
    impactMetrics: string[];
  };
}

const ProspectusPDF = forwardRef<HTMLDivElement, ProspectusPDFProps>(({ project }, ref) => {
  return (
    <div ref={ref} className="bg-white p-8 w-[800px]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{project.title} - Investment Prospectus</h1>
        <div className="text-greennova-purple">{project.icon}</div>
      </div>
      
      <div className="mb-6">
        <div 
          className="w-full h-64 bg-gray-200 rounded-lg mb-4"
          style={{
            backgroundImage: `url(${project.image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
          }}
        >
          <span className="sr-only">{project.title}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
        <p className="text-gray-700">{project.fullDescription}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-1">Location</h3>
          <p>{project.location}</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-1">Capacity</h3>
          <p>{project.power} MW</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-1">Duration</h3>
          <p>{project.duration}</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-1">Investors</h3>
          <p>{project.investors}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Investment Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-1">Minimum Investment</h3>
            <p>{project.minInvestment}</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-1">Expected Returns</h3>
            <p className="text-greennova-green">{project.returnRate} per annum</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-1">Risk Level</h3>
            <p>{project.riskLevel.charAt(0).toUpperCase() + project.riskLevel.slice(1)}</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-1">Total Funding Goal</h3>
            <p>{project.fundingGoal}</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Environmental Impact</h2>
        <div className="bg-greennova-soft-green p-4 rounded-lg">
          <ul className="space-y-2">
            {project.impactMetrics.map((metric, index) => (
              <li key={index} className="flex items-center">
                <span className="h-2 w-2 bg-greennova-green rounded-full mr-2"></span>
                {metric}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="border-t pt-6 mt-6">
        <p className="text-sm text-gray-500">
          This document contains confidential information regarding the {project.title} project. 
          It is provided for informational purposes only and does not constitute an offer to sell or a solicitation 
          of an offer to buy any security. Please read all investment materials and risk disclosures carefully before investing.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          <p>GreenNova © {new Date().getFullYear()}</p>
          <p>Generated on: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
});

ProspectusPDF.displayName = "ProspectusPDF";

export default ProspectusPDF;
