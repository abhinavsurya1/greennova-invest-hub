
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-greennova-purple to-greennova-secondary-purple text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to invest in a greener future?
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Join thousands of investors making a difference through sustainable energy projects. Start with as little as $100.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/register">
            <Button className="w-full sm:w-auto text-lg bg-white text-greennova-purple hover:bg-gray-100">
              Create Account <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/learn">
            <Button variant="outline" className="w-full sm:w-auto text-lg border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
