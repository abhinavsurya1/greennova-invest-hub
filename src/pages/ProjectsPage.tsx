import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { MapPin, Clock, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const projects = [
  {
    id: 1,
    title: "Solar Farm in Rajasthan",
    type: "Solar",
    description: "Large-scale solar project harnessing the abundant sunlight in Rajasthan to generate clean energy.",
    location: "Rajasthan, India",
    minInvestment: "₹50,000",
    duration: "25 years",
    power: "50",
    funded: 50,
    returnRate: "12-15%",
    riskLevel: "low",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2872&q=80"
  },
  {
    id: 2,
    title: "Wind Energy Project in Gujarat",
    type: "Wind",
    description: "Offshore wind farm project in Gujarat, leveraging strong coastal winds for sustainable power generation.",
    location: "Gujarat, India",
    minInvestment: "₹75,000",
    duration: "30 years",
    power: "100",
    funded: 50,
    returnRate: "10-13%",
    riskLevel: "medium",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80"
  },
  {
    id: 3,
    title: "Hydroelectric Plant in Himachal",
    type: "Hydro",
    description: "Sustainable hydroelectric power plant utilizing the natural flow of mountain rivers in Himachal Pradesh.",
    location: "Himachal Pradesh, India",
    minInvestment: "₹90,000",
    duration: "40 years",
    power: "80",
    funded: 35,
    returnRate: "11-14%",
    riskLevel: "medium",
    image: "https://images.unsplash.com/photo-1566335325303-a38d7d35f7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
  },
  {
    id: 4,
    title: "Solar Rooftops in Karnataka",
    type: "Solar",
    description: "Distributed solar rooftop initiative across urban Karnataka, making solar power accessible to communities.",
    location: "Karnataka, India",
    minInvestment: "₹25,000",
    duration: "15 years",
    power: "30",
    funded: 75,
    returnRate: "8-12%",
    riskLevel: "low",
    image: "https://images.unsplash.com/photo-1611365892117-00d23f8099ec?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2940&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Biomass Power in Punjab",
    type: "Biomass",
    description: "Agricultural waste to energy project in Punjab, converting farm residue into clean electricity.",
    location: "Punjab, India",
    minInvestment: "₹40,000",
    duration: "20 years",
    power: "45",
    funded: 60,
    returnRate: "9-13%",
    riskLevel: "medium",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2940&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    title: "Geothermal Project in Ladakh",
    type: "Geothermal",
    description: "Pioneering geothermal energy project leveraging Ladakh's unique geological features for sustainable power.",
    location: "Ladakh, India",
    minInvestment: "₹100,000",
    duration: "50 years",
    power: "60",
    funded: 25,
    returnRate: "13-18%",
    riskLevel: "high",
    image: "https://images.unsplash.com/photo-1591384083254-63ebfc70eb5c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2960&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedRisk, setSelectedRisk] = useState("All Risks");
  const navigate = useNavigate();

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === "All Types" || project.type === selectedType;
    const matchesRisk = selectedRisk === "All Risks" || 
                      (selectedRisk === "Low" && project.riskLevel === "low") ||
                      (selectedRisk === "Medium" && project.riskLevel === "medium") ||
                      (selectedRisk === "High" && project.riskLevel === "high");
    
    return matchesSearch && matchesType && matchesRisk;
  });

  const handleInvestClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <>
      <Helmet>
        <title>Investment Opportunities | GreenNova</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Investment Opportunities</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover and invest in sustainable energy projects across India
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-grow">
                <Input
                  placeholder="Search Projects"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm mb-1 text-gray-600">Project Type</p>
                  <Select onValueChange={setSelectedType} defaultValue={selectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Types">All Types</SelectItem>
                      <SelectItem value="Solar">Solar</SelectItem>
                      <SelectItem value="Wind">Wind</SelectItem>
                      <SelectItem value="Hydro">Hydro</SelectItem>
                      <SelectItem value="Biomass">Biomass</SelectItem>
                      <SelectItem value="Geothermal">Geothermal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p className="text-sm mb-1 text-gray-600">Status</p>
                  <Select onValueChange={setSelectedStatus} defaultValue={selectedStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Status">All Status</SelectItem>
                      <SelectItem value="Funding">Funding</SelectItem>
                      <SelectItem value="Funded">Funded</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p className="text-sm mb-1 text-gray-600">Risk Level</p>
                  <Select onValueChange={setSelectedRisk} defaultValue={selectedRisk}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Risks" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Risks">All Risks</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Zap className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{project.power} MW</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>Min: {project.minInvestment}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Funding Progress</span>
                        <span className="font-medium">{project.funded}%</span>
                      </div>
                      <Progress value={project.funded} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">{project.returnRate} Returns</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.riskLevel === 'low' ? 'bg-green-100 text-green-800' :
                          project.riskLevel === 'medium' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {project.riskLevel.charAt(0).toUpperCase() + project.riskLevel.slice(1)} Risk
                        </span>
                      </div>
                      <Button 
                        className="bg-greennova-green hover:bg-greennova-green/90"
                        onClick={() => handleInvestClick(project.id)}
                      >
                        Invest Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;
