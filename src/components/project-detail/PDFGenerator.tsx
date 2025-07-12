
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "@/hooks/use-toast";
import ProspectusPDF from "./ProspectusPDF";

interface PDFGeneratorProps {
  project: {
    title: string;
    icon: React.ReactNode;
    image: string;
    fullDescription: string;
    location: string;
    power: string;
    duration: string;
    investors: number;
    minInvestment: string;
    returnRate: string;
    riskLevel: string;
    fundingGoal: string;
    impactMetrics: string[];
  };
  children: (props: {
    handleDownloadProspectus: () => Promise<void>;
    isGeneratingPDF: boolean;
    prospectusRef: React.RefObject<HTMLDivElement>;
  }) => React.ReactNode;
}

const PDFGenerator = ({ project, children }: PDFGeneratorProps) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const prospectusRef = useRef<HTMLDivElement>(null);

  const handleDownloadProspectus = async () => {
    if (!prospectusRef.current) return;
    
    setIsGeneratingPDF(true);
    
    try {
      const loadingToast = toast({
        title: "Generating PDF",
        description: "Please wait while we prepare your prospectus...",
        variant: "default",
      });

      // Create a deep clone of the prospectus element
      const prospectusElement = prospectusRef.current;
      
      // Handle images to avoid CORS issues
      const tempImages = prospectusElement.querySelectorAll('img');
      const originalSrcs: string[] = [];
      
      // Save original image sources and replace with placeholders
      for (let i = 0; i < tempImages.length; i++) {
        originalSrcs.push(tempImages[i].src);
        tempImages[i].src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
      }
      
      // Generate canvas from the DOM element
      const canvas = await html2canvas(prospectusElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      });
      
      // Restore original image sources
      for (let i = 0; i < tempImages.length; i++) {
        tempImages[i].src = originalSrcs[i];
      }
      
      loadingToast.dismiss();
      
      // Convert canvas to PDF
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      
      // Calculate dimensions to fit A4
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
      
      pdf.addImage(
        imgData, 
        "JPEG", 
        imgX, 
        imgY, 
        imgWidth * ratio, 
        imgHeight * ratio
      );
      
      // Save the PDF
      pdf.save(`${project.title.replace(/\s+/g, '_')}_prospectus.pdf`);
      
      toast({
        title: "Prospectus Downloaded",
        description: `Prospectus for ${project.title} has been downloaded successfully.`,
        variant: "default",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      
      toast({
        title: "PDF Generation Failed",
        description: "There was an error generating the prospectus PDF. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <>
      <div className="hidden">
        <ProspectusPDF ref={prospectusRef} project={project} />
      </div>
      {children({
        handleDownloadProspectus,
        isGeneratingPDF,
        prospectusRef,
      })}
    </>
  );
};

export default PDFGenerator;
