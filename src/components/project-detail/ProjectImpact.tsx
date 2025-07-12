
import React from "react";

interface ProjectImpactProps {
  impactMetrics: string[];
}

const ProjectImpact = ({ impactMetrics }: ProjectImpactProps) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Environmental Impact</h2>
      <div className="bg-greennova-soft-green p-4 rounded-lg mb-8">
        <ul className="space-y-3">
          {impactMetrics.map((metric, index) => (
            <li key={index} className="flex items-center">
              <span className="h-2 w-2 bg-greennova-green rounded-full mr-2"></span>
              {metric}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectImpact;
