
import { 
  Search, 
  LineChart, 
  CreditCard, 
  CheckCircle 
} from "lucide-react";

const steps = [
  {
    icon: <Search className="h-10 w-10 text-greennova-purple" />,
    title: "Discover Projects",
    description: "Browse through our curated selection of renewable energy projects from around the world."
  },
  {
    icon: <LineChart className="h-10 w-10 text-greennova-purple" />,
    title: "Analyze Performance",
    description: "Review detailed projections, historical data, and environmental impact metrics."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-greennova-purple" />,
    title: "Invest Securely",
    description: "Choose your investment amount and complete your transaction with our secure payment system."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-greennova-purple" />,
    title: "Track & Earn",
    description: "Monitor your investment performance and receive regular dividend payments."
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-white dark:bg-greennova-dark-purple section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How GreenNova Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our streamlined process makes investing in renewable energy projects simple, transparent, and impactful.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute top-8 left-1/2 h-[calc(100%-4rem)] w-1 bg-greennova-soft-blue dark:bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className="md:w-1/2" />
                <div className="flex items-center justify-center mx-auto md:mx-0 z-10">
                  <div className="bg-greennova-soft-blue dark:bg-gray-700 rounded-full p-4 w-20 h-20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left md:px-6">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
