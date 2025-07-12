
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface ProjectHeaderProps {
  image: string;
  title: string;
  type: string;
  icon: React.ReactNode;
}

const ProjectHeader = ({ image, title, type, icon }: ProjectHeaderProps) => {
  return (
    <>
      <div className="mb-6">
        <Link to="/projects" className="flex items-center text-greennova-purple hover:text-greennova-purple/80 transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Projects
        </Link>
      </div>
      
      <div className="relative h-64 md:h-80">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <div className="inline-flex items-center bg-greennova-purple/90 px-3 py-1 rounded-full mb-4">
              {icon}
              <span className="ml-2">{type} Energy</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
