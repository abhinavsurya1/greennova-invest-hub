
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, FileEdit } from "lucide-react";

const ProjectsList = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "PRJ001",
      name: "Solar Farm Bengaluru",
      status: "active",
      fundingGoal: "₹1,20,00,000",
      currentFunding: "₹35,45,000",
      progress: 30,
      investors: 142,
      createdAt: "2023-08-15",
    },
    {
      id: "PRJ002",
      name: "Wind Energy Punjab",
      status: "active",
      fundingGoal: "₹2,50,00,000",
      currentFunding: "₹1,75,28,000",
      progress: 70,
      investors: 89,
      createdAt: "2023-09-02",
    },
    {
      id: "PRJ003",
      name: "Hydropower Himachal",
      status: "pending",
      fundingGoal: "₹3,00,00,000",
      currentFunding: "₹45,20,000",
      progress: 15,
      investors: 27,
      createdAt: "2023-12-10",
    },
    {
      id: "PRJ004",
      name: "Biogas Maharashtra",
      status: "completed",
      fundingGoal: "₹75,00,000",
      currentFunding: "₹75,00,000",
      progress: 100,
      investors: 63,
      createdAt: "2023-05-20",
    },
    {
      id: "PRJ005",
      name: "Solar Rooftop Delhi",
      status: "active",
      fundingGoal: "₹1,50,00,000",
      currentFunding: "₹45,60,000",
      progress: 30,
      investors: 42,
      createdAt: "2023-10-05",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const handleEditProject = (projectId: string) => {
    navigate(`/project-owner/projects/${projectId}/edit`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Projects</h2>
          <Button
            variant="outline"
            className="border-greennova-green text-greennova-green hover:bg-greennova-green hover:text-white"
          >
            View All
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Funding Goal</TableHead>
              <TableHead>Current Funding</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Investors</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>
                  <Badge
                    className={`font-normal ${getStatusColor(project.status)}`}
                    variant="outline"
                  >
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{project.fundingGoal}</TableCell>
                <TableCell>{project.currentFunding}</TableCell>
                <TableCell>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-greennova-green h-2.5 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 mt-1 inline-block">
                    {project.progress}%
                  </span>
                </TableCell>
                <TableCell>{project.investors}</TableCell>
                <TableCell>{project.createdAt}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditProject(project.id)}
                    >
                      <FileEdit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProjectsList;
