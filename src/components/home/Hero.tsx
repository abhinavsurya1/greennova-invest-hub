
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Leaf, Shield } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-greennova-soft-blue dark:from-greennova-dark-purple dark:to-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="gradient-text">Invest in our planet's</span>
              <br />
              <span className="text-greennova-green">sustainable future</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              GreenNova democratizes access to renewable energy investments, allowing you to grow your wealth while fighting climate change.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <Button className="w-full sm:w-auto text-lg bg-greennova-purple hover:bg-greennova-secondary-purple">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="w-full sm:w-auto text-lg border-greennova-purple text-greennova-purple hover:bg-greennova-soft-blue dark:text-white">
                  Browse Projects
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 w-14 h-14 mx-auto flex items-center justify-center shadow-md mb-3">
                  <Leaf className="h-7 w-7 text-greennova-green" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Eco-Friendly</p>
              </div>
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 w-14 h-14 mx-auto flex items-center justify-center shadow-md mb-3">
                  <LineChart className="h-7 w-7 text-greennova-purple" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Data-Driven</p>
              </div>
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 w-14 h-14 mx-auto flex items-center justify-center shadow-md mb-3">
                  <Shield className="h-7 w-7 text-greennova-blue" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Secure</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80"
                alt="Renewable Energy Installation"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-sm font-bold text-gray-900 dark:text-white">Already funded</p>
              <p className="text-2xl font-extrabold text-greennova-purple">$12.5M+</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">across 150+ projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
