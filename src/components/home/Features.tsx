
import { 
  LineChart, 
  Shield, 
  Leaf, 
  Users, 
  BarChart4, 
  Globe 
} from "lucide-react";

const features = [
  {
    icon: <LineChart className="h-8 w-8 text-greennova-purple" />,
    title: "Investment Analytics",
    description: "Track your investments with advanced analytics and real-time monitoring of performance metrics."
  },
  {
    icon: <Shield className="h-8 w-8 text-greennova-blue" />,
    title: "Secure Transactions",
    description: "Industry-leading security protocols to ensure your investments and data remain protected."
  },
  {
    icon: <Leaf className="h-8 w-8 text-greennova-green" />,
    title: "Impact Tracking",
    description: "Measure your environmental impact with detailed carbon offset and sustainability metrics."
  },
  {
    icon: <Users className="h-8 w-8 text-greennova-orange" />,
    title: "Community Investments",
    description: "Join forces with like-minded investors to fund larger renewable energy projects together."
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-greennova-secondary-purple" />,
    title: "Diversified Portfolio",
    description: "Spread your investments across various renewable energy technologies and geographic regions."
  },
  {
    icon: <Globe className="h-8 w-8 text-greennova-blue" />,
    title: "Global Projects",
    description: "Access vetted renewable energy projects from around the world, all in one platform."
  },
];

const Features = () => {
  return (
    <section className="bg-white dark:bg-greennova-dark-purple section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform combines financial investment tools with impact metrics to provide a comprehensive renewable energy investing experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="bg-greennova-soft-blue dark:bg-gray-700 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
