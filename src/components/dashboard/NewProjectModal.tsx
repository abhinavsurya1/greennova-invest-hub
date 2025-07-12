import React, { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Upload } from "lucide-react";

interface NewProjectModalProps {
  open: boolean;
  onClose: () => void;
  onAddProject: (project: {
    name: string;
    type: string;
    fundingGoal: string;
    startDate: string;
    imageUrl?: string;
  }) => void;
}

const projectTypes = ["Solar", "Wind", "Hydro", "Biogas"];

const NewProjectModal = ({ open, onClose, onAddProject }: NewProjectModalProps) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [fundingGoal, setFundingGoal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { user } = useAuth();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to create a project",
        variant: "destructive"
      });
      return;
    }

    if (!name || !type || !fundingGoal || !startDate) {
      toast({
        title: "All fields are required",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let imageUrl;
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${user.id}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('project-images')
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('project-images')
          .getPublicUrl(filePath);

        imageUrl = publicUrl;
      }

      const { error } = await supabase
        .from('projects')
        .insert([
          {
            owner_id: user.id,
            name,
            type,
            funding_goal: fundingGoal,
            start_date: startDate,
            status: 'Active',
            funded: 0,
            investors: 0,
            image_url: imageUrl
          }
        ]);

      if (error) throw error;

      onAddProject({
        name,
        type,
        fundingGoal,
        startDate,
        imageUrl
      });

      setName("");
      setType("");
      setFundingGoal("");
      setStartDate("");
      setImageFile(null);
      setImagePreview(null);
      onClose();

      toast({
        title: "Project created",
        description: "Your project has been created successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error creating project",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a New Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Project Image</label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
            <div 
              className="w-full h-48 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer relative"
              onClick={() => fileInputRef.current?.click()}
            >
              {imagePreview ? (
                <img 
                  src={imagePreview} 
                  alt="Project Preview" 
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-center">
                  <Upload className="mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-500">Click to upload project image</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Project Name</label>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter project name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Type</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={type}
              onChange={e => setType(e.target.value)}
              required
            >
              <option value="">Select type</option>
              {projectTypes.map(pt => (
                <option value={pt} key={pt}>{pt}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Funding Goal (INR)</label>
            <Input
              type="number"
              value={fundingGoal}
              onChange={e => setFundingGoal(e.target.value)}
              placeholder="e.g., 2500000"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Start Date</label>
            <Input
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-greennova-green"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Add Project"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectModal;
