
import { TrendingUp, Users, Globe, Leaf } from "lucide-react";

const Stats = () => {
  return (
    <section className="bg-greennova-purple py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
            <div className="bg-greennova-soft-blue dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-greennova-purple" />
            </div>
            <h3 className="text-4xl font-bold text-greennova-purple mb-2">$24M+</h3>
            <p className="text-gray-600 dark:text-gray-300">Investments Facilitated</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
            <div className="bg-greennova-soft-blue dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-greennova-purple" />
            </div>
            <h3 className="text-4xl font-bold text-greennova-purple mb-2">15k+</h3>
            <p className="text-gray-600 dark:text-gray-300">Active Investors</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
            <div className="bg-greennova-soft-blue dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-greennova-purple" />
            </div>
            <h3 className="text-4xl font-bold text-greennova-purple mb-2">28</h3>
            <p className="text-gray-600 dark:text-gray-300">Countries Reached</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
            <div className="bg-greennova-soft-blue dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-greennova-purple" />
            </div>
            <h3 className="text-4xl font-bold text-greennova-purple mb-2">45k+</h3>
            <p className="text-gray-600 dark:text-gray-300">CO₂ Tons Offset</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
