
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Book, GraduationCap, Lightbulb, Globe } from "lucide-react";

const LearnSection = ({ 
  Icon, 
  title, 
  description 
}: { 
  Icon: React.ComponentType<{className?: string}>, 
  title: string, 
  description: string 
}) => (
  <div className="bg-white dark:bg-greennova-dark-purple p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <Icon className="w-10 h-10 text-greennova-purple mr-4" />
      <h3 className="text-xl font-semibold text-greennova-purple">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const LearnPage = () => {
  const learnSections = [
    {
      Icon: Book,
      title: "Renewable Energy Basics",
      description: "Understand the fundamental principles of renewable energy, including solar, wind, hydro, and geothermal technologies."
    },
    {
      Icon: GraduationCap,
      title: "Investment Strategies",
      description: "Learn how to invest in renewable energy projects, understand risk assessment, and make informed investment decisions."
    },
    {
      Icon: Lightbulb,
      title: "Environmental Impact",
      description: "Explore the positive environmental consequences of investing in renewable energy and sustainable technologies."
    },
    {
      Icon: Globe,
      title: "Global Sustainability",
      description: "Discover how renewable energy investments contribute to global sustainability and combat climate change."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Learn | GreenNova</title>
        <meta 
          name="description" 
          content="Learn about renewable energy, investment strategies, and sustainability with GreenNova's educational resources." 
        />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-greennova-purple mb-4">
              Learn About Renewable Energy Investments
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Empower yourself with knowledge about sustainable investing and renewable energy technologies.
            </p>
          </section>
          
          <section className="grid md:grid-cols-2 gap-6">
            {learnSections.map((section, index) => (
              <LearnSection 
                key={index} 
                Icon={section.Icon} 
                title={section.title} 
                description={section.description} 
              />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LearnPage;
