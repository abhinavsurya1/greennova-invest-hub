
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Wind, Droplets, MapPin, DollarSign } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const recommendedProjects = [
  {
    id: 4,
    title: "Community Solar Grid",
    type: "Solar",
    icon: <Sun className="h-4 w-4" />,
    location: "Arizona, USA",
    returnRate: "8.5%",
    funded: 65,
    match: "94% match",
  },
  {
    id: 5,
    title: "Wind Farm Expansion",
    type: "Wind",
    icon: <Wind className="h-4 w-4" />,
    location: "Scotland, UK",
    returnRate: "9.2%",
    funded: 80,
    match: "87% match",
  },
  {
    id: 6,
    title: "Micro Hydroelectric",
    type: "Hydro",
    icon: <Droplets className="h-4 w-4" />,
    location: "Oregon, USA",
    returnRate: "7.8%",
    funded: 45,
    match: "82% match",
  },
];

const ProjectRecommendations = () => {
  const navigate = useNavigate();
  
  const handleInvestClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };
  
  return (
    <Card className="mt-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recommended Projects</CardTitle>
        <Link to="/projects">
          <Button variant="outline" size="sm">
            See All
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <Badge className={`
                      ${project.type === "Solar" ? "bg-yellow-500" : 
                       project.type === "Wind" ? "bg-blue-500" : 
                       "bg-cyan-500"} 
                      mr-2 flex items-center
                    `}>
                      {project.icon}
                    </Badge>
                    <span className="font-medium">{project.title}</span>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    {project.match}
                  </Badge>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <MapPin className="h-3 w-3 mr-1" />
                  {project.location}
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Funded</span>
                    <span className="font-medium">{project.funded}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div 
                      className="bg-greennova-purple h-1.5 rounded-full" 
                      style={{ width: `${project.funded}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Expected Return</p>
                    <p className="font-bold text-greennova-green">{project.returnRate}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      onClick={() => handleInvestClick(project.id)}
                      className="bg-greennova-purple flex items-center gap-1"
                    >
                      <DollarSign className="h-3 w-3" />
                      Invest
                    </Button>
                    <Link to={`/projects/${project.id}`}>
                      <Button size="sm" variant="outline">View</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectRecommendations;
