
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>GreenNova - Invest in Renewable Energy</title>
        <meta 
          name="description" 
          content="GreenNova democratizes and simplifies investments in renewable energy projects. Start investing in a sustainable future today." 
        />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <ProjectShowcase />
          <HowItWorks />
          <Stats />
          <Testimonials />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
