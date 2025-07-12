
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Sun, Wind, Droplets, ArrowRight, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Solar Farm California",
    type: "Solar",
    icon: <Sun className="h-5 w-5" />,
    location: "California, USA",
    returnRate: "8-12%",
    funded: 75,
    fundTarget: "$2.5M",
    fundRaised: "$1.9M",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2872&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Offshore Wind Park",
    type: "Wind",
    icon: <Wind className="h-5 w-5" />,
    location: "North Sea, Denmark",
    returnRate: "9-14%",
    funded: 60,
    fundTarget: "$5.0M",
    fundRaised: "$3.0M",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80"
  },
  {
    id: 3,
    title: "Hydroelectric Dam",
    type: "Hydro",
    icon: <Droplets className="h-5 w-5" />,
    location: "British Columbia, Canada",
    returnRate: "7-11%",
    funded: 40,
    fundTarget: "$7.2M",
    fundRaised: "$2.9M",
    image: "https://images.unsplash.com/photo-1566335325303-a38d7d35f7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
  },
];

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Solar", "Wind", "Hydro"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section className="bg-greennova-soft-blue dark:bg-gray-900 section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Discover high-impact renewable energy projects ready for your investment.
            </p>
          </div>
          <div className="flex space-x-2 mt-6 md:mt-0">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={activeFilter === filter ? "bg-greennova-purple" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-greennova-orange flex items-center">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  <Badge className={`
                    ${project.type === "Solar" ? "bg-yellow-500" : 
                     project.type === "Wind" ? "bg-blue-500" : 
                     "bg-cyan-500"} 
                    flex items-center
                  `}>
                    {project.icon}
                    <span className="ml-1">{project.type}</span>
                  </Badge>
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">Funded</span>
                    <span className="font-medium">{project.funded}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-greennova-purple h-2 rounded-full" 
                      style={{ width: `${project.funded}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Target</p>
                    <p className="font-semibold">{project.fundTarget}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Raised</p>
                    <p className="font-semibold">{project.fundRaised}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Expected Return</p>
                  <p className="font-bold text-greennova-green">{project.returnRate}</p>
                </div>
                <Link to={`/projects/${project.id}`}>
                  <Button className="bg-greennova-purple hover:bg-greennova-purple/90 flex items-center">
                    Invest Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline" className="border-greennova-purple text-greennova-purple dark:text-white">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
