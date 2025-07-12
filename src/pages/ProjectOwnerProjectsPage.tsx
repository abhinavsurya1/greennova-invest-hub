import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";
import ProjectOwnerSidebar from "@/components/dashboard/ProjectOwnerSidebar";
import { PlusCircle, Edit, Trash2, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import NewProjectModal from "@/components/dashboard/NewProjectModal";
import { toast } from "@/hooks/use-toast";

const ProjectOwnerProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchProjects();
    }
  }, [user]);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      if (!user) {
        console.log("No user found, cannot fetch projects");
        return;
      }

      console.log("Fetching projects for user ID:", user.id);

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("owner_id", user.id) // Filter by owner_id
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error in project fetch:", error);
        throw error;
      }
      
      console.log("Projects fetched:", data);
      setProjects(data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast({
        title: "Error fetching projects",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProject = async (project) => {
    console.log("New project added:", project);
    await fetchProjects();
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Project deleted",
        description: "The project has been successfully deleted.",
      });

      // Refresh projects list
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
      toast({
        title: "Error deleting project",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <ProjectOwnerSidebar openProjectModal={() => setIsModalOpen(true)} />
      <main className="flex-1 p-6 overflow-y-auto">
        <Helmet>
          <title>Projects | Project Owner Dashboard</title>
        </Helmet>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <Button onClick={() => setIsModalOpen(true)} className="bg-greennova-green">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
        
        <Tabs defaultValue="active" className="space-y-4">
          <TabsList>
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-4">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-greennova-green"></div>
              </div>
            ) : projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>Type: {project.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium">Funding Goal: </span>
                          ₹{project.funding_goal}
                        </div>
                        <div>
                          <span className="font-medium">Start Date: </span>
                          {new Date(project.start_date).toLocaleDateString()}
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <Button variant="outline" size="sm" onClick={() => alert(`Edit project ${project.id}`)}>
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this project?")) {
                                handleDelete(project.id);
                              }
                            }}
                            className="text-red-500 hover:text-red-700 hover:border-red-300"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center py-8 text-center">
                  <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No projects found</h3>
                  <p className="text-gray-500 mb-4">You haven't created any projects yet.</p>
                  <Button onClick={() => setIsModalOpen(true)} className="bg-greennova-green">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create Your First Project
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardContent className="flex flex-col items-center py-8 text-center">
                <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No pending projects</h3>
                <p className="text-gray-500">Any projects awaiting approval will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-4">
            <Card>
              <CardContent className="flex flex-col items-center py-8 text-center">
                <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No completed projects</h3>
                <p className="text-gray-500">Completed projects will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <NewProjectModal 
          open={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onAddProject={handleAddProject}
        />
      </main>
    </div>
  );
};

export default ProjectOwnerProjectsPage;
