
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Users, Target, Globe, Award } from "lucide-react";

const ValueCard = ({ 
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

const AboutUsPage = () => {
  const companyValues = [
    {
      Icon: Users,
      title: "Community-Driven",
      description: "We believe in democratizing renewable energy investments, making sustainable investing accessible to everyone."
    },
    {
      Icon: Target,
      title: "Impact-Focused",
      description: "Every investment on our platform is carefully selected to maximize environmental and social impact."
    },
    {
      Icon: Globe,
      title: "Global Perspective",
      description: "We work with renewable energy projects worldwide, supporting global sustainability efforts."
    },
    {
      Icon: Award,
      title: "Transparent & Ethical",
      description: "Committed to providing clear, honest information and maintaining the highest ethical standards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | GreenNova</title>
        <meta 
          name="description" 
          content="GreenNova's mission is to democratize renewable energy investments and drive global sustainability." 
        />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-greennova-purple mb-4">
              Empowering Sustainable Investments
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              GreenNova is revolutionizing the way people invest in renewable energy, making sustainable investing accessible, transparent, and impactful.
            </p>
          </section>
          
          <section className="grid md:grid-cols-2 gap-6">
            {companyValues.map((value, index) => (
              <ValueCard 
                key={index} 
                Icon={value.Icon} 
                title={value.title} 
                description={value.description} 
              />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
