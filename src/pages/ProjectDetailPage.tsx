
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Sun, Wind, Droplets } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PaymentModal from "@/components/payment/PaymentModal";
import { toast } from "@/hooks/use-toast";
import ProjectHeader from "@/components/project-detail/ProjectHeader";
import ProjectDetails from "@/components/project-detail/ProjectDetails";
import ProjectImpact from "@/components/project-detail/ProjectImpact";
import InvestmentPanel from "@/components/project-detail/InvestmentPanel";
import ProjectNotFound from "@/components/project-detail/ProjectNotFound";
import PDFGenerator from "@/components/project-detail/PDFGenerator";

const projects = [
  {
    id: "1",
    title: "Solar Farm in Rajasthan",
    type: "Solar",
    description: "Large-scale solar project harnessing the abundant sunlight in Rajasthan to generate clean energy.",
    fullDescription: "This ambitious solar farm project in Rajasthan aims to tap into the region's abundant sunlight, boasting over 325 sunny days per year. Spanning 500 acres of semi-arid land, the project will install over 100,000 photovoltaic panels with advanced sun-tracking capabilities to maximize energy generation. The farm is expected to generate 50 MW of clean electricity, enough to power approximately 30,000 homes while preventing the emission of 70,000 tons of CO2 annually. The project includes a robust maintenance program and employs the latest dust-resistant panel technology specially designed for desert conditions.",
    location: "Rajasthan, India",
    minInvestment: "₹50,000",
    minInvestmentAmount: 5000000,
    duration: "25 years",
    power: "50",
    funded: 50,
    fundingGoal: "₹20 Crore",
    fundingCurrent: "₹10 Crore",
    investors: 342,
    returnRate: "12-15%",
    riskLevel: "low",
    impactMetrics: ["30,000 homes powered", "70,000 tons CO2 avoided annually", "500 local jobs created"],
    icon: <Sun className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2872&q=80"
  },
  {
    id: "2",
    title: "Wind Energy Project in Gujarat",
    type: "Wind",
    description: "Offshore wind farm project in Gujarat, leveraging strong coastal winds for sustainable power generation.",
    fullDescription: "Located off the coast of Gujarat, this offshore wind energy project will harness the powerful and consistent coastal winds to generate renewable electricity. The farm will feature 40 state-of-the-art wind turbines, each standing 120 meters tall with 80-meter blades designed specifically for the region's wind patterns. This installation is projected to generate 100 MW of power and will be connected to the mainland via a sophisticated underwater transmission system. The project is designed to withstand extreme weather conditions including monsoon winds and has an integrated bird and marine life monitoring system to minimize environmental impact.",
    location: "Gujarat, India",
    minInvestment: "₹75,000",
    minInvestmentAmount: 7500000,
    duration: "30 years",
    power: "100",
    funded: 50,
    fundingGoal: "₹35 Crore",
    fundingCurrent: "₹17.5 Crore",
    investors: 230,
    returnRate: "10-13%",
    riskLevel: "medium",
    impactMetrics: ["60,000 homes powered", "120,000 tons CO2 avoided annually", "350 local jobs created"],
    icon: <Wind className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80"
  },
  {
    id: "3",
    title: "Hydroelectric Plant in Himachal",
    type: "Hydro",
    description: "Sustainable hydroelectric power plant utilizing the natural flow of mountain rivers in Himachal Pradesh.",
    fullDescription: "This run-of-river hydroelectric project in the scenic mountains of Himachal Pradesh utilizes the natural flow and elevation of the region's pristine rivers to generate clean electricity without the need for large dams or reservoirs. The facility employs innovative turbine technology that allows for power generation with minimal environmental disruption and includes fish ladders and environmental flow mechanisms to protect local aquatic ecosystems. With a generation capacity of 80 MW, this project provides reliable baseload power while adhering to strict ecological standards. The facility's design incorporates local architectural elements and uses locally sourced materials where possible.",
    location: "Himachal Pradesh, India",
    minInvestment: "₹90,000",
    minInvestmentAmount: 9000000,
    duration: "40 years",
    power: "80",
    funded: 35,
    fundingGoal: "₹25 Crore",
    fundingCurrent: "₹8.75 Crore",
    investors: 115,
    returnRate: "11-14%",
    riskLevel: "medium",
    impactMetrics: ["45,000 homes powered", "90,000 tons CO2 avoided annually", "250 local jobs created"],
    icon: <Droplets className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1566335325303-a38d7d35f7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
  }
];

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
  if (!project) {
    return <ProjectNotFound />;
  }

  const handleInvestClick = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    toast({
      title: "Investment Successful!",
      description: `You have successfully invested in ${project.title}. You will receive further details via email.`,
      variant: "default",
    });
  };

  return (
    <>
      <Helmet>
        <title>{project.title} | GreenNova</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <ProjectHeader 
              image={project.image}
              title={project.title}
              type={project.type}
              icon={project.icon}
            />
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-8">
                <div className="lg:col-span-2">
                  <ProjectDetails 
                    fullDescription={project.fullDescription}
                    location={project.location}
                    power={project.power}
                    duration={project.duration}
                    investors={project.investors}
                  />
                  
                  <ProjectImpact impactMetrics={project.impactMetrics} />
                </div>
                
                <div className="lg:col-span-1">
                  <PDFGenerator project={project}>
                    {({ handleDownloadProspectus, isGeneratingPDF }) => (
                      <InvestmentPanel 
                        funded={project.funded}
                        fundingCurrent={project.fundingCurrent}
                        fundingGoal={project.fundingGoal}
                        minInvestment={project.minInvestment}
                        returnRate={project.returnRate}
                        riskLevel={project.riskLevel}
                        onInvestClick={handleInvestClick}
                        onDownloadProspectus={handleDownloadProspectus}
                        isGeneratingPDF={isGeneratingPDF}
                      />
                    )}
                  </PDFGenerator>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        
        <PaymentModal
          open={isPaymentModalOpen}
          onOpenChange={setIsPaymentModalOpen}
          amount={project.minInvestmentAmount}
          projectTitle={project.title}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </div>
    </>
  );
};

export default ProjectDetailPage;
