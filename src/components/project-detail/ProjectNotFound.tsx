
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ProjectNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold">Project Not Found</h2>
          <p className="mt-4 mb-8">We couldn't find the project you're looking for.</p>
          <Link to="/projects">
            <Button>Return to Projects</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectNotFound;
