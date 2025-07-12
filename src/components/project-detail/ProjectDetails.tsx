
import React from "react";
import { MapPin, Clock, Zap, Users } from "lucide-react";

interface ProjectDetailsProps {
  fullDescription: string;
  location: string;
  power: string;
  duration: string;
  investors: number;
}

const ProjectDetails = ({ 
  fullDescription,
  location,
  power,
  duration,
  investors
}: ProjectDetailsProps) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
      <p className="text-gray-700 mb-6">{fullDescription}</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Location</span>
          </div>
          <div className="font-medium">{location}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <Zap className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Capacity</span>
          </div>
          <div className="font-medium">{power} MW</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Duration</span>
          </div>
          <div className="font-medium">{duration}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <Users className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Investors</span>
          </div>
          <div className="font-medium">{investors}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
